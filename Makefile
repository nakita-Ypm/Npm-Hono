include .env
br:
	docker build -f ./hono/Dockerfile -t npm-hono .
	docker run -v ./hono/:/app/ -p ${HONO_PORT}:${HONO_PORT} -d --name npm-hono npm-hono
	
enh:
	docker exec -it npm-hono /bin/bash

exe:
	docker exec npm-hono npx tsc
	docker exec npm-hono node dist/index.js


clean:
	docker stop npm-hono
	docker container rm -f npm-hono
	docker rmi -f npm-hono