import React from "react";
import './components/infoAgent.css';

function infoAgent() {
    return (
        <div className="agent" >
            <image src="src\agents\agent1.jpg" alt="Agente"className="agentPhoto"/>
            <div className="information">
                <h2>GRIM</h2>
                <p>Cuando crecía en Jurong Singapur, resultaba habitual encontrarse a Keng Boon en la selva, poniendo a prueba las habilidades de supervivencia que le enseñaba su padre. Con 18 años realizó su servicio militar, destacando en la NDU la unidad de élite de las fuerzas navales especiales de Singapur. Keng Boon fue un alumno excelente en la Escuela de Submarinistas FMS, y gracias a su concentración y resistencia completó el entrenamiento y pasó a formar parte del Grupo de Desminado Submarino CDG.</p>
            </div>            
        </div>
    )
}

export default infoAgent;