const app = require("./app");
const http = require("http");

const { Server } = require("socket.io");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Listen for when the client connects via socket.io-client
io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);
  socket.on("send_message", (data) => {
    const { message } = data;
    socket.emit('rev_msg', { message });
  });
});

module.exports = server;
