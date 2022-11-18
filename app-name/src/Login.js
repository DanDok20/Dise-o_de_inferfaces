import React from "react";
import "./components/Login.css";
import {Link} from 'react-router-dom';

function Login(){
    return(
    <div className="login-bg">
        <div class="container w-75 bg-primary mt-5 rounded shadow">
            <div class="row align-items-stretch">
                <div class="col glitch-img d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">
                
                </div>
                <div class="col bg-white p-5 rounded-end textual-quirks">
                    <h2 class="fw-bold text-center py-5">¿Listo para ser el profesional de Rainbow Six?</h2>

                    <form action="#">
                        <div class="mb-4">
                            <label for="email" class="form-label">USUARIO</label>
                            <input type="email" class="form-control" name="email"></input>
                        </div>
                        <div class="mb-4">
                            <label for="password" class="form-label">CONTRASEÑA</label>
                            <input type="password" class="form-control" name="password"></input>
                        </div>

                        <div class="d-grid">
                            <Link to='/'> <button type="submit" class="btn btn-primary w-100 text-decoration-underline">Login</button> </Link>
                        </div>
                        
                        <div class="d-grid mb-4 my-3">
                            <Link to='/registro'> <button type="submit" class="btn btn-info w-100 text-decoration-underline">Registrate</button> </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Login;