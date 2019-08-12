import React, { useState } from 'react'

const Section = (props) => {
  var containerCN = "sectionContainer w-full h-screen " + (props.additionalStyle || "")
  var scrollingCN = props.scrolling ? "scrolling " : "";

  return (
    <div
      className={containerCN}>
      <div className={"backgroundImage w-full h-screen " + scrollingCN}/>
      {props.children}

      <style jsx>{`
        .sectionContainer {
          background-position: center; 
          background-color: rgba(0,0,0,0.75);
          background-blend-mode: darken;
          z-index: -2;
          overflow: hidden;
        }
        
        .backgroundImage {
          background-image: url("${props.imageURL}");
          background-size: cover;

          position: absolute;
          top: 0;
          left: 0;
          z-index: -3;
          
          width: 100%;
          height: 100%;
        }

        .scrolling {
          image-rendering: -moz-crisp-edges;
          image-rendering: -webkit-crisp-edges;
          image-rendering: pixelated;
          image-rendering: crisp-edges;
          
          animation: slide 10s linear infinite;
        }

        @keyframes slide {
          0%{ transform: translate3d(0, 0, 0); }
          100%{ transform: translate3d(-100vw, 0, 0); }
        }
      `}</style>
    </div>
  )
}

export default Section
