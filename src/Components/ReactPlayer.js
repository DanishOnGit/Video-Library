import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import {allVideos} from "../Database"
import { useVideo } from "../Contexts";
export const VideoPlayer = () => {
  
  const { videoId } = useParams();
  const {dispatch}=useVideo();

  const videoDetails=allVideos.find(item=>item.id===videoId)
   
  return (
    <>
    <div className="video-player-wrapper">
      <ReactPlayer onStart={()=>dispatch({type:"ADD_TO_HISTORY",payload:videoDetails})}
        controls={true}
        url={`https://www.youtube.com/watch?${videoId}`}
      />
      <div className="interactions-wrapper">

        <ul className="list-items-flex list-non-bullet spaced">
          <li>
            <i onClick={()=>dispatch({type:"LIKE_VIDEO",payload:videoDetails})} className="fas fa-thumbs-up pointer"></i>
          </li>
          <li>
            <i className="fas fa-list pointer"></i>
          </li>
          <li>
            <i onClick={()=>dispatch({type:"ADD_TO_WATCH_LATER",payload:videoDetails})} className="fas fa-clock pointer"></i>
          </li>
        </ul>

        <ul className="interactions-wrapper__note list-non-bullet">
          <li className="pointer"><i className="fas fa-pen pointer"></i> Add Notes</li>
        </ul>

      </div>
      </div>
    </>
  );
};
