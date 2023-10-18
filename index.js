const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, { cors: {
  origin: "*",
  methods: ["GET", "POST"]
}});
const PORT = process.env.PORT || 3001;
const path = require('path');

let socketList = {};

io.on("connection", (socket) => {
    socket.on("join-room", (roomId, userId, userName) => {
      socket.join(roomId);
 
      socket.broadcast.to(roomId).emit("user-connected", userId);
    });
  });
  

http.listen(PORT, () => {
  console.log('Connected : 3001');
});
