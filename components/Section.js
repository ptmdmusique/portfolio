import React from 'react'

/*
  props = {
    int imageWidth 
    int imageHeight
    int scrollTime
    {-1, 1} direction     ----- scroll direction
    bool scrolling
    string (className) additionalStyle
    string (url) imageURL
  }
*/
const Section = (props) => {
  var containerCN = "w-screen h-screen overflow-hidden relative " + (props.additionalStyle || "")
  var scrollingCN = props.scrolling ? "scrolling " : "";

  return (
    <div className={containerCN}>
      <div className={"backgroundImage w-screen h-screen " + scrollingCN} />
      {props.children}

      <style jsx>{`       
        .scrolling {
          image-rendering: -moz-crisp-edges;
          image-rendering: -webkit-crisp-edges;
          image-rendering: pixelated;
          image-rendering: crisp-edges;
        }

        .backgroundImage {
          background-position: center; 
          background-color: rgba(0,0,0,0.75);
          background-blend-mode: darken;
          
          background-image: url("${props.imageURL}");
          background-size: auto 100%;
          background-repeat: repeat-x;
          
          position: absolute;
          top: 0;
          left: 0;
          z-index: -10;
          
          width: 500%;
          height: 100%;
        }

        .scrolling {
          image-rendering: -moz-crisp-edges;
          image-rendering: -webkit-crisp-edges;
          image-rendering: pixelated;
          image-rendering: crisp-edges;
          
          animation: slide ${String(props.scrollTime) || "2"}s linear infinite;
        }

        @keyframes slide {
          0%{ transform: translate3d(0, 0, 0); }
          100%{ transform: translate3d(calc(100vh * ${props.imageWidth / props.imageHeight * props.direction}), 0, 0); }
          
        }
      `}</style>
    </div>
  )
}

export default Section
