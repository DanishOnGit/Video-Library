import { createContext, useContext, useReducer } from "react";
// import {reducer} from "./Contexts";
import ReactPlayer from 'react-player/youtube'

import {Link} from "react-router-dom";
const VideoContext=createContext();

export const VideoProvider= ({children})=> {

  const reducer=(state,action)=>{
    switch(action.type){
      case "LIKE_VIDEO":{
        return {...state,likedVideos:[...state.likedVideos,{...action.payload,existsInLikedVideos:true}]}
       }
      default:
          return state
    }
  } 

const [state,dispatch]=useReducer(reducer,{videoId:""})
return (<VideoContext.Provider value={{state,dispatch}}>
  {children}
  </VideoContext.Provider>)
}

export const useVideo=()=>{
  return useContext(VideoContext)
}