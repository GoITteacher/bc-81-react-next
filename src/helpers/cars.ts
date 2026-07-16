export interface CarType {
  _id: string;
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
  mileage: number;
  fuelType: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export const cars = [
  {
    _id: "6a4bb6b5f432de3ea62b7e01",
    make: "Запорожєць",
    model: "горбатий",
    year: 1964,
    color: "white",
    price: 20000,
    mileage: 100,
    fuelType: "gasoline",
    description: "9 хвилин позору і ти на дачі...",
    createdAt: "2026-07-06T14:07:49.438Z",
    updatedAt: "2026-07-09T12:35:01.220Z",
  },
  {
    _id: "6a490c6de571f76c874c7c29",
    make: "Porsche",
    model: "911 Carrera",
    year: 2024,
    color: "Yellow",
    price: 128000,
    mileage: 3500,
    fuelType: "gasoline",
    description:
      "Iconic sports car delivering exceptional performance and handling.",
    createdAt: "2026-07-04T13:36:45.650Z",
    updatedAt: "2026-07-04T13:36:45.650Z",
  },
  {
    _id: "6a490c69e571f76c874c7c27",
    make: "Hyundai",
    model: "Tucson",
    year: 2023,
    color: "Green",
    price: 31800,
    mileage: 15000,
    fuelType: "hybrid",
    description:
      "Modern family SUV with spacious interior and advanced safety systems.",
    createdAt: "2026-07-04T13:36:41.261Z",
    updatedAt: "2026-07-04T13:36:41.261Z",
  },
  {
    _id: "6a490c64e571f76c874c7c25",
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2021,
    color: "White",
    price: 46900,
    mileage: 39000,
    fuelType: "hybrid",
    description:
      "Luxury sedan featuring digital cockpit and adaptive cruise control.",
    createdAt: "2026-07-04T13:36:36.599Z",
    updatedAt: "2026-07-04T13:36:36.599Z",
  },
  {
    _id: "6a490c60e571f76c874c7c23",
    make: "Honda",
    model: "Civic",
    year: 2022,
    color: "Blue",
    price: 24900,
    mileage: 31000,
    fuelType: "gasoline",
    description: "Sporty sedan with responsive handling and modern technology.",
    createdAt: "2026-07-04T13:36:32.212Z",
    updatedAt: "2026-07-04T13:36:32.212Z",
  },
  {
    _id: "6a490c5be571f76c874c7c21",
    make: "Volkswagen",
    model: "Golf",
    year: 2019,
    color: "Silver",
    price: 18200,
    mileage: 73000,
    fuelType: "diesel",
    description: "Practical hatchback with low fuel consumption.",
    createdAt: "2026-07-04T13:36:27.555Z",
    updatedAt: "2026-07-04T13:36:27.555Z",
  },
  {
    _id: "6a490c56e571f76c874c7c1f",
    make: "Audi",
    model: "A6",
    year: 2022,
    color: "Gray",
    price: 52900,
    mileage: 28000,
    fuelType: "hybrid",
    description:
      "Executive sedan with premium interior and mild hybrid engine.",
    createdAt: "2026-07-04T13:36:22.835Z",
    updatedAt: "2026-07-04T13:36:22.835Z",
  },
  {
    _id: "6a490c51e571f76c874c7c1d",
    make: "Ford",
    model: "Focus",
    year: 2018,
    color: "Blue",
    price: 13500,
    mileage: 97000,
    fuelType: "gasoline",
    description: "Compact hatchback, ideal for city driving.",
    createdAt: "2026-07-04T13:36:17.322Z",
    updatedAt: "2026-07-04T13:36:17.322Z",
  },
  {
    _id: "6a490c4ce571f76c874c7c1b",
    make: "Tesla",
    model: "Model 3",
    year: 2023,
    color: "Red",
    price: 39900,
    mileage: 12000,
    fuelType: "electric",
    description: "Electric sedan with Autopilot and long-range battery.",
    createdAt: "2026-07-04T13:36:12.024Z",
    updatedAt: "2026-07-04T13:36:12.024Z",
  },
  {
    _id: "6a490c45e571f76c874c7c19",
    make: "BMW",
    model: "X5",
    year: 2020,
    color: "Black",
    price: 48500,
    mileage: 58000,
    fuelType: "diesel",
    description: "Luxury SUV with panoramic roof, leather interior and AWD.",
    createdAt: "2026-07-04T13:36:05.488Z",
    updatedAt: "2026-07-04T13:36:05.488Z",
  },
];
