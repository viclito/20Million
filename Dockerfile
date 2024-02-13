# Use an official Node.js runtime as a parent image
FROM node:16 as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# # Use a smaller Node.js runtime for the production image
# FROM node:16

# # Set the working directory in the container
# WORKDIR /app

# # Copy the built application from the builder stage
# COPY --from=builder /app/.next .next
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/package.json ./package.json

# # Install the next package globally (make sure it's compatible with Node.js version 16)
# RUN npm install -g next

# Expose the port on which your Next.js app will run (9865)
EXPOSE 53147

# Start the Next.js application
CMD ["npm", "start"]
