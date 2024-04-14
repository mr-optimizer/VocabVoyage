import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Landing = ({ socket }) => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const sendHi = () => {
    // Send message to server. We can't specify who we send the message to from the frontend. We can only send to server. Server can then send message to rest of users in room
    socket.emit("send_message", { message: "HI buddy" });
  };

  const createPrivateRoom = (e) => {
    e.preventDefault();
    navigate("/room");
  };
  useEffect(() => {
    socket.on("rev_msg", (data) => {
      setMessage(data.message);
    });
  }, [socket]);
  return (
    <div className="landing">
      <div className="landing_form">
        <div className="landing_form_title">Welcome to the xyz world!!</div>
        <input className="landing_form_input" placeholder="Enter your Name" />
        <div className="landing_form_button_container">
          <button className="landing_form_button">Go Global</button>
          <button onClick={createPrivateRoom} className="landing_form_button">
            Personal Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
