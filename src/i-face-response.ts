import { ApiError } from './i-face-api-error';
import { ApiSuccess } from './i-face-api-row';

export type ApiResponse<T> = ApiSuccess<T> | ApiError<T>;