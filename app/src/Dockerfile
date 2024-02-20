FROM node:alpine
WORKDIR /app
EXPOSE 8080
COPY package.json .
RUN npm install
COPY . .
CMD [ "npm", "start" ]


# FROM node:alpine AS builder 

# WORKDIR /app

# COPY /src/package.json .

# RUN npm install 

# COPY /src .   

# RUN npm run build


# FROM nginx:alpine AS production

# COPY --from=builder /app/dist /usr/share/nginx/html
# # RUN ls -latr /usr/share/nginx/html

# COPY nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
