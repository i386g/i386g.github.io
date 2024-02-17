# node lts
FROM node:lts

# client dependencies
WORKDIR /client/
COPY ./client/package.json ./client/package-lock.json ./
RUN npm ci

# client files
WORKDIR /client/
COPY ./client/ ./

# client build
WORKDIR /client/
RUN npx --yes vite build

# client serve
WORKDIR /client/
CMD npx --yes serve ./dist/