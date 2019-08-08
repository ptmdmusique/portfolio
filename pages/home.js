import PageHeader from 'components/PageHeader'
import React from 'react'
import Section from 'components/Section';
import Header from 'components/Header';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import 'assets/styles/tailwind.css'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
var nameImage = require('../assets/images/stars_space_sky_glitter.jpg') 

const home = () => {
  const fontSize = "lg:text-6xl xl:text-6xl md:text-4xl text-3xl"
  const fontStyle = "font-Rubik text-center my-4 color text-gray-100 " + fontSize;

  return (
    <div className="w-full">
      <PageHeader pageTitle="Duc Duchy's Home" />
      <Header />

      { /* My Name Section */}
      <Section
        image={nameImage}
        imageURL={nameImage}
        additionalStyle="flex justify-center items-center"
      >
        <div>
          <p className={fontStyle}>
            Duc Phan
          </p>

          <hr className="border-2 w-6/12" />

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

      { /* About Me Section */}
      <div>About me section </div>

      {/* Achivement Section */}
      <div> Achievement section </div>

      {/* Passion Section  */}
      <div> Passion Section </div>
    </div>
  )
}

export default home