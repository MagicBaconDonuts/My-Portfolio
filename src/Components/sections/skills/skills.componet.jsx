import { forwardRef } from 'react';
import linkedIn from '../../images/linkedIn.png';
import './skills.css';

const Skills = forwardRef((props, ref) => {
    return(
        <div className='skills section-set' ref={ref} >
            <div className="section">
                Skills
            </div>
            {/* <div>
                <ul>
                <li>HTML<img src={linkedIn} className='linked-in-icon'></img></li>
                <li><img src={linkedIn} className='linked-in-icon'></img></li>
                <li><img src={linkedIn} className='linked-in-icon'></img></li>
                <li><img src={linkedIn} className='linked-in-icon'></img></li>
                </ul>
            </div> */}
        </div>
    )
});

export default Skills;