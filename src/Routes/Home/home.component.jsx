import React, {useState, useEffect, useRef} from 'react';
import {FaAngleDoubleUp} from 'react-icons/fa';
import Navigation from '../../Components/Navigation/navigation.component';
import AboutMe from '../../Components/sections/about-me/about-me.component';
import Skills from '../../Components/sections/skills/skills.componet';
import Projects from '../../Components/sections/projects/projects.component';
import Contact from '../../Components/sections/contact/contact.component';

import '../Home/home.css';

const Home = () => {
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const [showScrollTopButton, setShowScrollTopButton] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 300){
                setShowScrollTopButton(true);
            } else{
                setShowScrollTopButton(false);
            }
        })
    }, []);

    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    return(
    <div className="home-wrapper">
        <Navigation aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef}/>
        {showScrollTopButton && <FaAngleDoubleUp className='top-btn-position top-btn-style' onClick={scrollToTop}/>}
        <AboutMe ref={aboutRef} />
        <Skills ref={skillsRef}/>
        <Projects ref={projectsRef} />
        <Contact ref={contactRef}/>
    </div>
    )
};

export default Home;