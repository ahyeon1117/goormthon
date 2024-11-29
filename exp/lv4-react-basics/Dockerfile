FROM node:18-alpine

WORKDIR /src

# COPY ./exp/lv4-react-basics/movie-app/package.json .
COPY ./movie-app/ .

# RUN yarn
# or
RUN npm install 


EXPOSE 80

# CMD [ "yarn", "start" ]
# or
CMD [ "npm", "start" ]