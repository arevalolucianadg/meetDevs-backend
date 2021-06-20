# meetDevs Backend

## Tabla de contenido
- [🚀 Heroku](#-heroku)
- [📝 Primeros pasos](#-primeros-pasos)
- [🔷 Ejecutar localmente con Docker](#-ejecutar-localmente-con-docker)
- [⚡ Ejecutar localmente con Node](#-ejecutar-localmente-con-node)
- [🔥 STACK](#-stack)
***

### 🚀 Heroku

Disponible en Heroku: [https://meetdevs-back.herokuapp.com/](https://meetdevs-back.herokuapp.com/)
***

### 📝 Primeros pasos
**Clonar repositorio**

``git clone https://github.com/arevalolucianadg/meetDevs-backend.git``

**Ir a carpeta clonada**

``cd meetDevs-backend``
***

### 🔷 Ejecutar localmente con Docker
**Crea imagen Docker**

``docker build -t image-name``

``docker build --progress=plain -t image-name`` (opcional para más detalles)

**Correr imagen Docker**

``docker run -p 8080:8080 image-name``

**Acceder**

``http://localhost:8080/``

**Documentación Swagger (in progress)**

``http://localhost:8080/swagger/``
***

### ⚡ Ejecutar localmente con Node

**Instalaciones necesarias**

- Tener instalado [NodeJS](https://nodejs.org/en/) versión 14.17 *recomendado*.
- Tener NPM versión 7 o posterior *recomendado*.

**Instalar dependencias**

``npm install`` o ``npm i``

**Crear archivo .env en la raíz del directorio**
```
PORT=8080

JWT_SECRET_KEY=VkRCNktDjH672kLms2qmdS

MONGODB_URI=mongodb+srv://meetdevs_admin_user:0BkWajCTOW5CRY3K@cluster0.kj5vh.mongodb.net/meetDevs

CLOUDINARY_URL=cloudinary://229184362934853:juu1MRIcegXXD-fSczK3IEr91js@dt1bb31mb
```

**Ejecutar en modo productivo**

``npm run prod``

**Ejecutar en modo desarrollo**

``npm run dev``

**Acceder**

``http://localhost:8080/``

**Documentación Swagger (in progress)**

``http://localhost:8080/swagger/``
***

### 🔥 STACK
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
