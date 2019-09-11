import React, { useEffect } from 'react';
import PageHeader from 'components/PageHeader'
import Section from 'components/Section';
import Header from 'components/Header';
import Contact from 'components/Contact';
import FlickeringSign from 'components/FlickeringSign';

import AOS from 'aos';
import 'assets/styles/AboutStyle.sass'

const AboutMe = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    
    return (
        <div className="w-full h-full">
            <PageHeader pageTitle="About Duc Duchy" />
            <Header activeRoute={"about"} />

            {/* <Section>
                <a></a>
            </Section>

            <Section>

            </Section>

            <Section>

            </Section>

            <Section>

            </Section> */}
            <div className="flex about-section-1">
                <div className="w-full h-full flex content-center items-center">
                    <FlickeringSign content="Something"/>
                </div>
            </div>

            <div className="about-section-2">

            </div>

            <div className="about-section-3">

            </div>

            <Contact />
        </div>
    )
}

export default AboutMe
