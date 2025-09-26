import axios from "axios";
import type { Car, FetchCarsResponse } from "../types/cars";
import type { FetchCarsParams } from "../types/params";

axios.defaults.baseURL = "https://car-rental-api.goit.global";

export const fetchCars = async (
  params: FetchCarsParams
): Promise<FetchCarsResponse> => {
  const { data } = await axios.get<FetchCarsResponse>("/cars", { params });
  return data;
};

export const fetchCarById = async (carId: string): Promise<Car> => {
  const { data } = await axios.get<Car>(`/cars/${carId}`);
  return data;
};

export const fetchBrands = async (): Promise<string[]> => {
  const { data } = await axios.get<string[]>("/brands");
  return data;
};
