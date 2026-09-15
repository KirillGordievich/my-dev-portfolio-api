FROM node:22-alpine AS builder

RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
COPY prisma ./prisma
RUN corepack install && pnpm install --frozen-lockfile --ignore-scripts && pnpm exec prisma generate

COPY . .
RUN pnpm run build

RUN pnpm prune --prod

FROM node:22-alpine

ENV NODE_ENV=production
WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

CMD ["node", "dist/main.js"]
