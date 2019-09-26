import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import PageHeader from 'components/PageHeader'
import Header from 'components/Header';
import Contact from 'components/Contact';
import AboutSection from 'components/AboutSection';
const presets = dynamic(() => import("react-text-transition").then(mod => mod.presets), {ssr: false});
const TextTransition = dynamic(import("react-text-transition"), {ssr: false});
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'assets/styles/AboutStyle.sass'

const AchievementData = [
    {
        date: "2013, 8th Grade",
        name: "Vietnamese Advanced Math",
        prize: "Third Prize",
        description: "This Math contest required us to know advanced Geometry, advanced Algebra and advanced Number Theory. We were trained for around a year starting from the last term of 8th grade until the end of the year, including Summer. It was fun and very challenging!",
    },
    {
        date: "2015, 11th Grade",
        name: "Vietnamese Creative Software",
        prize: "Third Prize",
        description: "This contest required us to make and defend a small software that is helpful for our fellow students in a short period of time. Using C# for Window Phone (yes...), we made Chempedia which is a wikipedia for what we are taught in Chemistry Nguyễn Quốc Việt, my teammate, handled the heavy work, I tailor the rest and we won the third prize! Thanks Việt :D",
    },    
    {
        date: "2015, 11th Grade",
        name: "Vietnamese Young Programmer",
        prize: "Second Place, District Level",
        description: "This programming contest is one of the annual contests that got held as a playground for many student competitor. We were required to understand basic algorithms such as sorting algos, searching algos, etc. I luckily got 2nd place!",
    },
    {
        date: "2015, 11th Grade",
        name: "Vietnamese Young Programmer",
        prize: "Third Prize, City Level (Team work!)",
        description: "Unlike the other programming contest with the same name, this round's requirement is the same as Vietnamese Creative Software's. My teammate and me chose the one that we used that same program and we won :)",
    },
    {
        date: "2016, 12th Grade",
        name: "Willamette Programming Contest",
        prize: "Fourth Place (Team work!)",
        description: "This is (used to be?) one of the annual programming contests for highschool students. My team: Dylan, Parker and me represented Tigard High School for the competitive sections. My English when I first came to the U.S. was very bad back then so I couldn't communicate very well! But my teammates carried me to the win!",
    },
]

const EducationData = [
    {
        schoolName: "Portland State University",
        year: "2018-??",
        subEvent: [            
            "Got into President List for 1 year",
            "Interned at Cambia Health Solution",
        ],
        iconName: "fas fa-brain",
        iconColor: "#ffa726",
    },
    {
        schoolName: "Portland Community College",
        year: "2016-2017",
        subEvent: [
            "Got into President List for 2 years",
            "Became ECE Robotic Lab Tutor",
            "Became Math/Computer Science Tutor",            
        ],
        iconName: "fas fa-brain",
        iconColor: "#a0af22",
    },
    {
        schoolName: "Tigard High School",
        year: "2015-2015",
        subEvent: [
            "Earned 5 I.T. certificates",
            "Joined Robotic Team",
            "Joined OGPC Competition",
            "Participated in Willamette Programming Contest",
        ],
        iconName: "fas fa-graduation-cap",
        iconColor: "#66bb6a",
    },
    {
        schoolName: "Trần Đại Nghĩa High School",
        year: "2013-2015_1/2",
        subEvent: [
            "Participated in Advanced Math Team",
            "Participated in Computer Science Team",
            "Participated in Multiple Computer Science Competitions",
        ],
        iconName: "fas fa-school",
        iconColor: "#26a69a",
    },
    {
        schoolName: "Lê Văn Tám Middle School",
        year: "2009-2012",
        subEvent: [
            "Participated in Advanced Math Team",
            "Participated in Regional Advanced Math Competition",
        ],
        iconName: "fas fa-pen",
        iconColor: "#42a5f5"
    },
    {
        schoolName: "Bế Văn Đàn Elementary School",
        year: "2004-2008",
        subEvent: [
            "Start learning Advanced Math :D",
        ],
        iconName: "fas fa-briefcase",
        iconColor: "#7e57c2",
    },
    {
        schoolName: "7A Kindergarten",
        year: "2004-2008",
        subEvent: [
            "Start learning... how to eat fast :)",
        ],
        iconName: "fas fa-baby",
        iconColor: "#ec407a",
    },
]

