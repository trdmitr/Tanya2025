import React from 'react'
// import Img from '../UI/Img';
import { Link } from 'react-router-dom';
import classes from "./CaverPage.module.css"
import RoundLoader from '../Loader/RoundLoader';
const CaverContent = ({all_songs, loading_songs}) => {

    return  all_songs.map((song) => {
        const {photo, name, id} = song
        return (

            <Link key={id} to={`/cavers/${id}`}>
                <div className={classes.media}>
                    <div className={classes.mediaImage}>
                    {loading_songs
 ? <RoundLoader/> : <img loading="lazy" src={photo} width={100} alt={name} />}	
                        {/* <Img imgUrl={photo} imgAlt={name} /> */}
                    </div>
                    <div>
                        <p> {name} </p>
                    </div>
                </div>
            </Link>
    )

    })
    
}
export default React.memo(CaverContent)