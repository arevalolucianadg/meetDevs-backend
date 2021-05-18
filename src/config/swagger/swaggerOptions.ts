export const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'meetDevs API',
      version: '1.0.0',
      description: 'API para aplicación de eventos.',
    },
    servers: [
      {
        url: 'localhost:8080',
      },
    ],
  },
  apis: [
    './src/api/user/*.**.ts',
  ],
};
