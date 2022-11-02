import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import './components/infoAgent.css';

function InfoAgent({atacantes, defensores}) {
    const params = useParams();
    var object;
    if ((atacantes.find((agent) => agent.name === params.agentName))!==undefined){
        object = atacantes.find((agent) => agent.name === params.agentName);
    }
    else if ((defensores.find((agent) => agent.name === params.agentName))!==undefined){
        object = defensores.find((agent) => agent.name === params.agentName);
    }
    return (
        <div className="agent" >
            <img src={object.image} alt={"Agente "+object.name} className="agentPhoto"/>
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

export default connect(mapStateToProps)(InfoAgent);