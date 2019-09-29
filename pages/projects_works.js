import React from 'react';
import PageHeader from 'components/PageHeader'
import Header from 'components/Header';
import Contact from 'components/Contact';
import SwipeableViews from 'react-swipeable-views';

import "assets/styles/Projects_WorksStyle.sass";

const projects_works = () => {
  const fontSize = "text-1xl md:text-2xl lg:text-3xl xl:text-4xl ";

  return (
    <div className="w-full bg-blue-400">
      <PageHeader pageTitle="About Duc Duchy" />
      <Header activeRoute={"projects_works"} />
      <Contact />

      <div className="relative">
        <SwipeableViews enableMouseEvents>
          <div className="w-full h-screen flex justify-center items-center project_intro">
            <h1 className={"font-Code text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl project_intro_text select-none "}>
              Projects
            </h1>
          </div>

          <div>
            test test
          </div>
        </SwipeableViews>

        <div className="absolute top-0 left-0 projects_works_overlay w-full h-full"/>
      </div>
    </div>
  )
}

export default projects_works
