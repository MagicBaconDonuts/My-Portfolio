import './navigation.css'
import portfolio from '../images/portfolio.png';

const Navigation = ({aboutRef, skillsRef, projectsRef}) => {

    const scrollToSection = (elementRef) =>{
        elementRef.current.scrollIntoView({
            behavior: "smooth"
        });
    }

    return(
        <div className="nav">
            <div className='nav-items'>
                <div className="logo-container">
                    <img src={portfolio} alt="logo" className="logo"/>
                </div>
                <div className="container">
                    <ul>
                        <li onClick={() => scrollToSection(aboutRef)} className="link" >About</li>
                        <li onClick={() => scrollToSection(skillsRef)} className="link">Skills</li>
                        <li onClick={() => scrollToSection(projectsRef)} className="link">Projects</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navigation;