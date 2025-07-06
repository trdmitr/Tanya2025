import React from 'react'
import classes from "../SingContent/SingContent.module.css"
import ReactPlayer from 'react-player';


export const tzitata = (imgLink) => {
    return (
      <div className={classes.tziTata}>
        {
          imgLink.includes('http') ? <img className={classes.tziTata} src={imgLink} width={80} alt="Цитаты" />
            : <p className={classes.tziTata}>{imgLink}</p>
        }
      </div>
    )
  }
  export const audioSource = (linkAuidio, linkName) => {
    // var audio = document.getElementById("myaudio");
    // audio.volume = 0.20;
    return (
      <div>
        <p className={linkAuidio ? '' : classes.mediaHidden}>{linkName} </p>
        <audio id="myaudio" controls  className={linkAuidio ? '' : classes.mediaHidden}
          src={linkAuidio} type="audio/mpeg" volume={0.5}/>
      </div>
    )
  }

  export const videoSource = (linkVideo, linkName) => {
    return (
        <div>
    <p className={linkVideo ? '' : classes.mediaHidden}>{linkName}</p>
    {linkVideo.includes('youtu.be') ? <ReactPlayer className={linkVideo ? '' 
    : classes.mediaHidden.join(' ')} id={classes.videoFrame} url={linkVideo} controls={true} origin = {window.location.hostname}  volume={0.5}/> 
    :  <video className={[classes.videoBlock, linkVideo ? '' : classes.mediaHidden].join(' ')} src={linkVideo} controls={true}  type="video/mp4" ></video>}
    </div>
    )
  }