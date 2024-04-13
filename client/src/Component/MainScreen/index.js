import React from "react";
import "./style.css";
import SendIcon from "@mui/icons-material/Send";

const MainScreen = () => {
  return (
    <div className="main_screen">
      <div className="ms_heading">
        <div>Main Screen</div>
        <div>
          Timer: <span>00:00</span>{" "}
        </div>
      </div>

      <div className="ms_body">
        <div className="hint_box">
          <div className="hint">
            <div className="hint_text">1. Unlock Word length (30pts)</div>
            <button className="hint_button">Unlock</button>
          </div>
          <div className="hint">
            <div className="hint_text">2. Unlock Word category (35pts)</div>
            <button className="hint_button">Unlock</button>
          </div>
          <div className="hint">
            <div className="hint_text">3. Unlock the use (40pts)</div>
            <button className="hint_button">Unlock</button>
          </div>
          <div className="hint">
            <div className="hint_text">4. Unlock Word length (30pts)</div>
            <button className="hint_button">Unlock</button>
          </div>
        </div>
        <div className="display_screen">Word is of length 3</div>
      </div>
      <div className="message_box">
        <input
          className="message_box_input"
          placeholder="Enter Your Answer"
        ></input>
        <SendIcon />
      </div>
    </div>
  );
};

export default MainScreen;
