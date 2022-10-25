import React from "react";
import './components/Foro.css';

function infoMap(props) {
    return (
        <div className="post" >
            <image src={props.imageSource} alt={props.name} className="userPhoto"/>
            <div className="information">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <div className="like">
                <div className="like">50</div>
                <div className="dislike">50</div>
            </div>
        </div>
    )
}

export default infoMap