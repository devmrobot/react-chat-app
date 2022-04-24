const http = require("http");
const { Server } = require("socket.io");
const express = require("express");
const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000"
  }
});

io.on("connection", (socket) => {
  console.log("User connected");
  console.log("socket id",socket.id);
});

server.on("error", (err) => {
  console.log("Error opening server");
});

server.listen(3001, () => {
  console.log("Server working on port 3001");
});
