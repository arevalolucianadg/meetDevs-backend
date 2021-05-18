import { Router } from 'express';
import { createUser } from './user.controller';

const userRouter: Router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: ID autogenerado del usuario
 *        firstName:
 *          type: string
 *          description: Nombre del usuario 
 *        lastName:
 *          type: string
 *          description: Apellido del usuario 
 *        email:
 *          type: string
 *          description: Email del usuario 
 *        password:
 *          type: string
 *          description: Contraseña del usuario 
 *        role:
 *          type: string
 *          description: Rol del usuario 
 *        photo:
 *          type: string
 *          description: Foto del usuario 
 *      required:
 *        - firstName
 *        - lastName
 *        - email
 *        - password
 *      example:
 *        firstName: Han
 *        lastName: Solo
 *        email: han.solo@gmail.com
 *        password: hsolo
 */

/**
 * @swagger
 * /users:
 *  post:
 *    summary: Crear un nuevo usuario 
 *    tags: [User]
 *    requestBody: 
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      201:
 *          description: El usuario ha sido creado con éxito.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          data: 
 *                              $ref: '#/components/schemas/User'
 *                          message:
 *                              type: string
 *                          success:
 *                              type: boolean
 *      400:
 *          description: Nombre, apellido, email y contraseña son requeridos.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          data:
 *                              type: object
 *                              default: null
 *                          message:
 *                              type: string
 *                              default: Nombre, apellido, email y contraseña son requeridos.
 *                          success: 
 *                              type: boolean
 *                              default: false
 *      409:
 *          description: El email ingresado ya existe. Inicie sesión.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          data:
 *                              type: object
 *                              default: null
 *                          message:
 *                              type: string
 *                              default: El email ingresado ya existe. Inicie sesión.
 *                          success: 
 *                              type: boolean
 *                              default: false
 *
 */
userRouter.post('/', createUser);

export default userRouter;

