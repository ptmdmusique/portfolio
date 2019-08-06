import React from 'react'
import Section from '../components/Section';
var nameImage = require('../assets/images/stars_space_sky_glitter_116409_3840x2160.jpg')

const home = () => {
  return (
    <div style={{ width: '100%', backgroundColor: 'blue', }}>
      {/* My Name Section */}
      <Section image={nameImage} imageURL={nameImage}>
      </Section>

      {/* About Me Section */}
      <div style={{backgroundColor: 'blue'}}>
        About me section
      </div>

      {/* Achivement Section */}
      <div>
        Achievement section
      </div>

      {/* Passion Section  */}
      <div>
        Passion Section
      </div>
    </div>
  )
}

export default home
