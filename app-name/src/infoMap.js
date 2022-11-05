import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import './components/infoMap.css';

function InfoMap({mapas}) {
    //String.replace(" ", "-");
    return (
        <div className="map" >
            <image src="" alt={mapas.title} className="mapPhoto"/>
            <div className="information">
                <h2>{mapas.title}</h2>
                <p>{mapas.description}</p>
            </div>
        </div>
    )
}

const mapStateTomapas = (state) =>{
    return{
        mapas: state.map.Mapas
    }
}

export default connect(mapStateTomapas)(InfoMap);