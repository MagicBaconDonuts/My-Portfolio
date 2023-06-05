import { forwardRef } from 'react';
import usersChat from '../../images/userschatting.png';
import videoGamReview from '../../images/videogamereview.png'
import placeholder from '../../images/placeholder.png';
import './projects.css';

const Projects = forwardRef((props, ref) => {
    return(
        <div className='projects section-set' ref={ref} >
            <div className="section">
                Projects
            </div>
            <div className='project-list'>
                <div className='fp1'>
                    <img src={usersChat} className='format-picture' alt='Two users chatting icon'></img>
                    <span className='format-text fm1'>Chat System</span>
                    <span className='format-text fm2'>Java Backend Project</span>
                </div>
                <div className='fp1'>
                    <img src={videoGamReview} className='format-picture' alt='video game review app'></img>
                    <span className='format-text fm1'>Video Game Review</span>
                    <span className='format-text fm2'>Full Stack Java Project</span>
                </div>
                <div className='fp1'>
                    <img src={placeholder} className='format-picture' alt='placeholder'></img>
                    <span className='format-text fm1'>placeholder</span>
                    <span className='format-text fm2'>placeholder</span>
                </div>
                <div className='fp1'>
                    <img src={placeholder} className='format-picture' alt='video game review app'></img>
                    <span className='format-text fm1'>placeholder</span>
                    <span className='format-text fm2'>placeholder</span>
                </div>
                <div className='fp1'>
                    <img src={placeholder} className='format-picture' alt='placeholder'></img>
                    <span className='format-text fm1'>placeholder</span>
                    <span className='format-text fm2'>placeholder</span>
                </div>
            </div>
        </div>
    );
});

export default Projects;