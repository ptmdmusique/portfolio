import React from 'react';
import PageHeader from 'components/PageHeader'
import Section from 'components/Section';
import Header from 'components/Header';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Contact from 'components/Contact';

import 'assets/styles/tailwind.css'
import helloSign from 'assets/images/hello-sign.png';
import ninjaRun from 'assets/images/ninja-run.gif';
import houndWalk from 'assets/images/hound-walk.gif';
import batFly from 'assets/images/bat-fly.gif';
import pixelBG from 'assets/images/pixel-bg.png';
// import HomeStyle from 'assets/styles/HomeStyle';
import "assets/styles/HomeStyle.sass"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Home = (props) => {
  const fontSize = "2k:text-6xl lg:text-4xl md:text-3xl text-2xl"
  const fontStyle = "font-Rubik text-center my-4 color text-gray-100 " + fontSize;

  return (
    < div className="w-full h-full" >
      <PageHeader pageTitle="Duc Duchy's Home" />
      <Header activeRoute={"home"} />

      { /* My Name Section */}
      <Section
        imageURL={pixelBG}
        additionalStyle="flex justify-center items-center "
        scrolling
        imageWidth="507"
        imageHeight="267"
        scrollTime="40"
        direction={-1}
      >
        <div className="flex flex-col items-center">
          <p className={fontStyle}>
            Duc Phan
          </p>

          <hr className="border-2 w-6/12 rounded " />

          <AutoPlaySwipeableViews interval={2000} enableMouseEvents>
            <p className={fontStyle}>
              Programmer
            </p>
            <p className={fontStyle}>
              Pianist
            </p>
            <p className={fontStyle}>
              Martial Artist
            </p>
            <p className={fontStyle}>
              Philosopher
            </p>
          </AutoPlaySwipeableViews>

        </div>

      </Section>

      <div className="bg-container">
        <div className="far-bg common-bg-style pixel-object" />

      </div>
      <div className="bg-container">
        <div className="middle-bg common-bg-style pixel-object" />
      </div>

      <div className="bg-container">
        <div className="near-bg common-bg-style pixel-object" />
      </div>


      <div className="character-container">
        <img
          src={helloSign}
          alt="Hello Sign"
          className="hello-sign pixel-object"
        />
        <img
          src={ninjaRun}
          alt="Ninja Run"
          className="ninja-run pixel-object pixel-object"
        />
        <img
          src={houndWalk}
          alt="Hound Walk"
          className="hound-walk pixel-object"
        />
        <img
          src={batFly}
          alt="Bat Fly"
          className="bat-fly pixel-object"
        />
      </div>

      {/* <HomeStyle /> */}

      <Contact />
    </div >
  )
}

export default Home