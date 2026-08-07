export interface Student {
  _id: string;
  firstName: string;
  lastName: string;
  major: string;
  cohortYear: number;
  gpa: number;
  enrolled: boolean;
}

export interface GetStudentsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: Student[];
}
