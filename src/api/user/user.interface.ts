import { Document, Model } from 'mongoose';

import { IEvent } from '../event/event.interface';

export interface IUser {
    _id: string;
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: 'ADMIN' | 'USER';
    photo: string;
    eventsCreated: IEvent[];
}

type UserDoc = IUser & Document;

export interface IUserDocument extends UserDoc {}
export interface IUserModel extends Model<IUserDocument> { }