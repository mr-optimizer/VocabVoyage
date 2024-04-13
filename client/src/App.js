import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Component/Landing";
import io from 'socket.io-client';
import NavBar from "./Component/Header";
import Room from "./Component/Room";

const socket = io.connect('http://localhost:8000');

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Landing socket={socket} />} />
        <Route path="/room" element={<Room socket={socket} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
