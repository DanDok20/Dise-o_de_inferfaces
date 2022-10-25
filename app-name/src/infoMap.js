import React from "react";
import './components/infoMap.css';

function infoMap(props) {
    return (
        <div className="map" >
            <image src={props.imageSource} alt={props.name} className="mapPhoto"/>
            <div className="information">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
            <div className="planos">
                <h1>Planos del Mapa</h1>
                <image src={props.imageSourcePlanos} alt="Planos" className="blueprints"></image>
            </div>
        </div>
    )
}

export default infoMap