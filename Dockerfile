FROM node:22-alpine AS builder

RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
COPY prisma ./prisma
RUN corepack install && pnpm install --frozen-lockfile --ignore-scripts && pnpm exec prisma generate

COPY . .
RUN pnpm run build

# Only for migration
FROM builder AS migration

CMD ["pnpm", "exec", "prisma", "migrate", "deploy"]

FROM builder AS production

RUN pnpm prune --prod --ignore-scripts

ENV NODE_ENV=production

CMD ["node", "dist/main.js"]
