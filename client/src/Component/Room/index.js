import React from "react";
import "./style.css";
import MainScreen from "../MainScreen";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import ChatBox from "../ChatBox";
const Room = () => {
  return (
    <div className="room">
      <div className="profiles_container">
        <div className="pc_heading">IN ROOM PLAYERS (4) </div>
        <div className="profile_card">
          <div className="profile">
            <AccountCircleIcon className="profile_dp" />
            <div className="profile_name_score">
              <div className="profile_name">Shubham Kumar</div>
              <div className="profile_score">Score: 000</div>
            </div>
          </div>
          <MicIcon />
        </div>
        <div className="profile_card">
          <div className="profile">
            <AccountCircleIcon className="profile_dp" />
            <div className="profile_name_score">
              <div className="profile_name">Simran</div>
              <div className="profile_score">Score: 000</div>
            </div>
          </div>
          <MicOffIcon />
        </div>
        <div className="profile_card">
          <div className="profile">
            <img className="profile_dp" src="https://xsgames.co/randomusers/avatar.php?g=male"></img>
            <div className="profile_name_score">
              <div className="profile_name">Swastik</div>
              <div className="profile_score">Score: 000</div>
            </div>
          </div>
          <MicOffIcon />
        </div>
        <div className="profile_card">
          <div className="profile">
            <img className="profile_dp" src="https://xsgames.co/randomusers/avatar.php?g=male"></img>
            <div className="profile_name_score">
              <div className="profile_name">Mohak Gidwani</div>
              <div className="profile_score">Score: 000</div>
            </div>
          </div>
          <MicOffIcon />
        </div>
      </div>
      <MainScreen />
      <ChatBox />
    </div>
  );
};

export default Room;
