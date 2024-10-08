# Use an official Node.js image from Docker Hub
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY ../app/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY ../app .

# Expose the application port
EXPOSE 8080

# Start the application
CMD ["node", "index.js"]
