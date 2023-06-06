import React from "react";
import close from '../images/close.png';
import './popup.css';

function Popup(props){
    // const project ={project} = props;
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="project-title">{props.project.title}</div>
                <div className="project-description">{props.project.description}</div>
                <div ><a href={props.github} className="github-link">GitHub</a></div>
                <div className="video">{props.video}</div>
                <button className="close-btn" onClick={() => {props.setTrigger(false)}}><img src={close} alt="close button" className="close"></img></button>
                {/* {props.children} */}
            </div>
        </div>
    ) : '';
}

export default Popup;