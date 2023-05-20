import './navigation.css'
import logo from '../images/logo.svg';

const Navigation = ({aboutRef, skillsRef, projectsRef, contactRef}) => {

    const scrollToSection = (elementRef) =>{
        elementRef.current.scrollIntoView({
            behavior: "smooth"
        });
    }

    return(
        <div className="nav">
            <div className="logo-container">
                <img src={logo} alt="logo" className="logo"/>
            </div>
            <div className="container">
                <ul>
                    <li onClick={() => scrollToSection(aboutRef)} className="link" >About</li>
                    <li onClick={() => scrollToSection(skillsRef)} className="link">Skills</li>
                    <li onClick={() => scrollToSection(projectsRef)} className="link">Projects</li>
                    <li onClick={() => scrollToSection(contactRef)} className="link">Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;