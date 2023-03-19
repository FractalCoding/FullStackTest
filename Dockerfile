FROM node:alpine
COPY . \app
WORKDIR \app
CMD npm install --save @google-cloud/firestore
CMD export GOOGLE_APPLICATION_CREDENTIALS="/secrets/serv-firestore.key"
CMD node app.js
