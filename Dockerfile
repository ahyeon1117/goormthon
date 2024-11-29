FROM node:18-alpine

WORKDIR /src

# COPY ./exp/lv4-react-basics/movie-app/package.json .
COPY ./exp/lv4-react-basics/movie-app/ .

# RUN yarn
# or
RUN npm install 
RUN npm run build


EXPOSE 3000

# CMD [ "yarn", "start" ]
# or
CMD [ "npm", "start" ]