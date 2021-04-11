import "./styles.css";
import {Navbar,Home} from "./Components";
import ReactPlayer from 'react-player/youtube'

import {Routes,Route} from "react-router-dom";



export default function App() {
  return (
    <div className="App">

      <Navbar />
      {/* <ReactPlayer controls={true}  url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}

      <Routes>
        <Route to="/" element={<Home/>} />
      </Routes>
    
     
    </div>
  );
}
