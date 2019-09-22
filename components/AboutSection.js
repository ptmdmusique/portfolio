import React from 'react'

import 'aos/dist/aos.css';
import 'assets/styles/aosCustomAnimation.sass'

const AboutSection = (props) => {
  return (
    <div className={"flex " + props.className} data-aos={props["data-aos"]}>
      <div className="w-full h-full flex flex-col content-center items-center">
        <div className="about-section-cover" data-aos="hide" />    

        <div className="w-full h-full pl-6 pr-6 md:pl-16 md:pr-16 lg:pl-32 lg:pr-32 xl:pl-64 xl:pr-64 ">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default AboutSection
