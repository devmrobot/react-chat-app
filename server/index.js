const express = require("express");
const { createServer } = require("http");
const app = express();
const { Server } = require("socket.io");
const cors = require("cors");

const httpServer = createServer(app);
app.use(cors());
const io = new Server(httpServer, {
    cors: {
      origin: "localhost/3001",
      methods: ["GET", "POST"],
    }
  });

io.on('connection', (socket) => {
    console.log(`User connected ${socket.id}`);
});

httpServer.listen(3001,() => {
    console.log(`Example app listening on port 3001`)
})
