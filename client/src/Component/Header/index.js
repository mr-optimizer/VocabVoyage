import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  const [roomId, setRoomId] = useState("0");
  const [userId, setUserId] = useState("0");
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h1 onClick={()=> navigate("/") } className="company_logo">Descriptionary</h1>
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
