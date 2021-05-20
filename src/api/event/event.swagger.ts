/**
 * @swagger
 * components:
 *  schemas:
 *    NewEvent:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: Nombre del evento
 *        description:
 *          type: string
 *          description: Descripción del evento
 *        date:
 *          type: string
 *          description: Fecha del evento
 *        userId:
 *          type: string
 *          description: ID del usuario ADMIN que crea el evento
 *      required:
 *        - name
 *        - description
 *        - date
 *        - userId
 *      example:
 *        name: Nombre del evento
 *        description: Descripción del evento
 *        date: Tue May 24 2021 20:00:00 GMT-0300
 *        userId: 60a44a2927981948386b0b57
 * 
 *    EventResponse:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          description: Estado del evento
 *        audience:
 *          type: array
 *          description: Asistentes al evento
 *        confirmedAssistance:
 *          type: array
 *          description: Asistentes confirmados del evento
 *        name:
 *          type: string
 *          description: Nombre del evento
 *        description:
 *          type: string
 *          description: Descripción del evento
 *        date:
 *          type: string
 *          description: Fecha del evento
 *        creatorUser:
 *          type: string
 *          description: ID del usuario ADMIN que creó el evento
 *        creationDate:
 *          type: string
 *          description: Fecha de creación del evento
 *        id:
 *          type: string
 *          description: ID del evento
 *      required:
 *        - email
 *        - password
 *      example:
 *        status: PROGRAMMED
 *        audience: []
 *        confirmedAssistance: []
 *        name: Nombre del usuario
 *        description: Descripción del evento
 *        date: Tue May 24 2021 20:00:00 GMT-0300
 *        creatorUser: 60a44b3d2d80f543c062812e
 *        creationDate: 2021-05-20T20:00:00.747Z
 *        id: 60a44b3d2d80f543c062812e
 * 
 *    EventResponseFull:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          description: Estado del evento
 *        audience:
 *          type: array
 *          description: Asistentes al evento
 *        confirmedAssistance:
 *          type: array
 *          description: Asistentes confirmados del evento
 *        name:
 *          type: string
 *          description: Nombre del evento
 *        description:
 *          type: string
 *          description: Descripción del evento
 *        date:
 *          type: string
 *          description: Fecha del evento
 *        creatorUser:
 *          type: object
 *          description: Usuario ADMIN creador del evento
 *        creationDate:
 *          type: string
 *          description: Fecha de creación del evento
 *        id:
 *          type: string
 *          description: ID del evento
 *      example:
 *        status: PROGRAMMED
 *        audience: []
 *        confirmedAssistance: []
 *        name: Nombre del usuario
 *        description: Descripción del evento
 *        date: Tue May 24 2021 20:00:00 GMT-0300
 *        creatorUser: { firstName: Leia, lastName: Organa, email: leia.organa@gmail.com, id: 60a44417c194b02e88ba1f60 }
 *        creationDate: 2021-05-20T20:00:00.747Z
 *        id: 60a44b3d2d80f543c062812e
 * 
 */


/**
 * @swagger
 * /events:
 *  get:
 *    summary: Obtener lista de eventos
 *    tags: [events]
 *    responses:
 *      200:
 *          description: Obtener lista de eventos
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          data:
 *                              type: array
 *                              items: 
 *                               $ref: '#/components/schemas/EventResponseFull'
 *                          message:
 *                              type: string
 *                              default: Lista de eventos obtenida con éxito.
 *                          success:
 *                              type: boolean
 *                              default: true
 *      500:
 *          description: Ha ocurrido un error al obtener todos los eventos.
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
 *                              default: Ha ocurrido un error al obtener todos los eventos.
 *                          success:
 *                              type: boolean
 *                              default: false
 *      
 */


/**
 * @swagger
 * /events/{id}:
 *  get:
 *    summary: Obtener evento por ID
 *    tags: [events]
 *    responses:
 *      200:
 *          description: Obtener un evento
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          data: 
 *                              $ref: '#/components/schemas/EventResponseFull'
 *                          message:
 *                              type: string
 *                              default: Evento obtenido con éxito. | No hay eventos para el ID proporcionado.
 *                          success:
 *                              type: boolean
 *                              default: true
 *      500:
 *          description: Ha ocurrido un error al obtener el evento requerido.
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
 *                              default: Ha ocurrido un error al obtener el evento requerido.
 *                          success:
 *                              type: boolean
 *                              default: false
 *      
 */


/**
 * @swagger
 * /events:
 *  post:
 *    summary: Crear un nuevo evento
 *    tags: [events]
 *    security:
 *     - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/NewEvent'
 *    responses:
 *      201:
 *          description: Evento creado con éxito.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          data:
 *                              $ref: '#/components/schemas/EventResponse'
 *                          message:
 *                              type: string
 *                              default: Evento creado con éxito.
 *                          success:
 *                              type: boolean
 *                              default: true
 *      400:
 *          description: Nombre, descripción, fecha e ID de usuario son requeridos.
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
 *                              default: Nombre, descripción, fecha e ID de usuario son requeridos.
 *                          success:
 *                              type: boolean
 *                              default: false
 *      401:
 *          description: No autorizado.
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
 *                              default: No autorizado.
 *                          success:
 *                              type: boolean
 *                              default: false
 *
 */


/**
 * @swagger
 * /events/{id}:
 *  put:
 *    summary: Actualizar un evento por ID
 *    tags: [events]
 *    security:
 *     - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/NewEvent'
 *    responses:
 *      200:
 *          description: Evento actualizado con éxito.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          data:
 *                              $ref: '#/components/schemas/EventResponse'
 *                          message:
 *                              type: string
 *                              default: El evento fue actualizado con éxito.
 *                          success:
 *                              type: boolean
 *                              default: true
 *      400:
 *          description: El ID es requerido para actualizar un evento.
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
 *                              default: El ID es requerido para actualizar un evento.
 *                          success:
 *                              type: boolean
 *                              default: false
 *      404:
 *          description: El ID ingresado no pertenece a un evento existente.
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
 *                              default: El ID ingresado no pertenece a un evento existente.
 *                          success:
 *                              type: boolean
 *                              default: false
 *
 */

/**
 * @swagger
 * /events/{id}:
 *  delete:
 *    summary: Eliminar evento
 *    tags: [events]
 *    security:
 *     - bearerAuth: []
 *    parameters:
 *     - $ref: '#/components/parameters/userId'
 *    responses:
 *      200:
 *          description: Evento eliminado con éxito
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
 *                              default: El evento ha sido eliminado con éxito.
 *                          success:
 *                              type: boolean
 *                              default: true
 *      400:
 *          description: El ID es requerido para eliminar un evento
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
 *                              default: El ID es requerido para eliminar un evento.
 *                          success:
 *                              type: boolean
 *                              default: false
 *      404:
 *          description: Evento no encontrado
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
 *                              default: Evento no encontrado.
 *                          success:
 *                              type: boolean
 *                              default: true
 *      
 */