PROGRAM=docker-compose
CONTAINER=app

generate:
	$(PROGRAM) run $(CONTAINER) \
		bash -c 'npm run generate'

#up:
#	$(PROGRAM) up

build:
	$(PROGRAM) build

bash:
	$(PROGRAM) run $(CONTAINER) bash 

serv:
	cd dist && python3 -m http.server

down:
	$(PROGRAM) down
