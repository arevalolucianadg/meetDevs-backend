# meetDevs Backend

**Clonar repositorio**
``git clone https://github.com/arevalolucianadg/meetDevs-backend.git``

**Ir a carpeta clonada**
``cd meetDevs-backend``

**Instalar dependencias**
``npm install`` o ``npm i``

**Crear archivo .env en la raíz del directorio**
```
PORT=8080

JWT_SECRET_KEY=VkRCNktDjH672kLms2qmdS

MONGODB_URI=mongodb+srv://meetdevs_admin_user:0BkWajCTOW5CRY3K@cluster0.kj5vh.mongodb.net/meetDevs

CLOUDINARY_URL=cloudinary://229184362934853:juu1MRIcegXXD-fSczK3IEr91js@dt1bb31mb
```

**Ejecutar en modo desarrollo**
``npm run dev``

**Acceder**
``http://localhost:8080/``

**Documentación Swagger (in progress)**
``http://localhost:8080/swagger/``

### STACK
Backend con Node JS, Express y TypeScript
* **Encriptación de passwords:** [bcrypt](https://www.npmjs.com/package/bcrypt)
* **Manejo de tokens:** JsonWebToken ([JWT](https://jwt.io/))
* **Manejo de variables de entorno:** [Dotenv](https://github.com/motdotla/dotenv)
* **Subida de imágenes a la nube:** [Cloudinary](https://www.npmjs.com/package/cloudinary)
* **Habilitación de CORS:** [Cors](https://www.npmjs.com/package/cors)
* **Manejo de archivos en el servidor:** [Express Fileupload](https://www.npmjs.com/package/express-fileupload)
* **ORM base de datos Mongo:** [Mongoose](https://www.npmjs.com/package/mongoose)
* **Logs en consola:** [Morgan](https://www.npmjs.com/package/morgan)
* **Documentación Swagger:** [Swagger JSDoc](https://www.npmjs.com/package/swagger-jsdoc) - [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express)
* **Generación de ids:** [UUID](https://www.npmjs.com/package/uuid)
