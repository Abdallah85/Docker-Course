# (1) start with base image (node js)
FROM node:20.16.0

# (2) create app folder 
WORKDIR /app

# (3) copy package.json 
COPY package.json .

# (4) install dependencies
RUN npm install

# (5) copy all files
COPY . .

# (6) expose port
EXPOSE 4000

# (7) start the app
CMD [ "npm" ,"start"]