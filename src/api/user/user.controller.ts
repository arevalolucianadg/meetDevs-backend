import { Handler } from 'express';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

import { handleResponse } from '../../utils/handleResponse';
import userModel from './user.model';

export const getUsers: Handler = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).json(
      handleResponse({
        data: users,
        message: 'Lista de usuarios obtenida con éxito.',
        success: true,
      })
    );
  } catch (error) {
    // TODO loguear error
    console.log(error);
    return res.status(500).json(
      handleResponse({
        data: null,
        message: 'Ha ocurrido un error al obtener todos los usuarios.',
        success: false,
      })
    );
  }
};

export const getUser: Handler = async (req, res) => {
  const { id } = req.params;

  try {
    const userFound = await userModel.findById(id);
    res.status(200).json(
      handleResponse({
        data: userFound,
        message: 'Usuario obtenido con éxito.',
        success: true,
      })
    );
  } catch (error) {
    // TODO loguear error
    console.log(error);
    return res.status(500).json(
      handleResponse({
        data: null,
        message: 'Ha ocurrido un error al obtener el usuario requerido.',
        success: false,
      })
    );
  }

};

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
