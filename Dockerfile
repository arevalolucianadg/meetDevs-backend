FROM node:14.17

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
COPY tsconfig.json /usr/src/app/

RUN npm install
COPY . /usr/src/app
RUN npm run build
COPY . /usr/src/app

# Check DIST folder
RUN ls -a

EXPOSE 8080

CMD [ "npm", "start" ]