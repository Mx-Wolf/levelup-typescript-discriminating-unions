import { TableReservation } from './i-face-example';
import { ApiResponse } from './i-face-response';

interface Api{
  (
    form: Partial<TableReservation>,
  ): Promise<ApiResponse<TableReservation>>
}

export const api:Api = async (form) => Promise.reject(new Error(`not implemented yet ${JSON.stringify(form)}`));
