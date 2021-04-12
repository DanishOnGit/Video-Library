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
      <ReactPlayer
        controls={true}
        url={`https://www.youtube.com/watch?${videoId}`}
      />
      <div className="interactions-wrapper">

        <ul className="list-items-flex list-non-bullet spaced">
          <li>
            <i onClick={dispatch({type:"LIKE_VIDEO",payload:videoDetails})} className="fas fa-thumbs-up"></i>
          </li>
          <li>
            <i className="fas fa-list"></i>
          </li>
          <li>
            <i className="fas fa-clock"></i>
          </li>
        </ul>

        <ul className="interactions-wrapper__note list-non-bullet">
          <li><i className="fas fa-pen"></i> Add Notes</li>
        </ul>

      </div>
      </div>
    </>
  );
};
