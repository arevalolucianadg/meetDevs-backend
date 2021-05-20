import { Document, Model } from 'mongoose';
import { IUser } from '../user/user.interface';

export interface IEvent {
    id: string;
    name: string; 
    description: string;
    date: string;
    status: 'PROGRAMMED' | 'PAST' | 'CANCELLED' | 'SUSPENDED';
    creatorUser: string;
    creationDate: string;
    audience: IUser[];
    confirmedAssistance: IUser[];

    photo: string;
}

type EventDoc = IEvent & Document;

export interface IEventDocument extends EventDoc {}
export interface IEventModel extends Model<IEventDocument> { }