import React, { Component } from 'react';
import './App.css';
import bioImage from './images/bio_and_beyond.jpeg'


export default class App extends Component {
  render() {
    return (
      <div>
          <img src= { bioImage } alt='bio_and_beyond'/>
          {/* <img src= {}/> 
          <img src= {}/> 
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

