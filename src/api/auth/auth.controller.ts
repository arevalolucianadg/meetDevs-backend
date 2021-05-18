import bcrypt from 'bcrypt';
import { Handler } from 'express';

import userModel from '../user/user.model';
import { createToken, handleResponse } from '../../utils';
import { verifyToken } from '../../utils/authUtils';

export const authController: Handler = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    res.status(400).json(
      handleResponse({
        data: null,
        message: 'Token es requerido.',
        success: false,
      })
    );
  }

  const verifiedUser = verifyToken(token);
  if (verifiedUser) {
    return res.status(200).json(
      handleResponse({
        data: verifiedUser,
        message: 'Usuario autenticado.',
        success: true,
      })
    );
  } else {
    return res.status(401).json({
      data: null,
      message: 'Usuario no autenticado.',
      success: false,
    });
  }
};

export const loginController: Handler = async (req, res) => {
  const { email, password } = req.body;

  if (!email && !password) {
    return res.status(400).json(
      handleResponse({
        data: null,
        message: 'Email y password son requeridos.',
        success: false,
      })
    );
  }

  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(401).json(
      handleResponse({
        data: null,
        message: 'Usuario no registrado.',
        success: false,
      })
    );
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.status(401).json(
      handleResponse({
        data: null,
        message: 'La contraseña ingresada es incorrecta.',
        success: false,
      })
    );
  }

  const userToken = {
    id: user.id,
    email: user.email,
    role: user.role,
    photo: user.photo,
  };

  const access_token = createToken({ userToken });

  if (access_token) {
    return res.status(200).json(
      handleResponse({
        data: {
          token: access_token,
          user,
        },
        message: 'Usuario autenticado.',
        success: true,
      })
    );
  } else {
    return res.status(500).json(
      handleResponse({
        data: null,
        message: 'Error en el servidor.',
        success: false,
      })
    );
  }
};
