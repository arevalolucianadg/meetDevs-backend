import { Schema, model } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

import { IUser } from './user.interface';

const UserSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: [true, 'El nombre es requerido.'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'El apellido es requerido.'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'El email es requerido.'],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'La contraseña es requerida.'],
    trim: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['ADMIN', 'USER'],
    default: 'USER',
  },
  photo: {
    type: String,
    trim: true,
  },
});

UserSchema.set('toJSON', {
  transform: (document: any, returnedObject: any) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
    
    delete returnedObject.password;
  },
});

UserSchema.plugin(uniqueValidator);

export default model<IUser>('User', UserSchema);
