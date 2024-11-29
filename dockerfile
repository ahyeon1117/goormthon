FROM node:18-alpine

WORKDIR /src

COPY ./movie-app/package.json .

# RUN yarn
# or
RUN npm install 
RUN npm run build

COPY . .

EXPOSE 3000

# CMD [ "yarn", "start" ]
# or
CMD [ "npm", "start" ]