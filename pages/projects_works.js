import React from 'react';
import PageHeader from 'components/PageHeader'
import Header from 'components/Header';
import Contact from 'components/Contact';

import "assets/styles/Projects_WorksStyle.sass";

const projects_works = () => {
  const fontSize = "text-1xl md:text-2xl lg:text-3xl xl:text-4xl ";

  const renderProjectCard = (content) => {
    return (
      <div className="max-w-lg rounded overflow-hidden shadow-lg bg-gray-100">
        <img className="w-full" src="/static/images/buu_dien_saigon.jpg" alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl md:text-3xl lg:text-4xl">Chempedia</div>
          <p className="text-gray-700 text-sm md:text-base lg:text-lg">
            Overview: {content.overview || "Chemistry + Wikipedia"}
            <br/>
            Work Year: {content.workYear || "1998"}
          </p>
        </div>
        <div className="flex justify-center px-6 py-4 mt-1 md:mt-2 lg:mt-4">
          <button className="flex items-center rounded-lg bg-green-600 px-3 py-1 text-sm md:text-lg lg:text-xl xl:text-2xl 2k:text-3xl font-semibold text-white project_card_button focus:outline-none">
            <i className="fas fa-info-circle py-2"></i>     
          </button>   
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <PageHeader pageTitle="About Duc Duchy" />
      <Header activeRoute={"projects_works"} />
      <Contact />

      <div className="relative">
        <div className="w-full h-screen flex items-center project_intro px-8 md:px-16 lg:px-24 xl:px-32">
          <h1 className={"font-Code text-white text-3xl md:text-5xl lg:text-6xl xl:text-6xl project_intro_text select-none "}>
            Past + Current <br/> Dedication
          </h1>
        </div>

        <div className=" min-h-screen py-24 md:py-40 lg:py-56 px-12 lg:px-20 xl:px-64 bg-gray-200">
          <h1 className="font-bold text-center text-2xl md:text-4xl xl:text-5xl mb-4 md:mb-8 lg:mb-16">Past Projects</h1>
          <div className="project_lightbox_grid">
            {renderProjectCard({})}
            {renderProjectCard({})}
            {renderProjectCard({})}
            {renderProjectCard({})}
            {renderProjectCard({})}
          </div>
        </div>
      </div>
    </div>
  )
}

export default projects_works
