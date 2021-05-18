import { Router } from 'express';
import { createUser, getUsers, getUser } from './user.controller';

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
 *  parameters:
 *   userId:
 *    in: path
 *    name: id
 *    required: true
 *    schema:
 *     type: string
 *    description: ID del usuario
 */

/**
 * @swagger
 * /users:
 *  get:
 *    summary: Crear un nuevo usuario
 *    tags: [User]
 *    responses:
 *      200:
 *          description: Obtener lista de usuarios
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          data:
 *                              type: array
 *                              items: 
 *                               $ref: '#/components/schemas/User'
 *                          message:
 *                              type: string
 *                              default: Usuario obtenido con éxito.
 *                          success:
 *                              type: boolean
 *                              default: true
 *      500:
 *          description: Error al obtener usuarios de la base de datos
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
 *                              default: Ha ocurrido un error al obtener el usuario requerido.
 *                          success:
 *                              type: boolean
 *                              default: false
 *      
 */
userRouter.get('/', getUsers);

/**
 * @swagger
 * /users/{id}:
 *  get:
 *    summary: Crear un nuevo usuario
 *    tags: [User]
 *    parameters:
 *     - $ref: '#/components/parameters/userId'
 *    responses:
 *      200:
 *          description: Obtener lista de usuarios
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          data:
 *                              type: array
 *                              items: 
 *                               $ref: '#/components/schemas/User'
 *                          message:
 *                              type: string
 *                              default: Lista de usuarios obtenida con éxito.
 *                          success:
 *                              type: boolean
 *                              default: true
 *      500:
 *          description: Error al obtener usuarios de la base de datos
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
 *                              default: Ha ocurrido un error al obtener todos los usuarios.
 *                          success:
 *                              type: boolean
 *                              default: false
 *      
 */
userRouter.get('/:id', getUser);

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
 *                              default: El usuario ha sido creado con éxito.
 *                          success:
 *                              type: boolean
 *                              default: true
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
