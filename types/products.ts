export interface Product {
  _id: string;
  name: string;
  img: string;
  category: string;
  price: number;
  size: string;
  is10PercentOff: boolean;
  popularity: number;
}

export interface GetProductResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  products: Product[];
}
