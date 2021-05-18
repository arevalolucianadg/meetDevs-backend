/**
 * @swagger
 * components:
 *  schemas:
 *    LoginRequest:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          description: Email del usuario
 *        password:
 *          type: string
 *          description: Contraseña del usuario
 *      required:
 *        - email
 *        - password
 *      example:
 *        email: luke.skywalker@gmail.com
 *        password: lskywalker
 *    AuthRequest:
 *      type: object
 *      properties:
 *        token:
 *          type: string
 *          description: Token del usuario
 *      required:
 *        - token
 *      example:
 *        token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYTNmNWU1ZjdjY2RhMzY2NDgxMzU2MSIsImVtYWlsIjoibHVrZS5za3l3YWxrZXJAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNjIxMzY2MjYzLCJleHAiOjE2MjE0NTI2NjN9.9GycvrbPAdkm779jTvqC-dQZ_DVVQza59G0fxo933pw
 *    AuthResponse:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: ID del usuario
 *        email:
 *          type: string
 *          description: Email del usuario
 *        role:
 *          type: string
 *          description: Rol del usuario
 *        iat:
 *          type: number
 *          description: IAT de token JWT
 *        exp:
 *          type: number
 *          description: EXP de token JWT
 *      example:
 *        id: 60a3f5e5f7ccda3664813561
 *        email: luke.skywalker@gmail.com
 *        role: ADMIN
 *        iat: 1621366263
 *        exp: 1621452663
 */


/**
 * @swagger
 * /auth:
 *  post:
 *    summary: Verificación de usuario
 *    tags: [auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/AuthRequest'
 *    responses:
 *      200:
 *          description: Usuario autenticado
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          data:  
 *                              $ref: '#/components/schemas/AuthResponse'
 *                          message:
 *                              type: string
 *                              default: Usuario autenticado.   
 *                          success:
 *                              type: boolean
 *                              default: true
 *      400:
 *          description: Token es requerido
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
 *                              default: Token es requerido.
 *                          success:
 *                              type: boolean
 *                              default: false
 *      401:
 *          description: Usuario no autenticado
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
 *                              default: Usuario no autenticado.
 *                          success:
 *                              type: boolean
 *                              default: false
 *
 */


/**
 * @swagger
 * /auth/login:
 *  post:
 *    summary: Autenticación de usuario
 *    tags: [auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/LoginRequest'
 *    responses:
 *      200:
 *          description: Usuario autenticado
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          data:
 *                              type: object
 *                              properties: 
 *                               token: 
 *                                type: string 
 *                                default: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYTNmNWU1ZjdjY2RhMzY2NDgxMzU2MSIsImVtYWlsIjoibHVrZS5za3l3YWxrZXJAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNjIxMzY2MjYzLCJleHAiOjE2MjE0NTI2NjN9.9GycvrbPAdkm779jTvqC-dQZ_DVVQza59G0fxo933p 
 *                               user:  
 *                                $ref: '#/components/schemas/SafeUser'
 *                          message:
 *                              type: string
 *                              default: Usuario autenticado.   
 *                          success:
 *                              type: boolean
 *                              default: true
 *      400:
 *          description: Email y password son requeridos
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
 *                              default: Email y password son requeridos.
 *                          success:
 *                              type: boolean
 *                              default: false
 *      401:
 *          description: Usuario no registrado | Contraseña incorrecta
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
 *                              default: Usuario no registrado. | La contraseña ingresada es incorrecta.
 *                          success:
 *                              type: boolean
 *                              default: false
 *      500:
 *          description: Error en el servidor
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
 *                              default: Error en el servidor.
 *                          success:
 *                              type: boolean
 *                              default: false
 *
 */
