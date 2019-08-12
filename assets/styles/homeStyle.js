import React from 'react'
import nearBG from 'assets/images/near-forest-bg.png';
import middleBG from 'assets/images/middle-forest-bg.png';
import farBG from 'assets/images/far-forest-bg.png';

const HomeStyle = () => {
  return (
    <style
      jsx="true"
    >{`
      .ninja-sign-container {
        height: 30%;
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
        display: flex;
        align-items: flex-end;
        animation: slide_2 15s linear infinite;
      }
      .hello-sign {
        image-rendering: -moz-crisp-edges;
        image-rendering: -webkit-crisp-edges;
        image-rendering: pixelated;
        image-rendering: crisp-edges;

        z-index: 14;
        bottom: 50px;
        left: -80px;
        position: relative;
      }
      .ninja-run {
        image-rendering: -moz-crisp-edges;
        image-rendering: -webkit-crisp-edges;
        image-rendering: pixelated;
        image-rendering: crisp-edges;

        z-index: 15;        
        bottom: 0; 
        left: -155px;    
        position: relative;

        width: 100px;
        height: 100px;
      }

      .anim-container {        
        height: 30%;
        width: 200%;
        position: fixed;
        left: 0;
        bottom: 0;
      }
      .common-bg-style {
        image-rendering: -moz-crisp-edges;
        image-rendering: -webkit-crisp-edges;
        image-rendering: pixelated;
        image-rendering: crisp-edges;
        height: 100%;
      }
      .near-bg {
        background: url('${nearBG}') repeat-x left bottom;
        animation: slide 20s linear infinite;
        z-index: 12;
      }
      .middle-bg {
        background: url('${middleBG}') repeat-x left bottom;
        animation: slide 34s linear infinite;
        z-index: 11;
      }
      .far-bg {        
        background: url('${farBG}') repeat-x left bottom;
        animation: slide 50s linear infinite;
        z-index: 10;
      }
      @keyframes slide {
        0%{ transform: translateX(0vw); }
        100%{ transform: translateX(-100vw); }
      }

      @keyframes slide_2 {
        0%{ transform: translateX(0vw); }
        100%{ transform: translateX(100vw); }
      }
    `}</style>
  )

  // 0%{ transform: translate3d(0, 0, 0); }
  //       100%{ transform: translate3d(-100vw, 0, 0); }
}

export default HomeStyle
