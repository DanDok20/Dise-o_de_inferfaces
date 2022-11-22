import React, {useEffect, useState} from "react";
import "./components/Register.css";
import {Link, useNavigate} from 'react-router-dom';
import {UserAuth} from "./context/AuthContext"
import { async } from "@firebase/util";

function Registration(){
    useEffect(() => {
        document.getElementById("registroLink").firstElementChild.style.background = "rgba(255, 255, 255, 0.584)";
        return () => {
            document.getElementById("registroLink").firstElementChild.style.background = "none";
        };
    });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {addUser} = UserAuth();
    const navigate = useNavigate();

    const signUp = async () => {
        await addUser(email, password).then(navigate('/perfil'));
    }

    return(
        <div className="register-bg">
        <div class="container w-75 bg-primary mt-5 rounded shadow">
            <div class="row align-items-stretch">
                <div class="col glitch-img d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">
                
                </div>
                <div class="col bg-white p-5 rounded-end textual-quirks">
                    <h2 class="fw-bold text-center py-5">¿Listo para ser el profesional de Rainbow Six?</h2>

                    <form onSubmit={signUp}>
                        <div class="mb-4">
                            <label for="email" class="form-label">CORREO DE USUARIO</label>
                            <input type="email" class="form-control" name="email" onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div class="mb-4">
                            <label for="email" class="form-label">NOMBRE DE USUARIO</label>
                            <input type="name" class="form-control" name="name"></input>
                        </div>
                        <div class="mb-4">
                            <label for="password" class="form-label">CONTRASEÑA</label>
                            <input type="password" class="form-control" name="password" onChange={(e) => setPassword(e.target.value)}></input>
                        </div>

                        <div class="d-grid">
                            <button class="btn btn-primary w-100">Registrate</button>
                        </div>
                        
                        <div class="text-center my-3">
                            <span>Ya tienes una cuenta?<Link to='/login'><a href="#">Ingresa aquí</a></Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Registration;