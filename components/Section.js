import React from 'react'
import SectionStyle from './Styles/SectionStyle'
import '../tailwind.css';

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
      <SectionStyle bgURL={props.imageURL}/>
    </div>
  )
}

export default Section
