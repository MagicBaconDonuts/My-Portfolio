import { forwardRef } from 'react';
import './projects.css';

const Projects = forwardRef((props, ref) => {
    return(
        <div className='projects section-set' ref={ref} >
            <div className="section">
                Projects
            </div>
        </div>
    );
});

export default Projects;