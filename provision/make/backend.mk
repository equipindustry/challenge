# Backend
.PHONY: backend.help
BACKEND_NETWORK = $(PROJECT)_network

backend: backend.help

backend.help:
	@echo '    Backend:'
	@echo ''
	@echo '        backend.setup         install package for node'
	@echo '        backend.start         start node in port 3000'
	@echo ''

backend.setup: clean
	cd ${FRONTEND_DIR} && yarn backend:setup

backend.start: clean
	cd ${FRONTEND_DIR} && yarn backend:start
