import React from "react";
import './components/Map.css'
import {Link} from 'react-router-dom'


function Map(props) {
    return (
        <div className="card text-center" >

            <div className="overflow">
                <Link to={props.title}><a><img src ={props.imageSource} alt="Imagen" className="card-img-top"/></a></Link>
            </div>
            
            <div className="card-body">
                <h4 className="card-title">{props.title.replace("-", " ")}</h4>
            </div>
        </div>
    )
}

export default Map