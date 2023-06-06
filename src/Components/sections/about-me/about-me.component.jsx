import { forwardRef } from 'react';
import linkedIn from '../../images/linkedin.png';
import github from '../../images/github.png';
import './about-me.css';

const AboutMe = forwardRef((props, ref) => {

    return(
    <div className='about' ref={ref} >
        <div className='about-me'>
            <span className='name'>Ricardo Alatorre</span>
            <span className='title'> Full Stack Java/React Developer</span>
            <span className='text-info text-color '>Hello I'm Ricardo Alatorre I became a full-stack Java and React Developer.
             Pushing to learn for more. Either trying to learn something new or improve on what I currently know. 
             Coding is my passion so no matter what i'll always do it. :)</span>
            <div className='text-contact'>
                Want to know more? 
            </div>
            <div className='about-me-view'>
                <a href='https://www.linkedin.com/in/ricardo-alatorre-a12a78232/'>
                    <img src={linkedIn} alt='linked-in icon' className='icons'/> 
                </a>
                <a href='https://github.com/MagicBaconDonuts'>
                    <img src={github} alt='github icon' className='icons'></img>
                </a>
            </div>
            <span className='email'>Ricardoalatorre89@gmail.com</span>
        </div>
    </div>
    )
});

export default AboutMe;