import React from 'react'
import classes from "./HomePage.module.css"
import { videoSource } from '../Hooks/utils';
import { Link } from 'react-router-dom';


export const HomePage = () => {
    const imgUrl = "https://vgif.ru/gifs/145/vgif-ru-19277.gif"
    const videoUrl = 'https://trv-axtuba.ru/wp-content/uploads/2025/03/8-marta-2025.mp4'
    const videoName = ' '
    const imgAlt = "Tanya-2025"

    // const frontAudio = "https://trv-axtuba.ru/wp-content/uploads/2025/02/YUlya1.mp3";
    // const imgTzi = "https://drive.google.com/uc?export=download&id=1gsY4lPUU4pJ07s0JwDBeJjUYddkAuSr3"
    return (
        <div className="device device-iphone-x">
            <div className="device-frame">
                <div className="device-content">

                    <div>
                        {/* <span className={classes.navLink}>Парни поздравляют с 8 марта 2024!</span> */}
                         <Link to="/cavers21"  className={classes.navLink21}>TR_COVERS</Link>
                      {/*<Link to="/cavers22"  className={classes.navLink22}>2022</Link> */}
                        <Link to="/cavers23" className={classes.navLink23}>НАШИ ПЕСНИ!</Link>

                        {/* <Link to={`/cavers21`} className={classes.navLink21}>Слуша!</Link> */}
                        {/* <Link to={`/cavers${yearTrib22}`} className={classes.navLink22}>2022</Link>
                      <Link to={`/cavers${yearTrib23}`} className={classes.navLink23}>2023</Link> */}
                        <div className={classes.main}>

                            {/* <div className={classes.article}><p >С НОВЫМ 2024 ГОДОМ!</p></div> */}
                            <div className={classes.article}><img fetchpriority="high" role="presentation" src={imgUrl} width={100} alt={imgAlt} /></div>


                            <div className={classes.videoBlock}

                            >
                                {videoSource(videoUrl, videoName)}

                            </div>


                            {/* <p className={classes.nameAudio}>Медоманы. Время Луны</p> */}
                            <div className={classes.ticker}>
                                <div className={classes.ticker__in}>
                                    <span className={classes.ticker__item}>ПОЗДРАВЛЯЕМ!!! </span>
                                </div>
                            </div>
                            {/* <audio controls 
          src={frontAudio} type="audio/mpeg" /> */}

                            {/* <div className={classes.article}><img fetchpriority="high" role="presentation"  src={imgUrl2} width={100} alt={imgAlt} /></div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="device-stripe"></div>
            <div className="device-header">
                <div className="device-sensors"></div>
            </div>
            <div className="device-btns"></div>
            <div className="device-power"></div>
        </div>
    )
}