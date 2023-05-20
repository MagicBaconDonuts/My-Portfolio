import { forwardRef } from 'react';
const Contact = forwardRef((props, ref) =>{
    return(
        <div className='contact section-set' ref={ref} >
            <div className="section">
                Contact
            </div>
        </div>
    )
});

export default Contact;