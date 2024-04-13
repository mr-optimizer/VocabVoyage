import React from "react";
import "./style.css";
import SendIcon from "@mui/icons-material/Send";

const ChatBox = () => {
  return (
    <div className="chat_box">
      <div className="pc_heading">CHAT BOX</div>
      <div className="chat_area">
        <div className="chat_message">Simran : Hi Honey!!</div>
        <div className="chat_message">Shubham : Hello Babe ♥ ♥</div>
        <div className="chat_message">Simran : Love u Darling</div>
      </div>
      <div className="message_box">
        <input className="message_box_input" placeholder="Enter A message"></input>
        <SendIcon />
      </div>
    </div>
  );
};

export default ChatBox;
