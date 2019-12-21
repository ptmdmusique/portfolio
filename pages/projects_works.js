import React from 'react';
import PageHeader from 'components/PageHeader'
import Header from 'components/Header';
import Contact from 'components/Contact';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import 'aos/dist/aos.css';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


import "assets/styles/Projects_WorksStyle.sass";

const pastProjectData = [
  {
    title: "Chempedia",
    description: "Something Something",
    overview: "Chemistry + Wikipedia",
    workYear: "2014",
    collab: "Nguyễn Quốc Việt - Viet Nguyen",
    images: [
      {
        src: "static/images/Chempedia.png"
      },
    ]
  },
  {
    title: "When the Dream Ends",
    description: "Something Something",
    overview: "Pixel Art + Unity 3D",
    workYear: "2017",
    images: [
      {
        src: "static/images/WhenTheDreamEnds_Preview-min.png"
      },
    ]
  },
  {
    title: "Teddy Fighter XD",
    description: "Something Something",
    overview: "Pixel Art + Unity 3D",
    workYear: "2018",
    collab: "Nguyễn Hữu Thắng - Thang Nguyen",
    images: [
      {
        src: "static/images/TeddyFighter_preview.png"
      },
    ]
  },
  {
    title: "WCT Tigard Mobile App",
    description: "Something Something",
    overview: "React Native + Taekwondo",
    workYear: "2019",
    collab: "Nguyễn Hữu Thắng - Thang Nguyen",
    images: [
      {
        src: "static/images/wctTigard_preview.png"
      },
    ]
  },
  {
    title: "Duc's Portfolio",
    description: "Something Something",
    overview: "ReactJS + NextJS",
    workYear: "2019",
    collab: "Nguyễn Hữu Thắng - Thang Nguyen",
    images: [
      {
        src: "static/images/Portfolio_preview.png"
      },
    ]
  },
]

const projects_works = () => {
  const fontSize = "text-base md:text-lg lg:text-xl xl:text-2xl 2k:text-4xl ";

  const renderProjectCard = (content, index = 0) => {
    const animationCN = "animated fadeIn bounce project_past_card_" + (index);
    return (
      <div 
        key={index} 
        className={"rounded overflow-hidden shadow-lg bg-gray-100 pb-4 mb-8 " + animationCN}
        data-aos="zoom-in"
        // data-aos-offset="-1000"
        data-aos-delay={index * 100}
        data-aos-duration="500"
        data-aos-easing="ease-out-cubic"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        data-aos-anchor=".project-lightbox-grid"
        
        >
        <div className="w-full flex justify-center align-middle h-auto">
          <img className="object-cover" src={content.images[0].src} alt="Sunset in the mountains"/>
        </div>

        <div className="px-6 py-4">
          <div className="font-bold text-xl md:text-2xl lg:text-3xl">{content.title}</div>
          <p className="text-gray-700 text-sm md:text-base lg:text-lg">
            Overview: {content.overview || "Chemistry + Wikipedia"}
            <br/>
            Work Year: {content.workYear || "1998"}
            <br/>
            Collaborator: {content.collab || "None"}
          </p>
        </div>

        <div className="flex justify-center px-6 py-4 mt-1 md:mt-2 lg:mt-4">
          <button className="flex items-center rounded-lg bg-green-600 px-2 text-sm md:text-lg lg:text-xl xl:text-xl 2k:text-2xl font-semibold text-white project-card-button focus:outline-none">
            <i className="fas fa-info-circle py-2"></i>     
          </button>   
        </div>
      </div>
    )
  }

  const renderProjects = (projectList) => {
    const result = [];
    projectList.forEach((ele, index) => {
      result.push(renderProjectCard(ele, index))
    })

    return result;
  }
  const renderLightBoxCard = (content) => {
    const imageList = []
    content.images.forEach((element, index) => {
      imageList.push(
        <img 
          className=" object-cover max-h-full" 
          index={index}
          src={element.src}
          alt="Sunset in the mountains"/>
      )
    })

    return (
      <div className="project-lightbox-card flex justify-center items-center px-40 py-48">
        <div className="w-full h-full flex justify-center align-middle">
          <div className="project-lightbox-image w-6/12 flex justify-center align-middle">
            <AutoPlaySwipeableViews
                interval={2000}
                enableMouseEvents
                className="w-6/12"
              >
              {imageList}
            </AutoPlaySwipeableViews> 
          </div>

          <div className="bg-yellow-400 w-4/12 flex justify-center py-32 px-16 ">
            <h1 className={fontSize + " "}>
              {content.title}
            </h1>
          </div>
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
        <div className="project-intro">
          <h1 className="font-Code project-intro-text">
            Past + Current <br/> Dedication
          </h1>
        </div>

        <div className="project-star-div">
          <div className="project-star-1"/>
          <div className="project-star-2"/>
          <div className="project-star-3"/>

          <div className="project-content-div">
            <h1 className="font-Code project-div-title">Past Projects</h1>
            <div className="project-lightbox-grid">
              {renderProjects(pastProjectData)}
            </div>
          </div>
        </div>
          
        {/* <div>
          {renderLightBoxCard(project_data[0])}
        </div> */}
      </div>

    </div>
  )
}

export default projects_works
