export interface ApiError<TData>{
  type: 'error';
  status: string;
  fieldsWithError: Record<keyof TData> 
}