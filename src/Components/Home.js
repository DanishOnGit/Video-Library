

import {allVideos} from "../Database";
export const Home=()=>{
return (
  <div className="home-wrapper">
<aside className="home-wrapper__aside">
<ul className="home-wrapper__aside__list">
  <li>
  <i className="fas fa-home"></i><span className="list-item-title">Home</span>
  </li>
  <li>
  <i class="fas fa-history"></i><span className="list-item-title">History</span>
  </li>
  <li>
  <i class="fas fa-list"></i><span className="list-item-title">Playlists</span>
  </li>
   <li>
   <i class="fas fa-clock"></i><span className="list-item-title">Watch later</span>
  </li>
  <li>
  <i class="fas fa-thumbs-up"></i><span className="list-item-title">Liked videos</span>
  </li>
</ul>
</aside>
<main className="home-wrapper__main">
{
  allVideos.map(item=>{
    return (<div className="video-item" key={item.id}>
          <img style={{width:"100%",height:"50%"}} src={item.thumbnail} alt="thumbnail"/>
          <div className="video-description">
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