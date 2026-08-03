export interface Book {
  _id: string;
  title: string;
  author: string;
  desc: string;
  createdAt: string;
  updatedAt: string;
}
export interface FetchBooksResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: Book[];
}
