FROM node:9.6.1
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package*.json .
RUN npm install
RUN npm install react-scripts -g 
RUN npm run build
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
