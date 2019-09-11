import React from 'react'
import FlickeringSign from 'components/FlickeringSign';

import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = (props) => {
  return (
    <div className={"flex fade " + props.className} data-aos={props["data-aos"]}>
      <div className="w-full h-full flex content-center items-center">
        <FlickeringSign
          content={props.signContent || "Something"}
          randomIndex={props.randomIndex || Math.floor(Math.random() * 20)} />
        <div>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default AboutSection
