ARG VARIANT="16-bullseye"
FROM node:16-bullseye

WORKDIR /app

RUN apt update && \
    npm install --save next react react-dom && \
    npm install && \
    npm upgrade
