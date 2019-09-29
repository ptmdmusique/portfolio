import React from 'react'

import 'aos/dist/aos.css';
import 'assets/styles/aosCustomAnimation.sass'

const AboutSection = (props) => {
  return (
    <div className={"flex " + props.className} data-aos={props["data-aos"]}>
      <div className="w-full h-full flex flex-col content-center items-center">
        <div className="about-section-cover" data-aos="hide" />    

        <div className="w-full h-full px-6 md:px-16 lg:px-32 xl:px-40 ">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default AboutSection
