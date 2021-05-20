import { Handler } from 'express';

import userModel from './user.model';
import { handleResponse } from '../../utils/handleResponse';
import { passwordEncrypt } from '../../utils/passwordEncrypt';

export const getUsers: Handler = async (req, res) => {
  try {
    const users = await userModel.find({}).populate('eventsCreated', {
      status: 1,
      name: 1,
      description: 1,
      date: 1,
    });
    const resMessage =
      users.length === 0
        ? 'No hay usuarios.'
        : 'Lista de usuarios obtenida con éxito.';
    res.status(200).json(
      handleResponse({
        data: users,
        message: resMessage,
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
    const userFound = await userModel.findById(id).populate('eventsCreated', {
      status: 1,
      name: 1,
      description: 1,
      date: 1,
    });
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
  const { firstName, lastName, email, password, role } = req.body;

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

  const passwordHash = await passwordEncrypt(password);

  const newUser = new userModel({
    firstName,
    lastName,
    email,
    password: passwordHash,
    role,
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

export const updateUser: Handler = async (req, res) => {
  const { id } = req.params;
  const { password, ...user } = req.body;

  if (!id) {
    return res.status(400).json(
      handleResponse({
        data: null,
        message: 'El ID es requerido para actualizar un usuario.',
        success: false,
      })
    );
  }

  if (password) {
    const passwordHash = await passwordEncrypt(password);
    user.password = passwordHash;
  }

  try {
    const userUpdated = await userModel.findByIdAndUpdate(id, user, {
      new: true,
    });
    res.status(200).json(
      handleResponse({
        data: userUpdated,
        message: 'El usuario fue actualizado con éxito.',
        success: true,
      })
    );
  } catch (error) {
    console.log(error);
    res.status(404).json(
      handleResponse({
        data: null,
        message: 'El ID ingresado no pertenece a un usuario existente.',
        success: false,
      })
    );
  }
};

export const deleteUser: Handler = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json(
      handleResponse({
        data: null,
        message: 'El ID es requerido para eliminar un usuario.',
        success: false,
      })
    );
  }

  try {
    await userModel.findByIdAndDelete(id);
    return res.status(200).json(
      handleResponse({
        data: null,
        message: 'El usuario ha sido eliminado con éxito.',
        success: true,
      })
    );
  } catch (error) {
    console.log(error);
    return res.status(404).json(
      handleResponse({
        data: null,
        message: 'Usuario no encontrado.',
        success: true,
      })
    );
  }
};
