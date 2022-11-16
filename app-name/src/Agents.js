import React, {useEffect} from "react";
import Agent from "./Agent";
import './components/Agents.css'
import {connect} from "react-redux"

function Agents({ atacantes, defensores }) {
    useEffect(() => {
        document.getElementById("agentesLink").firstElementChild.style.background = "rgba(255, 255, 255, 0.584)";
        return () => {
            document.getElementById("agentesLink").firstElementChild.style.background = "none";
        };
    });
        return (
        <div className="Agents">
            <div className="Titulo1"><h1 className="text-center" id="Titulo">Atacantes</h1></div>
            <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="row"> 
                    {
                        atacantes.map( (atacantes) => (
                            <div className="col-md-3" key={atacantes.id}>
                                <Agent name={atacantes.name} imageSource={atacantes.image} url={atacantes.url}/>
                            </div>                           
                        ))
                    }
                </div>
            </div>
            <div className="Titulo2"><h1 className="text-center" id="Titulo">Defensores</h1></div>
            <hr></hr>
            <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="row"> 
                    {
                        defensores.map( (defensores) => (
                            <div className="col-md-3" key={defensores.id}>
                                <Agent name={defensores.name} imageSource={defensores.image} url={defensores.url}/>
                            </div>                           
                        ))
                    }
                </div>
            </div>
            <br></br><br></br><br></br><br></br>
        </div>

    )
}

const mapStateToProps = (state) =>{
    return{
        atacantes: state.agent.Atacantes,
        defensores: state.agent.Defensores
    }
}

export default connect(mapStateToProps)(Agents)