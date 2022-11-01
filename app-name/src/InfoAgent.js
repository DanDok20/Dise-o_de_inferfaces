import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import './components/infoAgent.css';

function infoAgent({atacantes, defensores}) {
    const {params} = useParams();
    console.log(useParams());
    var object;
    if ((atacantes.find((agent) => agent.name === params))!==undefined){
        object = atacantes.find((agent) => agent.name === params);
    }
    if ((defensores.find((agent) => agent.name === params))!==undefined){
        object = defensores.find((agent) => agent.name === params);
    }
    return (
        <div className="agent" >
            <image src={object.image} alt={"Agente "+object.name} className="agentPhoto"/>
            <div className="information">
                <h2>{object.name}</h2>
                <p>{object.descripcion}</p>
            </div>            
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        atacantes: state.agent.Atacantes,
        defensores: state.agent.Defensores
    }
}

export default connect(mapStateToProps)(infoAgent);