SHELL := /bin/bash

.PHONY: help infra-up infra-down infra-clean build up down restart logs shell clean rebuild status migrate migrate-create seed install lint test format

help: ## Show help
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

# Docker (full deploy)
build: ## Build Docker image
	@docker compose build

up: ## Start all services
	@docker compose up -d

down: ## Stop all services
	@docker compose down

restart: ## Restart app container
	@docker compose restart app

logs: ## Show app logs
	@docker compose logs -f app

logs-all: ## Show all service logs
	@docker compose logs -f

shell: ## Connect to app container
	@docker compose exec app sh

status: ## Show services status
	@docker compose ps

clean: ## Remove containers, volumes, images
	@docker compose down --rmi all --volumes --remove-orphans

rebuild: clean build up ## Full rebuild and start

# Database
migrate-apply: ## Apply all pending migrations
	@pnpm prisma migrate deploy

migrate-create: ## Create new migration
	@pnpm prisma migrate dev

seed: ## Seed database
	@pnpm prisma db seed

# Local Development
install:  ## Install dependencies
	@pnpm install

lint: ## Run linter
	@pnpm oxlint src/

format: ## Format code with Prettier
	@pnpm prettier --write 'src/**/*.ts'

test: ## Run tests
	@pnpm run test

dev: ## Start in dev mode
	@pnpm run start:dev

# Infrastructure (local dev)
infra-up: ## Start Postgres for local dev
	@docker compose -f docker-compose.infra.yml up -d

infra-down: ## Stop Postgres
	@docker compose -f docker-compose.infra.yml down

infra-clean: ## Remove Postgres with volumes
	@docker compose -f docker-compose.infra.yml down --volumes --remove-orphans