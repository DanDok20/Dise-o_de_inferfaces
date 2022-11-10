import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import './components/infoMap.css';

function InfoMap({mapas}) {
    const params = useParams();
    const object = mapas.find((map) => map.title === params.mapName);
    return (
        <div className="map">
            <img src={object.image} alt={object.title} className="mapPhoto"/>
            <div className="information">
                <h2>{object.title}</h2>
                <p>{object.description}</p>
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