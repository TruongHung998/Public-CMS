# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for caching)
COPY package.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install

# Copy rest of the project
COPY . .

# Build the Strapi admin panel
RUN yarn build

# Expose the port Strapi runs on
EXPOSE 1337

# Start the app
CMD ["yarn", "start"]