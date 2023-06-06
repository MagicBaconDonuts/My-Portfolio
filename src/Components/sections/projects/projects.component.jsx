import { forwardRef, useState} from 'react';
import Popup from '../../popup/popup.component';
import usersChat from '../../images/userschatting.png';
import videoGamReview from '../../images/videogamereview.png'
import placeholder from '../../images/placeholder.png';
import './projects.css';

const Projects = forwardRef((props, ref) => {
    const [chatButtonPopup, setChatButtonPopup] = useState(false);
    const [videoGameButtonPopup, setVideoGameButtonPopup] = useState(false);
    var chatProject = {
        title: 'Chat System',
        description: "Browser Chat Application. Application is using Java as the backend while using HTML/CSS for the frontend. Database is MySQL to store all the Users, Channels, and Messages being sent. It's meant to be able to talk to users on the local machine."
    };
    var chatSystemVideo = <iframe width="1000" height="562.5" src="https://www.youtube.com/embed/II506AbWZGs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    var githubChatSystem = 'https://github.com/MagicBaconDonuts/ChatSystem';
    
    var videoGameReviewProject = {
        title: 'Video Game Review',
        description: 'Video Game Review App is a Full Stack Java App. Its purpose is to let users be able to review any games they’re playing. So they can give a rating and add a description to even say if the user has completed the game or not.'
    };
    var videoGameReviewVideo = <div></div>;
    var githubVideoGameReview= 'https://github.com/MagicBaconDonuts/VideoGameReview';

    return(
        <div className='projects section-set' ref={ref} >
            <div className="section">
                Projects
            </div>
            <div className='project-list'>
                <div className='fp1'>
                    <Popup trigger={chatButtonPopup} setTrigger={setChatButtonPopup} project={chatProject} video={chatSystemVideo} github={githubChatSystem}/>
                    <a onClick={() => {setChatButtonPopup(true)}}>
                        <img src={usersChat} className='format-picture' alt='Two users chatting icon'></img>
                    </a>
                    <span className='format-text fm1'>Chat System</span>
                    <span className='format-text fm2'>Java Backend Project</span>
                </div>
                <div className='fp1'>
                    <Popup trigger={videoGameButtonPopup} setTrigger={setVideoGameButtonPopup} project={videoGameReviewProject} video={chatSystemVideo} github={githubVideoGameReview}/>
                    <a onClick={() => {setVideoGameButtonPopup(true)}}>
                        <img src={videoGamReview} className='format-picture' alt='video game review app'></img>
                    </a>
                    <span className='format-text fm1'>Video Game Review</span>
                    <span className='format-text fm2'>Full Stack Java Project</span>
                </div>
                <div className='fp1'>
                    <img src={placeholder} className='format-picture' alt='placeholder'></img>
                    <span className='format-text fm1'>placeholder</span>
                    <span className='format-text fm2'>placeholder</span>
                </div>
                <div className='fp1'>
                    <img src={placeholder} className='format-picture' alt='video game review app'></img>
                    <span className='format-text fm1'>placeholder</span>
                    <span className='format-text fm2'>placeholder</span>
                </div>
                <div className='fp1'>
                    <img src={placeholder} className='format-picture' alt='placeholder'></img>
                    <span className='format-text fm1'>placeholder</span>
                    <span className='format-text fm2'>placeholder</span>
                </div>
            </div>
        </div>
    );
});

export default Projects;