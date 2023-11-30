FROM node:alpine3.18
WORKDIR /app
COPY . .
RUN npm install
CMD [ "npm", "run", "start-docker" ]
EXPOSE 3000