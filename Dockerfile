# Build stage
FROM node:23.3.0-slim AS builder

WORKDIR /app

# Install OpenSSL for Prisma
RUN apt-get update && apt-get install -y openssl

# Copy package files
COPY package*.json ./
COPY pnpm-lock.yaml ./
COPY pnpm-workspace.yaml ./

# Install pnpm
RUN npm install -g pnpm

ENV PNPM_HOME=/root/.local/share/pnpm
ENV PATH=$PNPM_HOME:$PATH

# Install all dependencies (including devDependencies)
RUN pnpm install --frozen-lockfile

# Install TypeScript and necessary typings globally for build
RUN pnpm add -g typescript @types/node dotenv

# Copy source code and prisma schema
COPY . .

# Generate Prisma client
RUN pnpm --filter=@credit-system/blend-point prisma generate

# Build the application
RUN pnpm build

# Production stage
FROM node:23.3.0-slim

WORKDIR /app

# Install OpenSSL for Prisma
RUN apt-get update && apt-get install -y openssl

# Copy package files and prisma schema
COPY package*.json ./
COPY pnpm-lock.yaml ./
COPY pnpm-workspace.yaml ./
COPY packages/blend-point/prisma ./packages/blend-point/prisma

# Install pnpm
RUN npm install -g pnpm

# Copy node_modules from builder to avoid reinstalling
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/packages ./packages

# Set default environment variables
ENV PORT=8080
ENV NODE_ENV=production
ENV INSTANCE_CONNECTION_NAME=level-poetry-395302:us-central1:moveflow

# Expose the port the app runs on
EXPOSE 8080
