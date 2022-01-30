import { TableReservation } from './i-face-example';
import { ApiResponse } from './i-face-response';

export const api = async (form: Partial<TableReservation>): Promise<ApiResponse<TableReservation>> => {
  return Promise.reject(new Error("not implemented yet"));
}