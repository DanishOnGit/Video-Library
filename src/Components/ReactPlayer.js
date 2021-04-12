import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

export const VideoPlayer = () => {
  const { videoId } = useParams();
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
            <i class="fas fa-thumbs-up"></i>
          </li>
          <li>
            <i class="fas fa-list"></i>
          </li>
          <li>
            <i class="fas fa-clock"></i>
          </li>
        </ul>

        <ul className="interactions-wrapper__note list-non-bullet">
          <li><i class="fas fa-pen"></i> Add Notes</li>
        </ul>

      </div>
      </div>
    </>
  );
};
