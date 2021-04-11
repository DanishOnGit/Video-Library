import "./styles.css";
import { Navbar, Home } from "./Components";
import { VideoPlayer } from "./Components";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:videoId" element={<VideoPlayer />} />
      </Routes>
    </div>
  );
}
