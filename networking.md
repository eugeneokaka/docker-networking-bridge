Docker Networking — Express Apps
run the main one in the root and the messege in /message-service
1. Create a Docker network
docker network create app-network

This creates a user-defined bridge network that allows connected containers to communicate.
2. Run the message service
docker run -d --name message-service --network app-network -p 4000:4000 message-service:v3

- --name message-service: Container name.
- --network app-network: Connects it to the network.
- -p 4000:4000: Publishes container port 4000 to the host.
- message-service:v3: Image name and tag.
3. Run the main API
docker run -d --name express-5 --network app-network -p 3000:3000 express-app:v6

4. Container-to-container communication
In the main API, use:
fetch('http://message-service:4000/message')

Why not localhost?
- localhost inside a container refers to that same container.
- message-service is the other container's name.
- Docker's internal DNS resolves the container name to its IP address.
5. Important commands
Command	Purpose
docker network ls	List networks
docker network inspect app-network	Inspect the network and connected containers
docker ps	List running containers
docker ps -a	List all containers
docker images	List images and tags
docker logs express-5	View container logs
docker rm -f message-service	Remove a container


6. Key lessons
1. Image: message-service:v3 — the application template and version.
2. Container: message-service — the running instance's name.
3. Network: app-network — connects the containers.
4. Port mapping: -p 3000:3000 means host port 3000 → container port 3000.
5. Port publishing isn't required for communication between containers on the same user-defined bridge network.
Result: Open http://localhost:3000 in your browser. The main API calls the message service and returns its response! 🚀
