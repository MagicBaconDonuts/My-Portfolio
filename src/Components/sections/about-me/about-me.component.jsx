import { forwardRef } from 'react';
import linkedIn from '../../images/linkedIn.png';
import './about-me.css';

const AboutMe = forwardRef((props, ref) => {

    return(
    <div className='about' ref={ref} >
        <div className='about-me'>
            <span className='name'>Ricardo Alatorre</span>
            <span className='text-info text-color '>Hello I'm Ricardo Alatorre I became a full-stack Java and React Developer.
             Pushing to learn for more. Either trying to learn something new or improve on what I currently know. 
             Coding is my passion so no matter what i'll always do it. :)</span>
            <span className='about-me-view'>
                <span className='text-color'>View My Linked-In </span>
                <a href='https://www.linkedin.com/in/ricardo-alatorre-a12a78232/'>
                    <img src={linkedIn} alt='linked-in icon' className='linked-in-icon'/> 
                </a>
            </span>
        </div>
    </div>
    )
});

export default AboutMe;