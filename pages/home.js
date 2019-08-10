import PageHeader from 'components/PageHeader'
import React, { useEffect, useState } from 'react'
import Section from 'components/Section';
import Header from 'components/Header';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import initFirebase from 'libs/initFirebase';
import animateCSS from 'components/Animation';

import 'assets/styles/tailwind.css'
import helloSign from 'assets/images/hello-sign.png';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Home = (props) => {
  const [nameImageURL, setNameImageURL] = useState();

  const startInitFirebase = async () => {
    const firebase = await initFirebase();
    const storage = firebase.storage();

    storage.ref('Images/WebResources/homePicture-min.jpeg')
      .getDownloadURL()
      .then(url => {
        setNameImageURL(url);
      })
      .catch(err => {
        console.warn("dbErr-Error retrieving home image : " + err)
      })
  }

  useEffect(() => {
    startInitFirebase();

    //Hello sign animation
    animateCSS('.helloSign', ['fadeIn'], 
      () => animateCSS('.helloSign', ['wobble'], 
      () => animateCSS('.helloSign', ['fadeOut'], () => {
        const node = document.querySelector('.helloSign');
        node.classList.add('hidden');
      })));
  }, [])

  const fontSize = "lg:text-6xl md:text-5xl text-3xl"
  const fontStyle = "font-Rubik text-center my-4 color text-gray-100 " + fontSize;

  return (
    < div className="w-full" >
      <PageHeader pageTitle="Duc Duchy's Home" />
      <Header />

      { /* My Name Section */}
      <Section
        imageURL={nameImageURL}
        additionalStyle="flex justify-center items-center"
      >
        <div>
          <p className={fontStyle}>
            Duc Phan
          </p>

          <hr className="border-2 w-6/12 rounded " />

          <AutoPlaySwipeableViews enableMouseEvents>
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


      <img 
          src={helloSign}
          alt="Hello Sign"
          className="helloSign absolute slow"
        />

        <style jsx>{`
          .helloSign {
            height: 150px;
            width: 150px;
            bottom: 3%;
            left: 3%;
          }
        `}</style>
      { /* About Me Section */}
      {/* <div>About me section </div> */}

      {/* Achivement Section */}
      {/* <div> Achievement section </div> */}

      {/* Passion Section  */}
      {/* <div> Passion Section </div> */}
    </div >
  )
}

export default Home