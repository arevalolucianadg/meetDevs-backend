import { Handler } from 'express';

import { handleResponse } from '../../utils/handleResponse';
import userModel from '../user/user.model';
import eventModel from './event.model';
import { verifyToken } from '../../utils/authUtils';

export const getEvents: Handler = async (req, res) => {
  try {
    const events = await eventModel.find({}).populate('creatorUser', {
      firstName: 1,
      lastName: 1,
      email: 1,
    });

    const resMessage =
      events.length === 0
        ? 'No hay eventos.'
        : 'Lista de eventos obtenida con éxito.';

    res.status(200).json(
      handleResponse({
        data: events,
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
        message: 'Ha ocurrido un error al obtener todos los eventos.',
        success: false,
      })
    );
  }
};

export const getEvent: Handler = async (req, res) => {
  const { id } = req.params;

  try {
    const eventFound = await eventModel.findById(id).populate('creatorUser', {
      firstName: 1,
      lastName: 1,
      email: 1,
    });

    const resMessage =
      eventFound === null
        ? 'No hay eventos para el ID proporcionado.'
        : 'Evento obtenido con éxito.';

    res.status(200).json(
      handleResponse({
        data: eventFound,
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
        message: 'Ha ocurrido un error al obtener el evento requerido.',
        success: false,
      })
    );
  }
};

export const createEvent: Handler = async (req, res) => {
  const { name, description, date, userId } = req.body;

  if (!name && !description && !date && !userId) {
    return res.status(400).json(
      handleResponse({
        data: null,
        message: 'Nombre, descripción, fecha e ID de usuario son requeridos.',
        success: false,
      })
    );
  }

  try {
    const userRequest = await userModel.findById(userId);

    if (userRequest?.role !== 'ADMIN') {
      return res.status(401).json(
        handleResponse({
          data: null,
          message: 'No autorizado.',
          success: false,
        })
      );
    }

    const newEvent = new eventModel({
      name,
      description,
      date,
      creatorUser: userRequest._id,
    });

    const savedEvent = await newEvent.save();

    userRequest.eventsCreated = userRequest.eventsCreated.concat(
      savedEvent._id
    );
    await userRequest.save();

    return res.status(201).json(
      handleResponse({
        data: savedEvent,
        message: 'Evento creado con éxito.',
        success: true,
      })
    );
  } catch (error) {
    console.log(error);
    return res.status(401).json(
      handleResponse({
        data: null,
        message: 'No autorizado.',
        success: false,
      })
    );
  }
};

export const updateEvent: Handler = async (req, res) => {
  const { id } = req.params;
  const { ...event } = req.body;

  if (!id) {
    return res.status(400).json(
      handleResponse({
        data: null,
        message: 'El ID es requerido para actualizar un evento.',
        success: false,
      })
    );
  }

  try {
    const eventUpdated = await eventModel.findByIdAndUpdate(id, event, {
      new: true,
    });
    res.status(200).json(
      handleResponse({
        data: eventUpdated,
        message: 'El evento fue actualizado con éxito.',
        success: true,
      })
    );
  } catch (error) {
    console.log(error);
    res.status(404).json(
      handleResponse({
        data: null,
        message: 'El ID ingresado no pertenece a un evento existente.',
        success: false,
      })
    );
  }
};

export const deleteEvent: Handler = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json(
      handleResponse({
        data: null,
        message: 'El ID es requerido para eliminar un evento.',
        success: false,
      })
    );
  }

  try {
    await eventModel.findByIdAndDelete(id);
    return res.status(200).json(
      handleResponse({
        data: null,
        message: 'El evento ha sido eliminado con éxito.',
        success: true,
      })
    );
  } catch (error) {
    console.log(error);
    return res.status(404).json(
      handleResponse({
        data: null,
        message: 'Evento no encontrado.',
        success: true,
      })
    );
  }
};

export const createAttende: Handler = async (req, res) => {
  const { eventId } = req.params;
  const token = req.headers.authorization;

  try {
    const eventFound = await eventModel.findById(eventId);
    let userId: any;
    if (token !== undefined) {
      try {
        const userVerify: any = verifyToken(token.split(' ')[1]);
        const user: any = await userModel.findById(userVerify.id);
        userId = user._id;
      } catch (error) {
        console.log(error);
        return res.status(500).json(
          handleResponse({
            data: null,
            message: 'Ocurrió un error al verificar al usuario.',
            success: false,
          })
        );
      }
    }

    if (eventFound !== null) {
      const {audience} = eventFound;
      const isAssistant = audience.find( assistant => assistant._id.toString() === userId._id.toString());
      eventFound.audience = isAssistant ? eventFound.audience : eventFound.audience.concat(userId);
      
      await eventFound.save();

      return res.status(200).json(
        handleResponse({
          data: eventFound,
          message: 'Asistencia registrada con éxito.',
          success: true,
        })
      );
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json(
      handleResponse({
        data: null,
        message: 'Ocurrió un error al solicitar el evento.',
        success: false,
      })
    );
  }
};
