
.PHONY: run
run:
	go run server.go

server: server.go
	go build server.go

live: server
	./server
