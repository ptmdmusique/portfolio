import React from 'react'

const Section = (props) => {
  const containerCN = "sectionContainer w-full h-screen " + (props.additionalStyle || "")

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
      `}</style>
    </div>
  )
}

export default Section
