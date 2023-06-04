import { forwardRef } from 'react';
import html from '../../images/html.png';
import css from '../../images/css3.png';
import javascript from '../../images/javascript.png';
import java from '../../images/java.png';
import springBoot from '../../images/springboot.png';
import springSecurity from '../../images/springsecruity.png';
import react from '../../images/react.png';
import './skills.css';

const Skills = forwardRef((props, ref) => {
    return(
        <div className='skills section-set' ref={ref} >
            <div className="section">
                Skills
            </div>
            <div >
                <ul className='skills-list'>
                <li><img src={html} className='format' alt='html icon'></img></li>
                <li><img src={css} className='format' alt='css icon'></img></li>
                <li><img src={javascript} className='format' alt='javascript icon'></img></li>
                <li><img src={java} className='format' alt='java icon'></img></li>
                <li><img src={springBoot} className='format' alt='springboot icon'></img></li>
                <li><img src={react} className='format' alt='react icon'></img></li>
                <li><img src={springSecurity} className='format' alt='spring security icon'></img></li>
                {/* <li><img src={}></img></li> */}
                </ul>
            </div>
        </div>
    )
});

export default Skills;