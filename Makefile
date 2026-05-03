-include .env

DC=docker compose

## help: Print commands help
.PHONY: help
help : Makefile
	@sed -n 's/^##//p' $<

## up: Start the application
.PHONY: up
up:
	$(DC) up -d --remove-orphans $(service)

## down: Stop the application
.PHONY: down
down:
	$(DC) down $(service)

## build: Build the application
.PHONY: build
build:
	$(DC) build --no-cache $(service)

## logs: Follow the application logs
.PHONY: logs
logs:
	$(DC) logs -f $(service)

## shell: Open a shell in the application container
.PHONY: shell
shell:
	$(DC) exec $(service) sh

## prune: Stop the application and remove volumes
.PHONY: prune
prune:
	$(DC) down -v

## restart: Restart the application
.PHONY: restart
restart: down up

# https://stackoverflow.com/a/6273809/1826109
%:
	@:
