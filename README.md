# Node.js Application with Docker

This repository contains a simple Node.js application configured to run in a Docker container.

FROM node:latest

WORKDIR /app

COPY ./package*.json ./

RUN npm install

RUN npm install -g nodemon

COPY . .

EXPOSE 5500

CMD ["npm", "run", "dev"]

Package.json
Ensure the package.json file has the following script:

json
Copy code
"scripts": {
  "dev": "nodemon -L app.js"
}

Build Docker Image
To build the Docker image, execute the following command in the terminal:

docker build -t my-img .

Run Docker Container

To run the Docker container, use the following command:

docker run --rm -p 5500:5500 -v %cd%:/app --name my_container my-img

Explanation of the run command options:

-p 5500:5500: Maps the local port to the Docker container port.
--rm: Removes the container once it stops.
-v %cd%:/app: Automatically detects changes in the current directory.
--name my_container: Assigns a custom name to the container (optional).
Replace my-img with your preferred image name.

For more information on Docker commands, visit Docker Documentation.

Make sure you have Docker installed on your system before running the above commands.
