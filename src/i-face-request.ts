export interface ApiRequest<TData>{
  type: 'request';
  form: Partial<TData>;
}
