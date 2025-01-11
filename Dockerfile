# (1) start with base image (node js)
# FROM node:20.16.0

# # (2) create app folder 
# WORKDIR /app

# # (3) copy package.json 
# COPY package.json .

# # (4) install dependencies
# ARG NODE_ENV
# RUN if [ "${NODE_ENV}" = "production" ]; then \
#     npm install --only=production; \
# else \
#     npm install; \
# fi

# # (5) copy all files
# COPY . .

# # (6) expose port
# EXPOSE 4000

# # (7) start the app
# CMD ["npm", "start"]



# start with base image (node js)
FROM node:20.16.0 as base



FROM base as production
# (2) create app folder 
WORKDIR /app

# (3) copy package.json 
COPY package.json .

# (4) install dependencies
RUN npm install --only=production

# (5) copy all files
COPY . .

# (6) expose port
EXPOSE 4000

# (7) start the app
CMD ["npm", "start"]




FROM base as development
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
CMD ["npm", "run","dev"]