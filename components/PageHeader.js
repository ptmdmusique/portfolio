import Head from 'next/head';
import React from 'react';

const PageHeader = (props) => {
  return (
    <div>
      <Head>
        <title>{props.pageTitle}</title>

        {/* Styles & Animation */}
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"/>

        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css?family=Rubik&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap" rel="stylesheet"/>

      </Head>
      <style jsx global>{`
          @font-face {
            font-family: "Arkhip" 
            src: url("assets/fonts/Arkhip.otf")
          }          
          .font-Arkhip {
            font-family: "Arkhip"
          }


          @font-face {
            font-family: "Rubik";
            src: url("https://fonts.googleapis.com/css?family=Rubik&display=swap");
          }
          .font-Rubik {
            font-family: "Rubik";
          }


          @font-face {
            font-family: "Press Start 2P";
            src: url("https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap");
          }
          .font-PixelArt {
            font-family: "Press Start 2P";
          }


          @font-face {
            font-family: "Source Code Pro";
            src: url("https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap");
          }
          .font-Code {
            font-family: "Source Code Pro";
          }
        `}</style>
    </div>
  )
}

export default PageHeader
