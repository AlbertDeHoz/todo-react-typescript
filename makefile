PROJECT-NAME=todo-react-typescript

build:
	docker build -t ${PROJECT-NAME} .

start:
	docker run -it --rm \
		-p 3000:3000 \
		-v $(shell pwd):/app \
		--name ${PROJECT-NAME}_ps \
		--entrypoint=/bin/ash \
		${PROJECT-NAME}
