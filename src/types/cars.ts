export type FuelType = "gasoline" | "electric";

export interface GetCarsParams {
  page?: number;
  perPage?: number;
  sortOrder?: string;
}

export interface Car {
  _id: string;
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
  mileage: number;
  fuelType: FuelType;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetCarsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: Car[];
}

export interface CreateCarBody {
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
  mileage: number;
  fuelType: FuelType;
  description?: string;
}
