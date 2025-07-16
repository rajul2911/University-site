import React,{useRef} from 'react'
import './VideoPlayer.css'
import college from '../../assets/college.mp4'
const VideoPlayer = ({playstate,setPlaystate}) => {

    const player = useRef(null);

    const closeplayer = (e) => {
        if(e.target === player.current) {
            setPlaystate(false);
        }
    }
  return (
    <div className={`video-player ${playstate ? '': 'hide'}`} ref={player} onClick={closeplayer}>
        <video src={college} autoPlay muted controls></video>
      
    </div>
  )
}

export default VideoPlayer
