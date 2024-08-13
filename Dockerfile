# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app 

# Copy package.json and package-lock.json (or yarn.lock) into the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Expose the port that the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
