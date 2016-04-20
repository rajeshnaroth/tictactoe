# Following steps from https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/tictactoe
WORKDIR /usr/src/tictactoe

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 9000

CMD [ "npm", "start" ]