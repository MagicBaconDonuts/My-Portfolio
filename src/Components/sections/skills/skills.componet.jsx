import { forwardRef } from 'react';
import html from '../../images/html.png';
import css from '../../images/css3.png';
import javascript from '../../images/javascript.png';
import java from '../../images/java.png';
import springBoot from '../../images/springboot.png';
import springSecurity from '../../images/springsecruity.png';
import react from '../../images/react.png';
import mysql from '../../images//mysql.png';
import hibernate from '../../images/hibernate.png';
import maven from '../../images/maven.png';
import firebase from '../../images/firebase.png'
import './skills.css';

const Skills = forwardRef((props, ref) => {
    return(
        <div className='skills section' ref={ref} >
            <div className="section-skills">
                Skills
            </div>
            <div className='skills-list'>
                <div className='mi-1'>
                    <img src={html} className='format' alt='html icon'></img>
                </div>
                <div className='mi-1'>
                    <img src={css} className='format' alt='css icon'></img>
                </div>
                <div className='mi-1'>
                    <img src={javascript} className='format' alt='javascript icon'></img>
                </div>
                <div className='mi-1'>
                    <img src={react} className='format' alt='react icon'></img>
                </div>
                <div className='mi-1'>
                    <img src={firebase} className='format' alt='firebase icon'></img>
                </div>
                <div className='mi-1'>
                    <img src={java} className='format' alt='java icon'></img>
                </div>
                <div className='mi-1'>
                    <img src={springBoot} className='format' alt='springboot icon'></img>
                </div>
                <div className='mi-1'>
                    <img src={springSecurity} className='format' alt='spring security icon'></img>
                </div>
                <div className='mi-1'>
                    <img src={mysql} className='format' alt='MySQL icon'></img>
                </div>
                <div className='mi-1'>
                    <img src={hibernate} className='format' alt='hibernate icon'></img>
                </div>
                <div className='mi-1'>
                    <img src={maven} className='format' alt='maven icon'></img>
                </div>
            </div>
        </div>
    )
});

export default Skills;