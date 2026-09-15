FROM node:22-alpine AS builder

RUN npm install -g pnpm@11

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
COPY prisma ./prisma
RUN pnpm install --frozen-lockfile --ignore-scripts && pnpm exec prisma generate

COPY . .
RUN pnpm run build

FROM node:22-alpine

RUN npm install -g pnpm@11

ENV NODE_ENV=production
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
COPY prisma ./prisma
RUN pnpm install --frozen-lockfile --prod --ignore-scripts && pnpm exec prisma generate

COPY --from=builder /app/dist ./dist

CMD ["node", "dist/main.js"]

# Use this if you can not run migration in ci cd
# CMD ["sh", "-c", "pnpm exec prisma migrate deploy && node dist/main.js"]