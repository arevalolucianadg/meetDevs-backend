// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { Request, Response } from 'express';
import cloudinary from 'cloudinary';
cloudinary.v2.config(process.env.CLOUDINARY_URL || '');

import { allowedCollections, handleResponse } from '../../utils';
import eventModel from '../event/event.model';

const listCollections = ['events'];

export const uploadImage = async (req: Request, res: Response) => {
  const { collection, id } = req.params;
  const file = req.files?.file;

  if (!id && !collection) {
    return res.status(400).json(
      handleResponse({
        data: null,
        message:
          'El ID y la colección son requeridos para actualizar la imagen del evento.',
        success: false,
      })
    );
  }

  if (!file) {
    return res.status(400).json(
      handleResponse({
        data: null,
        message: 'La imagen es requerida para actualizar la imagen del evento.',
        success: false,
      })
    );
  }

  try {
    allowedCollections({
      collection,
      collections: listCollections,
    });

    const model = await eventModel.findById(id);
    const file: any = req.files?.file;

    if (model !== null) {

      if(model.photo) {
        const namePhotoArr = model.photo.split('/');
        const namePhoto    = namePhotoArr[ namePhotoArr.length - 1];
        const [public_id]  = namePhoto.split('.');
        cloudinary.v2.uploader.destroy(public_id);
      }

      const { secure_url } = await cloudinary.v2.uploader.upload(
        file.tempFilePath
      );

      model.photo = secure_url;
      await model.save();

      return res.status(200).json(
        handleResponse({
          data: model,
          message: 'La subida de la imagen fue exitosa.',
          success: true,
        })
      );
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(
      handleResponse({
        data: null,
        message: 'El ID y/o la colección ingresados son incorrectos.',
        success: false,
      })
    );
  }
};
