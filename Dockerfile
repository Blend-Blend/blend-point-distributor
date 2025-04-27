# Build stage
FROM node:23.3.0-slim AS builder
WORKDIR /app
RUN apt-get update && apt-get install -y openssl tzdata
RUN ln -fs /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && dpkg-reconfigure -f noninteractive tzdata
RUN npm install -g pnpm
COPY . .
RUN pnpm install
RUN pnpm run generate  # 确保生成Prisma客户端
RUN pnpm run -r build
RUN pnpm install

# Production stage
FROM node:23.3.0-slim
WORKDIR /app
RUN apt-get update && apt-get install -y openssl tzdata
RUN ln -fs /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && dpkg-reconfigure -f noninteractive tzdata
COPY package*.json ./
COPY packages/*/package.json ./packages/*/
RUN npm install -g pnpm

COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app/packages/blend-point/node_modules ./packages/blend-point/node_modules
COPY --from=builder /app/packages/credit-system/node_modules ./packages/credit-system/node_modules
COPY --from=builder /app/packages/moveflow/node_modules ./packages/moveflow/node_modules

COPY --from=builder /app/packages/blend-point/dist ./packages/blend-point/dist
COPY --from=builder /app/packages/credit-system/dist ./packages/credit-system/dist
COPY --from=builder /app/packages/moveflow/dist ./packages/moveflow/dist

ENV PORT=8080
ENV NODE_ENV=production
ENV INSTANCE_CONNECTION_NAME=level-poetry-395302:us-central1:moveflow
EXPOSE 8080
