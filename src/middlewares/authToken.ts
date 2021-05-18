import { Handler } from 'express';

import { handleResponse } from '../utils/handleResponse';
import { verifyToken } from '../utils/authUtils';

export const validateToken: Handler = async (req: Record<string,any>, res, next) => {
  const token = req.header('authorization');

  if (!token || token.split(' ')[0] !== 'Bearer' ) {
    return res.status(401).json(
      handleResponse({
        data: null,
        message: 'No autorizado.',
        success: false,
      })
    );
  }

  const verifiedUser = verifyToken(token.split(' ')[1]);
  if (verifiedUser) {
    next();
  } else {
    return res.status(401).json({
      data: null,
      message: 'Usuario no autenticado.',
      success: false,
    });
  }

};
