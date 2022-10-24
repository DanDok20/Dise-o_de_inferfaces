import React from "react";
import Map from "./Map";
import './components/Maps.css'
import { connect } from 'react-redux'

function Maps({mapas}) {
    return (
        <div className="Maps">
            <div className="Titulo"><h1 className="text-center" id="Titulo">Mapas</h1></div>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="row"> 
                    {
                        mapas.map( (mapas) => (
                            <div className="col-md-3" key={mapas.id}>
                                <Map title={mapas.title} imageSource={mapas.image} url={mapas.url}/>
                            </div>                           
                        ))
                    }
                </div>
                
            </div>
        </div>

    )
}

const mapStateToProps = (state) =>{
    return{
        mapas: state.map.Mapas
    }
}

export default connect(mapStateToProps)(Maps)