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

export default class App extends Component {
  render() {
    return (
      <div id='App'>

        <div id='channels-container'>
          <img src= { bioImage } alt='bio_and_beyond'/>
          <img src= { femaleFaceImg } alt='artistic_female_face' /> 
          <img src= { numberedBoxImg } alt='numbered_slide_puzzle_game'/> 
          <img src= { natureImg } alt='watercolor_nature_painting'/>
          <img src= { grillingHotDogImg } alt='grilling_Hotdog_image'/>
          <img src= { cosmosImg } alt='cosmos_in_blackAndGold_image'/>
          <img src= { poetryImg } alt='pond_grainfields_image'/>
          <img src= { birthdayCakeImg } alt='aging_bdayCake_image'/>
          <img src= { nightSkyImg } alt='clear_nightSkylight_image'/>
          <img src= { neuroImg } alt='abstract_neuro_img'/>
        </div>  
        
      </div>
    )
  }
}

