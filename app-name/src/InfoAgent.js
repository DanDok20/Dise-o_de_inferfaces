import React from "react";
import './components/infoAgent.css';

function infoAgent(props) {
    return (
        <div className="agent" >
            <image src={props.imageSource} alt={props.name} className="agentPhoto"/>
            <div className="information">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>            
        </div>
    )
}

export default infoAgent