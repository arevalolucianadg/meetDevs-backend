import { Handler } from 'express';
import { handleResponse } from '../utils/handleResponse';

export const validateRole: Handler = (req, res, next) => {
  const { role } = req.body;
  if ((role !== 'ADMIN' && role !== 'USER') && role !== undefined) {
    return res.status(400).json(
      handleResponse({
        data: null,
        message:
          'El rol ingresado es incorrecto. Los roles permitidos son ADMIN y USER.',
        success: false,
      })
    );
  }
  next();
};
