import React from 'react'
import Section from '../components/Section';
import { Pane, Text } from 'evergreen-ui';

var nameImage = require('../assets/images/stars_space_sky_glitter_116409_3840x2160.jpg')

const home = () => {
  const sectionName = "sectionContainer"

  return (
    <div>
      {/* My Name Section */}
      <Section image={nameImage} imageURL={nameImage}>
      </Section>

      {/* About Me Section */}
      <div>
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
