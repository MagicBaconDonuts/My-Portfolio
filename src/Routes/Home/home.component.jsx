import linkedIn from '../../Components/Images/linkedIn.png';
import '../Home/home.css';

const Home = () => {
    return(
    <div className="home-wrapper">
        <div className='about' >
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
        
        <div className='skills section-set'  >
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

        <div className='projects section-set' >
            <div className="section">
                Projects
            </div>
        </div>

        <div className='contact section-set' >
            <div className="section">
                Contact
            </div>
        </div>
    </div>
    )
};

export default Home;