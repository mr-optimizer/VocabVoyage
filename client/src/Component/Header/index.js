import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.css";

const NavBar = () => {
  const navigate = useNavigate();
  const { roomID } = useSelector((state) => state.room);
  return (
    <div className="navbar">
      <h1 onClick={() => navigate("/")} className="company_logo">
        Descriptionary
      </h1>
      <div>
        {roomID && (
          <div className="nav_ids">
            Room ID: <span>{roomID}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
