APP_NAME	:=	frontend
ROOT_DIR	:=	/app

## Starts bash in emerald-laravel.docker container
jump:
	@docker-compose exec ${APP_NAME} bash
.PHONY: jump

## yarn start (react scripts)
start:
	docker-compose exec ${APP_NAME} bash -c "yarn --cwd ${ROOT_DIR} start"
.PHONY: start

## yarn install
install:
	docker-compose exec ${APP_NAME} bash -c "yarn --cwd ${ROOT_DIR} install"
.PHONY: install

# ---------------------------------------------------------------------------------------------- #

GREEN	:=	$(shell tput -Txterm setaf 2)
YELLOW	:=	$(shell tput -Txterm setaf 3)
WHITE	:=	$(shell tput -Txterm setaf 7)
RESET	:=	$(shell tput -Txterm sgr0)

TARGET_MAX_CHAR_NUM=15

.DEFAULT_GOAL := help

## Show this help message
help:
	@echo ''
	@echo 'Usage:'
	@echo '  ${YELLOW}make${RESET} ${GREEN}<target>${RESET}'
	@echo ''
	@echo 'Targets:'
	@awk '/^[a-zA-Z\-\_0-9]+:/ { \
		helpMessage = match(lastLine, /^## (.*)/); \
		if (helpMessage) { \
			helpCommand = substr($$1, 0, index($$1, ":")); \
			sub(/:/, "", helpCommand); \
			helpMessage = substr(lastLine, RSTART + 3, RLENGTH); \
			printf "  ${YELLOW}%-$(TARGET_MAX_CHAR_NUM)s${RESET} ${GREEN}%s${RESET}\n", helpCommand, helpMessage; \
		} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)
