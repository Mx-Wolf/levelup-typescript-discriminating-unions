export interface ApiSuccess<TData>{
  type: 'success';
  form: Required<TData>;
}
