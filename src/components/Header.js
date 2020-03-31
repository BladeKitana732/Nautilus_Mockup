import React, { Component } from 'react';
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
import play from './images/playButton.png'

export default class Header extends Component {
    render() {
        return (
            <div id='channels-container'>

               <article> 
                <h2>BIOLOGY+BEYOND</h2>
                <img src= { bioImage } alt='bio_and_beyond' className='channel-img'
                /><h4>Making Sense of the Genome, at Last</h4>
                <p>by Adam Piore</p>
               </article>

               <article>
                <h2>Woman in Science & Engineering</h2>
                <img src= { femaleFaceImg } alt='artistic_female_face' className='channel-img'/> 
                <h4>Your Brain Is On the Brink of Chaos</h4>
                <p>by Kelly Clancy</p>
               </article>


               <article> 
                <h2>QUANTA ABSTRACTIONS</h2>
                <img src= { numberedBoxImg } alt='numbered_slide_puzzle_game' className='channel-img'/> 
                <h4>Mathematicians Calculate How Randomness Creeps In</h4>
                <p>by Marcos Woo</p>
                </article>

               <article>
                <h2>EARTH</h2>
                <img src= { natureImg } alt='watercolor_nature_painting' className='channel-img'/>
                <h4>The Deep Time of Walden Pond</h4>
                <p>by Curt Stager</p>
                </article> 

               <article> 
                <h2>THINK LIKE A SCIENTIST</h2>
                <img src= { grillingHotDogImg } alt='grilling_Hotdog_image' className='channel-img'/>
                <h4><img src= { play } alt='play_button' id='play-button'/>The Best Burger Place Is a Lab</h4>
                <p>by Thomas King</p>
               </article>

               <article>
                <h2>Biology+Beyond</h2>
                <img src= { cosmosImg } alt='cosmos_in_blackAndGold_image' className='channel-img'/>
                <h4>jfsk</h4>
                <p>jasjdasd</p>
               </article>

               <article>
                <h2>Biology+Beyond</h2>
                <img src= { poetryImg } alt='pond_grainfields_image' className='channel-img'/>
                <h4>jfsk</h4>
                <p>jasjdasd</p>
               </article>

               <article> 
                <h2>Biology+Beyond</h2>
                <img src= { birthdayCakeImg } alt='aging_bdayCake_image' className='channel-img'/>
                <h4>jfsk</h4>
                <p>jasjdasd</p>
               </article>

               <article> 
                <h2>Biology+Beyond</h2>
                <img src= { nightSkyImg } alt='clear_nightSkylight_image' className='channel-img'/>
                <h4>jfsk</h4>
                <p>jasjdasd</p>
               </article>

               <article> 
                <h2>Biology+Beyond</h2>
                <img src= { neuroImg } alt='abstract_neuro_img' className='channel-img'/>
                <h4>jfsk</h4>
                <p>jasjdasd</p>
               </article>
        
              </div>
                
        )
    }
}
