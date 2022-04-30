const http = require("http");
const { Server } = require("socket.io");
const express = require("express");
const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("User connected");
  // receiving new message from client
  socket.on('message', (msg) => {
    // broadcasting new message to all connected users
    socket.broadcast.emit('receiveMsg', msg)
  });
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.on("error", (err) => {
  console.log("Error opening server");
});

server.listen(3001, () => {
  console.log("Server working on port 3001");
});
