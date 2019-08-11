import React, { useState } from 'react'

const Section = (props) => {
  var containerCN = "sectionContainer w-full h-screen " + (props.additionalStyle || "")

  if (props.scrolling) {
    containerCN += " scolling ";
  }

  return (
    <div
      className={containerCN}>
      {props.children}
      <style jsx>{`
        .sectionContainer {
          background-position: center; 
          background-color: rgba(0,0,0,0.75);
          background-blend-mode: darken;
          background-image: url("${props.imageURL}");
          background-size: cover;
        }
        
        .scrolling {
          background-repeat: repeat-x;
          animation: slide 1s linear infinite;
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
