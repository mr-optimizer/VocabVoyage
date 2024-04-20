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

let room_no = 0;

// Listen for when the client connects via socket.io-client
io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);
  socket.on("send_message", (data) => {
    const { message } = data;
    socket.emit("rev_msg", { message });
  });
  socket.on("create-room", (data) => {
    const { user_name } = data;
    room_no += 1;
    const derived_room_no = room_no;
    socket.join(derived_room_no);

    let __createdTime__ = Date.now();
    socket.emit("room-created", {
      message: `${user_name}, You Created a new Room`,
      __createdTime__,
      room_no: derived_room_no,
    });
  });
  socket.on("join-room", (data) => {
    const { user_name, room } = data;
    socket.join(room);
    let __createdTime__ = Date.now();
    // Send message to all users currently in the room, apart from the user that just joined
    socket.emit("room-joined", {
      message: `${user_name}, You are in Room`,
      __createdTime__,
      room_no: room,
    });
    socket.to(room).emit("room-joined", {
      message: `${user_name} joined the room`,
    });
  });
});

module.exports = server;
