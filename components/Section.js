import React from 'react'

const Section = (props) => {
  const containerCN = "sectionContainer w-full h-screen " + (props.additionalStyle || "")

  return (
    <div
      className={containerCN}
      style={{
        backgroundImage: ("url(" + props.imageURL + ")"),
        backgroundSize: 'cover',
      }}
    >
      {props.children}
      <style jsx>{`
        .sectionContainer {
          background-color: rgba(0,0,0,0.6);
          background-blend-mode: darken;
        }
      `}</style>
    </div>
  )
}

export default Section