const AboutMe = () => {
    const animCN = "";
    const commonCN = "relative h-screen ";

    const fontSize = "text-1xl md:text-2xl lg:text-3xl xl:text-4xl ";
    const isInline = "sm:inline ";
    const paragraphCN = "text-white " + fontSize + isInline;
    const varCN = "text-teal-300 font-Code inline " + fontSize;
    const assignCN = "text-white inline " + fontSize;
    const stringCN = "text-yellow-600 inline " + fontSize;

    const infoSectionCN = "mb-2"
    const buttonCN = "bg-transparent hover:bg-blue-500 text-teal-300 font-semibold hover:text-white py-2 px-4\
        border border-teal-300 hover:border-transparent rounded " + fontSize;

    const achievementCommonCN = "text-white " + fontSize;
    const achievementBracketCN = "font-Code about-achievement-bracket md:inline ml-4 " + achievementCommonCN;
    const achievementContentCN = achievementCommonCN + "ml-4 pl-4 pr-4 ";

    const [achievementIndex, setAchievementIndex] = useState(0);
    const achieveButtonCN = "flex items-center about-achievement-button " + fontSize;

    useEffect(() => {
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 500, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: true, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });

        const textEffectTime = 0.9;
        typeWriter("about-full-name", "\"Phan Thanh Minh Đức\"", textEffectTime );
        typeWriter("about-short-name", "\"Duc Phan\"", textEffectTime );
        typeWriter("about-born-city", "\"the glamourous Saigon\"", textEffectTime );
        typeWriter("about-born-date", "\"09/05/1998\"", textEffectTime );

        window.scrollTo(0, 0);
    }, [])

    const typeWriter = (id, text, time) => {
        document.getElementById(id).innerHTML = "";
        typeWriterHelper(id, text, time, 0);
    }

    const typeWriterHelper = (id, text, time, curPos) => {
        if (curPos < text.length){
            document.getElementById(id).innerHTML += text.charAt(curPos++);
            setTimeout(() => typeWriterHelper(id, text, time, curPos), time / text.length * 1000);
        }
    }

    const renderAchievementList = () => {
        const curData = AchievementData[achievementIndex];
        const springPreset = presets.gentle;

        const returnData = 
            <span>
                <TextTransition 
                    className={"md:mr-8 " + achievementBracketCN} 
                    text={curData.date} 
                    springConfig={ springPreset }
                    />
                <TextTransition 
                    className={"sm:tracking-tighter " + achievementBracketCN} 
                    text={curData.name} 
                    springConfig={ springPreset }
                    />
                <TextTransition 
                    className={"mt-4 md:mt-8 lg:mt-16 font-bold " + achievementContentCN} 
                    text={curData.prize} 
                    springConfig={springPreset }
                    />
                <TextTransition 
                    className={"mt-1 md:mt-2 lg:mt-4 " + achievementContentCN} 
                    text={curData.description} 
                    springConfig={ springPreset }
                    />
            </span>

        return returnData;
    }

    const renderEducationList = () => {
        const educationList = [];
        EducationData.map((data, indx) => {
            const subEventList = [];
            data.subEvent.map((subEvent, indx) => {
                subEventList.push(
                    <li key={indx}>
                        {subEvent}
                    </li>
                )
            })

            educationList.push(                
                <VerticalTimelineElement
                    key={indx}
                    iconStyle={{ background: (data.iconColor || "#00e676"), justifyContent: "center", textAlign: "center", display: "flex", flexDirection: 'column' }}
                    icon={<i className={(data.iconName || "fas fa-school") + " text-white text-sm md:text-base lg:text-lg xl:text-xl"}></i>}
                    date={<p className="text-white font-semibold">{data.year}</p>}
                >
                    <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl">{data.schoolName || "School's Name"}</h1>
                    <h2 className="text-sm md:text-base lg:text-lg xl:hidden font-semibold">{data.year || "??-??"}</h2>
                    <ul className="list-disc text-sm md:text-base lg:text-lg pl-2 md:pl-4 mt-1">
                        {subEventList}
                    </ul>
                </VerticalTimelineElement>
            )
        })

        return <VerticalTimeline>
            {educationList}
        </VerticalTimeline>
    }

    return (
        <div className="w-full">
            <PageHeader pageTitle="About Duc Duchy" />
            <Header activeRoute={"about"} />

            <AboutSection 
                className={"about-section-1 " + commonCN} 
                data-aos={animCN}
            >
                <div className="flex flex-col justify-center w-full h-full">
                    <h1 className="mb-4 text-white text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-Code">
                        Hello World!
                    </h1>    

                    <span className={infoSectionCN}>
                        <p className={paragraphCN}>My name is </p>            
                        <p className={varCN}>>>fullName </p>
                        <p className={assignCN}>= </p>
                        <p className={stringCN} id="about-full-name"/>
                    </span>

                    <span className={infoSectionCN}>
                        <p className={paragraphCN}>But people usually call me </p>            
                        <p className={varCN }>>>shortName </p>
                        <p className={assignCN}>= </p>
                        <p className={stringCN} id="about-short-name"/>
                    </span>
                    
                    <span className={infoSectionCN}>
                        <p className={paragraphCN}>I was born in </p>            
                        <p className={varCN }>>>bornCity </p>
                        <p className={assignCN}>= </p>
                        <p className={stringCN} id="about-born-city"/>
                    </span>

                    <span className={infoSectionCN}>
                        <p className={paragraphCN}>In a hot summer day, </p>            
                        <p className={varCN }>>>bornDate </p>
                        <p className={assignCN}>= </p>
                        <p className={stringCN} id="about-born-date"/>
                    </span>

                    <span className="pt-16 xl:pt-32 text-sm">
                        <p className={paragraphCN}>Psst! Wanna know more about Saigon? </p>            
                        <p className={paragraphCN}>Check these out!</p>
                        <div className="flex mt-4 md:mt-8 lg:mt-16 justify-around">
                            <a className={buttonCN}>
                            My Saigon Gallery
                            </a>
                            <a className={buttonCN} href="https://www.facebook.com/oldsaigon75/" target="_blank" rel="noopener noreferrer">
                            Saigon Xua's Page
                            </a>
                        </div>
                    </span>
                </div>
            </AboutSection>

            <AboutSection className={"about-section-2 pt-12 md:pt-32 " + commonCN} data-aos={animCN}>
                <h1 className="mb-2 text-white text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-Code">Achievement</h1>    
                <span className={infoSectionCN}>
                    <p className={paragraphCN}>I got "beaten" by knowledge </p>            
                    <p className={paragraphCN}>... but also rewarded at the same time! </p>
                    <p className={paragraphCN}>Here are some of my achievement: </p>
                </span>

                <span className="flex mt-4 md:mt-6 lg:mt-10 mb-8 lg:mb-10 justify-around text-white">
                    <button 
                        className={achieveButtonCN}
                        onClick={() => setAchievementIndex(achievementIndex == 0 ? AchievementData.length - 1 : (achievementIndex - 1))}>
                        <i className="fas fa-chevron-circle-left"></i>
                        <p className="ml-2 lg:ml-4">Previous</p>
                    </button>

                    <button 
                        className={achieveButtonCN}
                        onClick={() => setAchievementIndex((achievementIndex + 1) % AchievementData.length)}>
                        <p className="mr-2 lg:mr-4">Next</p>
                        <i className="fas fa-chevron-circle-right"></i>
                    </button>
                </span>

                {renderAchievementList()}
            </AboutSection>

            <AboutSection className={"about-section-3 pt-12 md:pt-32 " + commonCN} data-aos={animCN}>
                <div className="w-full h-full flex flex-col pb-12">
                    <h1 className="mb-2 text-white text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-Code">Education</h1>    
                    {/* <div className="h-full overflow-y-scroll mt-6 px-1">
                        {renderEducationList()}
                    </div> */}
                    <PerfectScrollbar
                    >
                        {renderEducationList()}
                    </PerfectScrollbar>
                </div>
            </AboutSection>

            <Contact />
        </div>
    )
}

export default AboutMe
