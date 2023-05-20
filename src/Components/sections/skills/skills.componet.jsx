import { forwardRef } from 'react';
import './skills.css';

const Skills = forwardRef((props, ref) => {
    return(
        <div className='skills section-set' ref={ref} >
            <div className="section">
                Skills
            </div>
            {/* <div>
                <ul>
                <li><img src={java} className='linked-in-icon'></img></li>
                <li><img src={linkedIn} className='linked-in-icon'></img></li>
                <li><img src={linkedIn} className='linked-in-icon'></img></li>
                <li><img src={linkedIn} className='linked-in-icon'></img></li>
                </ul>
            </div> */}
        </div>
    )
});

export default Skills;