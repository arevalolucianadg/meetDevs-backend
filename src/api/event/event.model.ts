import { Schema, model } from 'mongoose';
import { IEvent } from './event.interface';

const validStatus = {
  values: ['PROGRAMMED', 'PAST', 'CANCELLED', 'SUSPENDED'],
  message: '\'{VALUE}\' no es un status válido.',
};

const EventSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre del evento es requerido.'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'La descripción del evento es requerida.'],
    trim: true,
  },
  date: {
    type: String,
    required: [true, 'El fecha del evento es requerida.'],
    trim: true,
  },
  status: {
    type: String,
    required: true,
    enum: validStatus,
    default: 'PROGRAMMED',
  },
  creatorUser: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
  audienceCount: {
    type: Number,
    default: 0,
  },
  audience: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  confirmedAssistance: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],

  photo: {
    type: String,
    trim: true,
  },
});

EventSchema.set('toJSON', {
  transform: (document: any, returnedObject: any) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export default model<IEvent>('Event', EventSchema);
