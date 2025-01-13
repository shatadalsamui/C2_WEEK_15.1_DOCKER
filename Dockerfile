# Use official Node.js v22 image as the base
FROM node:22

# Set the working directory inside the container to /app
WORKDIR /app

# Copy all files from the current directory to the container's /app directory
COPY . .

# Install all dependencies defined in package.json
RUN npm install

# Build the project (e.g., compile TypeScript to JavaScript)
RUN npm run build

# Generate Prisma client code from schema.prisma
RUN npx prisma generate

# Inform Docker that the container listens on port 3000
EXPOSE 3000

# Run the built application using Node.js
CMD ["node", "dist/index.js"]
