import { Handler } from 'express';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

import { handleResponse } from '../../utils/handleResponse';
import userModel from './user.model';

export const createUser: Handler = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName && !lastName && !email && !password) {
    return res.status(400).json(
      handleResponse({
        data: null,
        message: 'Nombre, apellido, email y contraseña son requeridos.',
        success: false,
      })
    );
  }

  const isUserFound = await userModel.findOne({ email });

  if (isUserFound) {
    return res.status(409).json(
      handleResponse({
        data: null,
        message: 'El email ingresado ya existe. Inicie sesión.',
        success: false,
      })
    );
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const newUser = new userModel({
    id: uuidv4(),
    firstName,
    lastName,
    email,
    password: passwordHash,
  });

  const savedUser = await newUser.save();

  res.status(201).json(
    handleResponse({
      data: savedUser,
      message: 'El usuario ha sido creado con éxito.',
      success: true,
    })
  );
};
