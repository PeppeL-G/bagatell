FROM node:lts-alpine

# Context needs to be set to parent folder!
# Done in ../docker-compose.yaml

# Copy over and setup the core package.
COPY ./core/ /core/
WORKDIR /core
RUN npm install

# Copy over and setup the web-components package.
COPY ./web-components/ /web-components/
WORKDIR /web-components
RUN npm remove @bagatell/core
RUN npm install
RUN npm install /core

# Copy over and setup the editor app.
WORKDIR /app
COPY ./editor/package*.json ./
RUN npm remove @bagatell/core
RUN npm remove @bagatell/web-components
RUN npm install
RUN npm install /core
RUN npm install /web-components

COPY ./editor/index.html ./index.html
COPY ./editor/public/ ./public
COPY ./editor/vite.config.js ./vite.config.js
COPY ./editor/src ./src

# Start the SPA.
CMD ["npm", "run", "dev"]