import { IUser } from '../api/user/user.interface';

export interface HandleResponseProps {
  data: IUser | IUser[] | null;
  message: string;
  success: boolean;
}
