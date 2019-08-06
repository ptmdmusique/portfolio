import React from 'react'
import SectionStyle from './Styles/SectionStyle'
import Header from '../components/Header';

const Section = (props) => {
  return (
    <div 
      className="sectionContainer"
      style={{ 
        backgroundImage: ("url(" + props.imageURL + ")"),
        backgroundSize: 'cover',
      }}
      >      
      <Header/>
      {props.children}      
      <SectionStyle bgURL={props.imageURL}/>
    </div>
  )
}

export default Section
