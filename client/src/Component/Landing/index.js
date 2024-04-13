import React, { useEffect, useState } from "react";
import "./style.css";

const Landing = ({ socket }) => {
  const [message, setMessage] = useState("");
  const sendHi = () => {
    // Send message to server. We can't specify who we send the message to from the frontend. We can only send to server. Server can then send message to rest of users in room
    socket.emit('send_message', { message: "HI buddy" });
  }
  useEffect(()=> {
    socket.on("rev_msg", (data) => {
      setMessage(data.message);
    });
  }, [socket]);
  return (
    <div className="landing">
      <div className="profile_container_left"></div>
      <div></div>
    </div>
  );
};

export default Landing;
