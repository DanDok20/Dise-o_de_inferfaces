import React from "react";
import "./components/Register.css";
import {Link} from 'react-router-dom'

function Registration(){
    const title1Details = {
        marginTop: 20,
        marginLeft: -350,
        textAlign: 'center',
        fontFamily: 'monospace',
        color: 'black',
        fontSize: 50,
    };
    const belowTitle1 = {
        textAlign: 'center',
        marginTop: 24,
        marginLeft: -345,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 25,
    };
    const inputDescriptions = { 
        textAlign: 'left',
        marginTop: 10,
        marginLeft: -193, 
        fontFamily: 'Helvetica Light',
        fontSize: 20,
        display: 'block',
    };
    return(
        <div className="Registration">
            <div className="RegisterPage left">
                <div className="iframe_logon_icon">
                    <img src={"https://i.ibb.co/hYBFvMR/login-logo.gif"} width="100%" alt="Glitch"></img>
                </div>
            </div>
            
            <div className="RegisterPage right">
                <div className="prompt">
                    <h1 style={title1Details}> ¿Listo para ser <br></br> el profesional <br></br> de Rainbow Six? </h1>
                    <p style={belowTitle1}> Registrate ya! </p>
                    <form>
                        <label style={inputDescriptions}> CORREO <br></br> </label>
                        <input className="login-input" type="text"></input>
                        <label style={inputDescriptions}> NOMBRE DE USUARIO <br></br> </label>
                        <input className="login-input" type="text"></input>
                        <label style={inputDescriptions}> CONTRASEÑA <br></br> </label>
                        <input className="login-input" type="password"></input>
                    </form>
                    <Link to='/'>
                        <registerButtonV2> REGISTRATE </registerButtonV2>
                    </Link>

                    <Link to='/login'>
                        <a className="ifUserAlreadyHasAnAccount"> Ya tienes una cuenta? Ingresa aquí </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Registration;