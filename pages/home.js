import React from 'react';
import PageHeader from 'components/PageHeader'
import Section from 'components/Section';
import Header from 'components/Header';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Contact from 'components/Contact';

import 'assets/styles/tailwind.css'
const helloSignPath = '/static/images/hello-sign.png';
const ninjaRunPath = '/static/images/ninja-run.gif';
const houndWalkPath = '/static/images/hound-walk.gif';
const batFlyPath = '/static/images/bat-fly.gif';
import "assets/styles/HomeStyle.sass"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Home = (props) => {
  const fontStyle = "font-Rubik home-swipe-text";

  return (
    < div className="w-full h-full" >
      <PageHeader pageTitle="Duc Duchy's Home" />
      <Header activeRoute={"home"} />

      { /* My Name Section */}
      <Section>
        <div className="flex flex-col items-center">
          <p className={fontStyle}>
            Duc Phan
          </p>

          <hr className="border-2 w-6/12 rounded z-50 " />

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

      <div className="home-bg-container">
        <div className="far-bg home-common-bg-style home-pixel-object" />

      </div>
      <div className="home-bg-container">
        <div className="home-middle-bg home-common-bg-style home-pixel-object" />
      </div>

      <div className="home-bg-container">
        <div className="home-near-bg home-common-bg-style home-pixel-object" />
      </div>


      <div className="home-character-container">
        <img
          src={helloSignPath}
          alt="Hello Sign"
          className="home-hello-sign home-pixel-object"
        />
        <img
          src={ninjaRunPath}
          alt="Ninja Run"
          className="home-ninja-run home-pixel-object home-pixel-object"
        />
        <img
          src={houndWalkPath}
          alt="Hound Walk"
          className="home-hound-walk home-pixel-object"
        />
        <img
          src={batFlyPath}
          alt="Bat Fly"
          className="home-bat-fly home-pixel-object"
        />
      </div>

      <Contact />
    </div >
  )
}

export default Home