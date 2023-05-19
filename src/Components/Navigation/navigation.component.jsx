import { Fragment, useRef } from "react";
import { Outlet } from "react-router-dom";

import '../Navigation/navigation.css'
import logo from '../Images/logo.svg';

const Navigation = () => {

    const about = useRef(null);
    const skills = useRef(null);
    const projects = useRef(null);
    const contact = useRef(null);

    const scrollToSection = (elementRef) =>{
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        });
    }
    return(
    <Fragment>
        <div className="nav">
                <div className="logo-container">
                    <img src={logo} alt="logo" className="logo"/>
                </div>
            <div className="container">
                <ul>
                <li onClick={() => scrollToSection(about)} className="link">About</li>
                <li onClick={() => scrollToSection(skills)} className="link">Skills</li>
                <li onClick={() => scrollToSection(projects)} className="link">Projects</li>
                <li onClick={() => scrollToSection(contact)} className="link">Contact</li>
                </ul>
            </div>
            </div>
        <Outlet/>
    </Fragment>
    )
}

export default Navigation;