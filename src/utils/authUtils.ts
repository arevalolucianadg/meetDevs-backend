// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import jwt from 'jsonwebtoken';
import userModel from '../api/user/user.model';

const SECRET_KEY = process.env.JWT_SECRET_KEY || '';
const expiresIn = '24h';

type UserToken = {
  id: string;
  email: string;
  role: string;
  photo: string;
};

type createTokenProps = {
  userToken: UserToken;
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET_KEY); 
  } catch (error) {
    return null;
  }
};

export const createToken = ({ userToken }: createTokenProps): string | null => {
  if (!SECRET_KEY) return null;

  return jwt.sign(userToken, SECRET_KEY, { expiresIn });
};
