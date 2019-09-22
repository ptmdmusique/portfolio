import React from 'react'

const FlickeringSign = (props) => {
  const separateLetter = () => {
    if (props.content) {
      const returnVal = [];

      [...props.content].forEach(val => {
        returnVal.push(
          <span>
            {val}
          </span>
        )
      })

      return returnVal;
    }
    return null;
  }

  const flickerDuration = props.flickerDuration || ((props.randomIndex || 5) % 10 + 2)

  return (
    <div className="flickeringSignContainer font-PixelArt tracking-widest text-lg text-center ">
      {/* {separateLetter()} */}
      {props.content}

      <style jsx>{`   
        .flickeringSignContainer {
          color: ${props.textColor || "white"};
          text-shadow: 0.5px 0.3px 10px ${props.textColor || "white"};

          padding: 20px 10px 20px 5px;

          border-width : 3px 3px 3px 3px;
          border-style: solid;
          border-color: ${props.borderColor || "#fff"};     

          background-color: ${props.backgroundColor || "rgba(252, 21, 36, 0.7)"};

          animation: blink linear infinite; 
          animation-duration: ${flickerDuration}s;
        }

        /* Animate neon flicker */
        @keyframes blink {
          78% {
            border-color: inherit;
            text-shadow: inherit;
          }
          79%{
            border-color: #333;
          }
          80% {
            
            text-shadow: none;
          }
          81% {
            border-color: inherit;
            text-shadow: inherit;
          }
          82% {
            border-color: #333;
            text-shadow: none;
          }
          83% {
            border-color: inherit;
            text-shadow: inherit;
          }
          92% {
            border-color: #333;
            text-shadow: none;
          }
          92.5% {
            border-color: inherit;
            text-shadow: none;
          }
        }
      `}</style>
    </div>
  )
}

export default FlickeringSign
