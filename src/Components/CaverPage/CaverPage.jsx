import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import classes from "./CaverPage.module.css"
// import { Context } from '../context'
import Player from '../Player/Player';
import Modal from '../UI/Modal/Modal';
import About from '../UI/About';
import PlayButton from '../UI/Modal/PlayButton';
import CaverContent from './CaverContent';
import { useSelector } from 'react-redux';
import useFetch from '../API/useFetch';
// import {store} from '../../Redux/store.js';
import Loader from '../Loader/Loader';
export const CaverPage = () => {
  const [modal, setModal] = useState(false);
  const location = useLocation();
  const urlParse22 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS93cptJsirzwns7d-Gv8JX_F7wje7dFgEqZQhIv5LCqHMtfk0RWnVuyHPzrOCTqhd-4_XCcERYPaUU/pub?output=csv";
  const urlParse20 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9S4q9QQzK2mW3y1elEhz3pTS_FmykQr4LZzVz_C94M8zkmqO-MKYmvOTJlK-pPL4efRNyQ3gdx8WS/pub?output=csv"
  // const urlParse22 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTqMSBKbaIPUyfikTyHNpByUzLbxWxChMy96gx1a7WKMXFGNydi2ZTgotnDwgbhLjGkXuTlhGGgsKZ8/pub?output=csv";
  // ДДТ-2022 НОРМ
  // const urlParse21= "https://docs.google.com/spreadsheets/d/e/2PACX-1vS6iuzOmkC7RdMVy7xGA9nVlygwhtlxVTzkcr5yaJkAFm6CZadNibed7Wa2CNVmZa4L1ehka2mropLl/pub?output=csv";
  const urlParse23 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQYhZ4zjkeiw145ETYlB2YLJqy333xRr_DlTXtQqHhT-UGomaRvQPFwv0xaP0QeQpcxxQoJGEeE3x5t/pub?output=csv"
  const urlLoc = location.pathname;
  
  const currUrl = urlLoc.includes('cavers20') ? urlParse20 : urlLoc.includes('cavers22') ? urlParse22 : urlLoc.includes('cavers23') ? urlParse23 : "";
  useFetch(currUrl)
  const all_songs = useSelector(
    ({ songs_reducer: { all_songs } }) => all_songs
);
const loading_songs
    = useSelector(
        ({ songs_reducer: { loading_songs
        } }) => loading_songs
    );

  // const navigatorState = store.getState()
  // console.log("store", navigatorState);
  return (
    <div className="device device-iphone-x">
      <div className="device-frame">
        <div className="device-content">
          <div className={classes.row}>
            
            <Modal visible={modal} setVisible={setModal}>
              <About />
            </Modal>
            <PlayButton onClick={() => setModal(true)}>
              <span role="img" aria-label="emoji name"> 📌 </span>
            </PlayButton>
            <div className={classes.column50}>
            
              <CaverContent loading_songs = {loading_songs} all_songs = {all_songs} />
              
            </div>
            <a style={{color: "white"}} href="https://trdmitr.github.io/alltributes/" target="_blank" rel="noopener noreferrer">
        <button >Все трибьюты </button>
      </a>
            {loading_songs ? <div className='loadBlock'><Loader/></div>  :
            <Player />}
            
          </div>
          <Link to="/"><button className={classes.btnHome}>Главная</button></Link>
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
