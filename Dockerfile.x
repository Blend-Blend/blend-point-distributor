# Build stage
FROM node:23.3.0-slim AS builder

WORKDIR /app

# Install OpenSSL for Prisma
RUN apt-get update && apt-get install -y openssl

# Install pnpm globally
RUN npm install -g pnpm
ENV PNPM_HOME=/root/.local/share/pnpm
ENV PATH=$PNPM_HOME:$PATH

# Copy all files
COPY . .

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build the application
RUN pnpm -r build

# # Generate Prisma client for the subproject
# RUN cd packages/blend-point && pnpm prisma generate

# Production stage
FROM node:23.3.0-slim

WORKDIR /app

# Install OpenSSL for Prisma
RUN apt-get update && apt-get install -y openssl

# Install pnpm globally
RUN npm install -g pnpm
ENV PNPM_HOME=/root/.local/share/pnpm
ENV PATH=$PNPM_HOME:$PATH

# Copy package files and Prisma schema
COPY package*.json ./
COPY pnpm-lock.yaml ./
COPY pnpm-workspace.yaml ./
COPY packages/blend-point/prisma ./packages/blend-point/prisma

# Copy node_modules and built files from builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/packages ./packages

# Install production dependencies
RUN pnpm install --prod

# Set default environment variables
ENV PORT=8080
ENV NODE_ENV=production
ENV INSTANCE_CONNECTION_NAME=level-poetry-395302:us-central1:moveflow

# Expose the port the app runs on
EXPOSE 8080

# Start the application
CMD ["pnpm", "--filter=@credit-system/blend-point", "start"]