import React from 'react'


const AboutStyle = () => {
  return (
    <style jsx="true">{`    
      .about-section-general {
        height: 1000px;
        width: 100%;
      }

      .about-section-1 {
        @extend .about-section-general;
        background-color: rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255});
      }
      .about-section-2 {
        @extend .about-section-general;
        background-color: rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255});
      }
      .about-section-3 {
        @extend .about-section-general;
        background-color: rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255});
      }
      .about-section-4 {
        @extend .about-section-general;
        background-color: rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255});
      }
    `}</style>
  )
}

export default AboutStyle
