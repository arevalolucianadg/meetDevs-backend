import { Handler } from 'express';

const notFound: Handler = (request, response, next) => {
  response.status(404).end();
};

export default notFound;