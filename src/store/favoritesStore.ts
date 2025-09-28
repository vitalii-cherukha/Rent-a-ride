import { create } from "zustand";

const loadFavoritesFromStorage = (): string[] => {
  const saved = localStorage.getItem("favoriteCars");
  return saved ? JSON.parse(saved) : [];
};

interface FavoritesState {
  favorites: string[];
  toggleFavorite: (carId: string) => void;
  isFavorite: (carId: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  favorites: loadFavoritesFromStorage(),

  toggleFavorite: (carId) =>
    set((state) => {
      const newFavorites = state.favorites.includes(carId)
        ? state.favorites.filter((id) => id !== carId)
        : [...state.favorites, carId];

      localStorage.setItem("favoriteCars", JSON.stringify(newFavorites));
      return { favorites: newFavorites };
    }),

  isFavorite: (carId) => get().favorites.includes(carId),
}));
