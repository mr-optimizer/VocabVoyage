import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Landing = ({ socket }) => {
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [roomID, setRoomID] = useState("");
  const navigate = useNavigate();
  const sendHi = () => {
    // Send message to server. We can't specify who we send the message to from the frontend. We can only send to server. Server can then send message to rest of users in room
    socket.emit("send_message", { message: "HI buddy" });
  };

  const createPrivateRoom = (e) => {
    e.preventDefault();
    socket.emit("create-room", { user_name: userName });
    
    // navigate("/room");
  };

  const joinPrivateRoom = (e) => {
    e.preventDefault();
    console.log(roomID)
    socket.emit("join-room", { user_name: userName, room: roomID });
  };
  useEffect(() => {
    // socket.on("rev_msg", (data) => {
    //   setMessage(data.message);
    // });
    socket.on("room-joined", (data) => {
      console.log(data);
    });
    socket.on("room-created", (data) => {
      const { room_no } = data;
      console.log(data);
    });
  }, [socket]);
  return (
    <div className="landing">
      <div className="landing_form">
        <div className="landing_form_title">Welcome to the xyz world!!</div>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="landing_form_input"
          placeholder="Enter your Name"
        />
        <input
          value={roomID}
          onChange={(e) => setRoomID(e.target.value)}
          className="landing_form_input"
          placeholder="Enter Room ID"
        />
        <div className="landing_form_button_container">
          <button onClick={joinPrivateRoom} className="landing_form_button">
            Join Room
          </button>
          <button onClick={createPrivateRoom} className="landing_form_button">
            Personal Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
