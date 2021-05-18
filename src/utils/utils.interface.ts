import { IUser } from '../api/user/user.interface';

interface DataResponse {
  token?: string;
  user?: IUser | true;
}
export interface HandleResponseProps {
  data: IUser | IUser[] | DataResponse | null | string;
  message: string;
  success: 'OK' | 'ERROR' | boolean;
}
