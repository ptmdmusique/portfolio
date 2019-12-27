import React from 'react'
import "assets/styles/SectionStyle.sass"

const Section = (props) => {
  return (
    <div className="section-container">
      <div className="section-background-overlay" />
      <div className="section-background-image" />
      {props.children}
    </div>
  )
}

export default Section
