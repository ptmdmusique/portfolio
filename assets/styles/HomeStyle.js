import React from 'react'
import nearBG from 'assets/images/near-forest-bg.png';
import middleBG from 'assets/images/middle-forest-bg.png';
import farBG from 'assets/images/far-forest-bg.png';

const HomeStyle = () => {
  return (
    <style
      jsx="true"
    >{`
      .character-container {
        height: 30%;
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
        display: flex;
        align-items: flex-end;
        overflow: visible;
      }

      .pixel-object {
        image-rendering: -moz-crisp-edges;
        image-rendering: -webkit-crisp-edges;
        image-rendering: pixelated;
        image-rendering: crisp-edges;
      }
      .hello-sign {
        z-index: 14;
        bottom: 50px;
        left: -80px;
        position: absolute;
        animation: slide_2 15s linear infinite;
      }
      .ninja-run {
        z-index: 15;        
        bottom: 0; 
        left: -100px;    
        position: absolute;

        width: 100px;
        height: 100px;
        animation: slide_2 15s linear infinite;
      }

      .hound-walk {
        z-index: 14;        
        bottom: 0; 
        left: -300px;    
        position: absolute;

        width: 200px;
        height: 200px;

        animation: slide_2 30s linear infinite;        
      }

      .bat-fly {
        z-index: 14;        
        bottom: 100px; 
        right: -50px;    
        position: absolute;

        width: 200px;
        height: 200px;

        animation: slide_3 10s linear infinite;        
      }


      .bg-container {        
        height: 30%;
        width: 2000%;
        position: fixed;
        left: 0;
        bottom: 0;
      }

      .common-bg-style {
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
        100%{ transform: translateX(${-256 * 2}px); }
      }

      @keyframes slide_2 {
        0%{ transform: translateX(0vw); }
        100%{ transform: translateX(100vw); }
      }

      @keyframes slide_3 {
        0%{ transform: translateX(0vw); }
        100%{ transform: translateX(-100vw); }
      }
    `}</style>
  )

  // 0%{ transform: translate3d(0, 0, 0); }
  //       100%{ transform: translate3d(-100vw, 0, 0); }
}

export default HomeStyle
