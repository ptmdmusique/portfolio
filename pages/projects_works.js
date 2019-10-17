import React from 'react';
import PageHeader from 'components/PageHeader'
import Header from 'components/Header';
import Contact from 'components/Contact';

import "assets/styles/Projects_WorksStyle.sass";

const projects_works = () => {
  const fontSize = "text-1xl md:text-2xl lg:text-3xl xl:text-4xl ";

  const renderProjectCard = (content) => {
    return (
      <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4">
        <img class="w-full" src="/static/images/buu_dien_saigon.jpg" alt="Sunset in the mountains"/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Chempedia</div>
          <p class="text-gray-700 text-sm">
            Work Year: {content.workYear || "1998"}
            <br/>
            
          </p>
        </div>
        <div class="px-6 py-4">
          <button class="flex items-center rounded-lg bg-green-600 px-3 py-1 text-sm font-semibold text-white project_card_button">
            <i className="fas fa-info-circle py-2"></i>
            
          </button>
      
        </div>
      </div>
    )
  }

  return (
    <div className="w-full bg-gray-300">
      <PageHeader pageTitle="About Duc Duchy" />
      <Header activeRoute={"projects_works"} />
      <Contact />

      <div className="relative">
        <div className="w-full h-screen flex items-center project_intro pl-8">
            <h1 className={"font-Code text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl project_intro_text select-none "}>
              Past + Current <br/> Dedication
            </h1>
          </div>

          <div className=" min-h-screen py-24 px-12">
            <h1 className="font-bold text-center text-2xl mb-4">Past Projects</h1>
            <div className="">
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
