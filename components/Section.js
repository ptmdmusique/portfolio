import React from 'react'

const Section = (props) => {
  const containerCN = "sectionContainer w-full h-screen " + (props.additionalStyle || "")

  return (
    <div
      className={containerCN}>
      {props.children}
      <style jsx>{`
        .sectionContainer {
          background-color: rgba(0,0,0,0.6);
          background-blend-mode: darken;
          background-image: url("data:image/jpeg;base64,bW9kdWxlLmV4cG9ydHMgPSAiL19uZXh0L3N0YXRpYy9pbWFnZXMvc3RhcnNfc3BhY2Vfc2t5X2dsaXR0ZXItZjkwNjYyMWM3MDc3NGFmM2JiYTAyMzAwMDNhYzcwNTAuanBnIjs=}");
          background-size: cover;
        }
      `}</style>
    </div>
  )
}

export default Section
