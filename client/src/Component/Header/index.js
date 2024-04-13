import React, { useState } from "react";
import "./style.css";

const NavBar = () => {
  const [roomId, setRoomId] = useState("0");
  const [userId, setUserId] = useState("0");
  return (
    <div className="navbar">
      <h1 className="company_logo">Descriptionary</h1>
      <div>
        <div className="nav_ids">
          Room ID: <span>1abcd34</span>
        </div>
        <div className="nav_ids">
          User ID: <span>1abcd</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
