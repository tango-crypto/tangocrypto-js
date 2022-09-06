export interface PaginateResponse<T> {
  data: T[];
  cursor: string;
}
