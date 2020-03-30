import React, { Component } from 'react';
import './App.css';
import bioImage from './images/bio_and_beyond.jpeg';
import femaleFaceImg from './images/wise_sci_and_engineering.png';
import numberedBoxImg from './images/abstractions.jpeg';
import natureImg from './images/earth.jpeg';
import grillingHotDogImg from './images/tlas.jpeg';
import cosmosImg from './images/cosmos.jpeg';
import poetryImg from './images/poetry.jpeg';
import birthdayCakeImg from './images/aging.png';
import nightSkyImg from './images/alliance.png';
import neuroImg from './images/maxplanck.jpeg';
import Header from './components/Header';


export default class App extends Component {
  render() {
    return (
      <div id='App'>
        <h1>Channels</h1>
        <p>TUNE INTO <em>NAUTILUS'</em> DEEP DIVE PORTALS</p>

        <div id='channels-container'>

          
          
          <img text= { Header } src= { bioImage } alt='bio_and_beyond' className='channel-img'
          />
          

          <img src= { femaleFaceImg } alt='artistic_female_face' className='channel-img'/> 

         

          <img src= { numberedBoxImg } alt='numbered_slide_puzzle_game' className='channel-img'/> 

         

          <img src= { natureImg } alt='watercolor_nature_painting' className='channel-img'/>

          

          <img src= { grillingHotDogImg } alt='grilling_Hotdog_image' className='channel-img'/>

         

          <img src= { cosmosImg } alt='cosmos_in_blackAndGold_image' className='channel-img'/>

         

          <img src= { poetryImg } alt='pond_grainfields_image' className='channel-img'/>

          

          <img src= { birthdayCakeImg } alt='aging_bdayCake_image' className='channel-img'/>


          <img src= { nightSkyImg } alt='clear_nightSkylight_image' className='channel-img'/>

          

          <img src= { neuroImg } alt='abstract_neuro_img' className='channel-img'/>
        </div>  

      </div>
    )
  }
}

