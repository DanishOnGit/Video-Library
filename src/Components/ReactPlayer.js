import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player/youtube';


export const VideoPlayer=()=>{
  
const {videoId}=useParams();
  return <ReactPlayer controls={true}  url={`https://www.youtube.com/watch?${videoId}`} />
}