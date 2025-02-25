# Step 1: Use an official Node.js image as the base image
FROM node:18 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json into the container
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the project files into the container
COPY . .

# Step 6: Build the project for production
RUN npm run build

# Step 7: Use a lightweight web server to serve the static files
FROM nginx:stable-alpine

# Step 8: Copy the built files from the build step to Nginx's web root
COPY --from=build /app/dist /usr/share/nginx/html

# Step 9: Expose the default port used by Nginx
EXPOSE 80

# Step 10: Start Nginx
CMD ["nginx", "-g", "daemon off;"]
