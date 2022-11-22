import { async } from "@firebase/util";
import React from "react";
import { useNavigate } from "react-router-dom";
import {UserAuth} from './context/AuthContext'

function Perfil(){
    const {user, logout} = UserAuth();
    const navigate = useNavigate();

    const connectionEnder = async() => {
        await logout().then(navigate('/'));
    }
    return(
        <div style={{width:500, height:400}}>
            <h2 style={{color: "white"}}>{user && user.email}</h2>
            <button onClick={connectionEnder} style={{width:200, height:100}}>Log out</button>
        </div>
    )
}

export default Perfil;