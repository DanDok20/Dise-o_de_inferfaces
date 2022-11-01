import React from "react";
import './components/Agent.css'
import {Link} from "react-router-dom"


function Agent(props) {
    return (
        <div className="card text-center " >

            <div className="overflow">
                <Link to={props.name}><a><img src ={props.imageSource} alt="Imagen" className="card-img-top"/></a></Link>
            </div>
            
            <div className="card-body">
                <h4 className="card-title">{props.name}</h4>
            </div>
        </div>
    )
}

export default Agent