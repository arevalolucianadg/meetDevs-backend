/**
 * @swagger
 * components:
 *  schemas:
 *    NewUser:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: ID del usuario
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
 *    SafeUser:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: ID del usuario
 *        firstName:
 *          type: string
 *          description: Nombre del usuario
 *        lastName:
 *          type: string
 *          description: Apellido del usuario
 *        email:
 *          type: string
 *          description: Email del usuario
 *        role:
 *          type: string
 *          description: Rol del usuario
 *        photo:
 *          type: string
 *          description: Foto del usuario
 *      example:
 *        role: USER
 *        firstName: Han
 *        lastName: Solo
 *        email: han.solo@gmail.com
 *        id: 60a3f5e5f7ccda3664813561
 *  parameters:
 *   userId:
 *    in: path
 *    name: id
 *    required: true
 *    schema:
 *     type: string
 *    description: ID del usuario
 *  securitySchemes:
 *   bearerAuth:
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 */


/**
 * @swagger
 * /users:
 *  get:
 *    summary: Crear un nuevo usuario
 *    tags: [users]
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
 *                               $ref: '#/components/schemas/SafeUser'
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


/**
 * @swagger
 * /users/{id}:
 *  get:
 *    summary: Obtener usuario por ID
 *    tags: [users]
 *    security:
 *     - bearerAuth: []
 *    parameters:
 *     - $ref: '#/components/parameters/userId'
 *    responses:
 *      200:
 *          description: Obtener usuario por ID
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          data:
 *                              $ref: '#/components/schemas/SafeUser'
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
 *                              default: Ha ocurrido un error al obtener todos los usuarios.
 *                          success:
 *                              type: boolean
 *                              default: false
 *      
 */


/**
 * @swagger
 * /users:
 *  post:
 *    summary: Crear un nuevo usuario
 *    tags: [users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/NewUser'
 *    responses:
 *      201:
 *          description: El usuario ha sido creado con éxito.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          data:
 *                              $ref: '#/components/schemas/SafeUser'
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


/**
 * @swagger
 * /users/{id}:
 *  put:
 *    summary: Actualizar usuario
 *    tags: [users]
 *    security:
 *     - bearerAuth: []
 *    parameters:
 *     - $ref: '#/components/parameters/userId'
 *    requestBody:
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/NewUser'
 *    responses:
 *      200:
 *          description: Usuario actualizado con éxito
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          data:
 *                              $ref: '#/components/schemas/SafeUser'
 *                          message:
 *                              type: string
 *                              default: El usuario fue actualizado con éxito.
 *                          success:
 *                              type: boolean
 *                              default: true
 *      400:
 *          description: El ID es requerido para actualizar un usuario
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
 *                              default: El ID es requerido para actualizar un usuario.
 *                          success:
 *                              type: boolean
 *                              default: false
 *      404:
 *          description: Usuario no encontrado
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
 *                              default: El ID ingresado no pertenece a un usuario existente.
 *                          success:
 *                              type: boolean
 *                              default: false
 *      
 */


/**
 * @swagger
 * /users/{id}:
 *  delete:
 *    summary: Eliminar usuario
 *    tags: [users]
 *    security:
 *     - bearerAuth: []
 *    parameters:
 *     - $ref: '#/components/parameters/userId'
 *    responses:
 *      200:
 *          description: Usuario eliminado con éxito
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
 *                              default: El usuario ha sido eliminado con éxito.
 *                          success:
 *                              type: boolean
 *                              default: true
 *      400:
 *          description: El ID es requerido para eliminar un usuario
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
 *                              default: El ID es requerido para eliminar un usuario.
 *                          success:
 *                              type: boolean
 *                              default: false
 *      404:
 *          description: Usuario no encontrado
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
 *                              default: Usuario no encontrado.
 *                          success:
 *                              type: boolean
 *                              default: true
 *      
 */
