export interface Book {
  _id: string;
  title: string;
  author: string;
  desc: string;
}

export interface GetBooksResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: Book[];
}
