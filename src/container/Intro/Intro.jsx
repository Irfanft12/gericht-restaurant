import React from 'react';
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs"

import { meal } from '../../constants';

import './Intro.css';

const Intro = () => {

  const [playVideo, setPlayVideo] = React.useState(false)

  const vidRef = React.useRef(false)

  const handleVideo = () => {
    setPlayVideo(!playVideo)

    if (playVideo) {
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
  } 

  return (
   <div className='app__video'>
     <video 
     src={meal}
     type="video/mp4"
     loop
     muted
     controls={false}
     ref={vidRef}
     />
     <div className='app__video-overlay flex__center'>
      <div className='app__video-overlay-circle flex__center' onClick={handleVideo}>
        { playVideo ? <BsFillPauseFill color='#ffffff' fontSize={20} /> : <BsFillPlayFill color='#ffffff' fontSize={20} /> }
      </div>
     </div>
   </div>
 );
}

export default Intro;
