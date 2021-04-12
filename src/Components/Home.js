
import {NavLink,Link} from "react-router-dom";
import {allVideos} from "../Database";
import {useVideo} from "../Contexts";
import ReactPlayer from 'react-player/youtube'
export const Home=()=>{

  // const {dispatch}=useVideo();

  // const showVideohandler=()=>{

  //   return <Link to="/video"><ReactPlayer controls={true}  url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /></Link>
 
  // }

return (
  <div  className="home-wrapper">
<aside className="home-wrapper__aside">
<ul className="home-wrapper__aside__list">
  <NavLink to="/"><li className="pointer">
  <i className="fas fa-home pointer"></i><span className="list-item-title">Home</span>
  </li>
  </NavLink>
  <li className="pointer">
  <i class="fas fa-history pointer"></i><span className="list-item-title">History</span>
  </li>
  <li className="pointer">
  <i class="fas fa-list pointer"></i><span className="list-item-title">Playlists</span>
  </li>
  <NavLink to="/watchLaterVideos"><li className="pointer">
   <i class="fas fa-clock pointer"></i><span className="list-item-title">Watch later</span>
  </li></NavLink>
  <NavLink to="/likedVideos"><li className="pointer">
  <i class="fas fa-thumbs-up pointer"></i><span className="list-item-title">Liked videos</span>
  </li></NavLink>
</ul>
</aside>
<main className="home-wrapper__main">
{
  allVideos.map(item=>{
    return (<div  className="video-item" key={item.id}>
         <Link to={`/video/${item.id}`}> <img style={{width:"100%",height:"50%"}} src={item.thumbnail} alt="thumbnail"/> </Link>
          <div className="video-description">
          <div class="avatar-wrapper-small">
      <img
        class="avatar-small"
        src={item.avatar}
        alt="avatar"
      />
    </div>
            <h4>{item.videoTitle}</h4>
<p className="small">{item.channelName}</p>
<p>{item.level}</p>
          </div>
    </div>)
  })
}
</main>
  </div>
)
}