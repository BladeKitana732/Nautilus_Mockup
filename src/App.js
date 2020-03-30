import React, { Component } from 'react';
import './App.css';
import bioImage from './images/bio_and_beyond.jpeg';
import femaleFaceImg from './images/wise_sci_and_engineering.png';


export default class App extends Component {
  render() {
    return (
      <div>
          <img src= { bioImage } alt='bio_and_beyond'/>
          <img src= { femaleFaceImg } alt='artistic_female_face' /> 
          {/* <img src= {}/> 
          <img src= {}/>
          <img src= {}/>
          <img src= {}/>
          <img src= {}/>
          <img src= {}/>
          <img src= {}/>
          <img src= {}/> */}
      </div>
    )
  }
}

