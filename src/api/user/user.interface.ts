import { Document, Model } from 'mongoose';

export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: 'ADMIN' | 'USER';
    photo: string;
}

type UserDoc = IUser & Document;

export interface IUserDocument extends UserDoc {}
export interface IUserModel extends Model<IUserDocument> { }