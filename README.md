# dev-portfolio-api

GraphQL API for my dev portfolio

## Required

1. Node.js 20+
2. PostgreSQL 16+
3. Docker & Docker Compose

## Pre use required

`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`

## Files naming

```
{name}.{resource_type}.ts
{name}.{resource_type}.spec.ts - For unit tests.
```

## Service start

### Docker

1. **Create .env.docker from .env.example**
```bash
cp .env.example .env.docker
```

2. **Start all services**
```bash
docker compose up
```

3. **Send request to local path**

See postman collections in postman-collection.json to requests examples

```
http://localhost:3000/graphql
```

### Local Development

1. **Create .env from .env.example**
```bash
cp .env.example .env
```

2. **Install dependencies**
```bash
pnpm approve-builds
pnpm install
```

3. **Run database migrations**
```bash
pnpm exec prisma migrate dev
```

4. **Seed database**
```bash
pnpm exec prisma db seed
```

5. **Start development server**
```bash
pnpm run start:dev
```

6. **Send request to local path**
```
http://localhost:3000/graphql
```