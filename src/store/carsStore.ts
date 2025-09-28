import { create } from "zustand";
import type { Car } from "../types/cars";
import type { FetchCarsParams } from "../types/params";
import { fetchCars } from "../services/carsApi";

interface CarsState {
  // State
  cars: Car[];
  isLoading: boolean;
  page: number;
  totalPages: number;

  // Actions
  setCars: (cars: Car[]) => void;
  addCars: (cars: Car[]) => void;
  setLoading: (loading: boolean) => void;
  resetCars: () => void;
  loadCars: (query: FetchCarsParams) => Promise<void>;
  loadMoreCars: (query: FetchCarsParams) => Promise<void>;
}

export const useCarsStore = create<CarsState>((set, get) => ({
  // Initial state
  cars: [],
  isLoading: false,
  page: 1,
  totalPages: 1,

  // Actions
  setCars: (cars) => set({ cars, page: 1 }),
  addCars: (newCars) =>
    set((state) => ({
      cars: [...state.cars, ...newCars],
      page: state.page + 1,
    })),
  setLoading: (isLoading) => set({ isLoading }),
  resetCars: () => set({ cars: [], page: 1, totalPages: 1 }),

  // Load first page (скидає попередні результати)
  loadCars: async (query) => {
    set({ isLoading: true });
    get().resetCars();

    try {
      const data = await fetchCars({ ...query, page: "1", limit: "12" });
      set({
        cars: data.cars,
        totalPages: Number(data.totalPages),
        page: 1,
        isLoading: false,
      });
    } catch {
      set({ isLoading: false });
    }
  },

  // Load more (додає до існуючих)
  loadMoreCars: async (query) => {
    const { page } = get();
    set({ isLoading: true });

    try {
      const nextPage = page + 1;
      const data = await fetchCars({
        ...query,
        page: String(nextPage),
        limit: "12",
      });
      set((state) => ({
        cars: [...state.cars, ...data.cars],
        page: nextPage,
        isLoading: false,
      }));
    } catch {
      set({ isLoading: false });
    }
  },
}));
