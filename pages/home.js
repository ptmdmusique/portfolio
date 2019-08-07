import React from 'react'
import Section from '../components/Section';
import Header from '../components/Header';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import '../tailwind.css'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
var nameImage = require('../assets/images/stars_space_sky_glitter_116409_3840x2160.jpg')

const home = () => {
  const fontSize = "lg:text-6xl xl:text-6xl text-2xl"
  const fontStyle = "font-serif text-center my-4 color text-gray-100 " + fontSize;
  
  return ( 
    <div style={{ width: '100%', backgroundColor: 'blue', }}> 
      <Header/>

      { /* My Name Section */ } 
      <Section 
        image={nameImage} 
        imageURL={nameImage}
        additionalStyle="flex justify-center items-center"
        >
        <div>
          <p className={fontStyle}>
            Duc Phan
          </p>

          <hr className="border-2 w-6/12"/>

          <AutoPlaySwipeableViews enableMouseEvents>
            <p className={fontStyle}>
              Programmer
            </p>
            <p className={fontStyle}>
              Web/App Dev
            </p>
            <p className={fontStyle}>
              Fullstack Dev
            </p>
          </AutoPlaySwipeableViews>

        </div>
      </Section>

      { /* About Me Section */ } 
      <div style={{ backgroundColor: 'blue' }}>About me section </div>

      {/* Achivement Section */ } 
      <div> Achievement section </div>

      {/* Passion Section  */ } 
      <div> Passion Section </div> 
    </div>
  )
}

export default home