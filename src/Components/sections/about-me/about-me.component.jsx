import { forwardRef } from 'react';
import linkedIn from '../../images/linkedIn.png';
import './about-me.css';

const AboutMe = forwardRef((props, ref) => {
    return(
    <div className='about' ref={ref} >
        <div className="name">
            Ricardo Alatorre
        </div>
        <div className='about-me'>
            Hello I'm Ricardo Alatorre I became a full-stack Java and React Developer. Pushing to learn more conecepts. I love to code I have a massaive passion for it.
        </div>
        <div>
            View My Linked-In
            <img src={linkedIn} alt='linked-in icon' className='linked-in-icon'/>
        </div>
    </div>
    )
});

export default AboutMe;