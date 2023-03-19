FROM node:alpine
COPY . \app
WORKDIR \app
CMD npm install --save @google-cloud/firestore
CMD node app.js
