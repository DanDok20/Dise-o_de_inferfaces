import "./components/Nav.css"
import React from "react";
import {Link} from 'react-router-dom'

function Footer() {
    return(
        <footer>
            <div className = "container-fluid">

                <div className = "row p-5 pb-2 bg-dark text-white">

                    <div className = "col-xs-12 col-md-6 col-lg-3">
                        <p className="h3"> Rainbow Tactics </p>
                        <div className="mb-2">
                            <p className="text-secondary">hello@reallygreatsite.com</p>
                            <p className="text-secondary">+123-456-7890</p>
                            <p className="text-secondary">Cali-Colombia</p>
                        </div>
                        
                    </div>
                    <div className = "col-xs-12 col-md-6 col-lg-3">
                        <p className="h5">Paginas</p>
                        <div className="mb-2">
                            <Link className="text-secondary text-decoration-none" to='/'> Inicio </Link>
                        </div>
                        <div className="mb-2">
                            <Link className="text-secondary text-decoration-none" to='/agentes'> Agentes </Link>
                        </div>
                        <div className="mb-2">
                            <Link className="text-secondary text-decoration-none" to='/mapas'> Mapas </Link>
                        </div>
                        <div className="mb-2">
                            <Link className="text-secondary text-decoration-none" to='/eventos'> Eventos </Link>
                        </div>
                        <div className="mb-2">
                            <Link className="text-secondary text-decoration-none" to='/foro'> Foro </Link>
                        </div>
                        <div className="mb-2">
                            <Link className="text-secondary text-decoration-none" to='/contactanos'> Contactanos </Link>
                        </div>
                        <div className="mb-2">

                        </div>
                    </div >
                    <div className = "col-xs-12 col-md-6 col-lg-3">
                        <p className="h5">Links</p>
                        <div className="mb-2">
                            <Link className="text-secondary text-decoration-none" to='/Terminos'> Terms & Conditions </Link>
                        </div>
                        <div className="mb-2">
                            <Link className="text-secondary text-decoration-none" to='/Privacidad'> Privacy Policy </Link>
                        </div>
                        
                    </div >
                    <div className = "col-xs-12 col-md-6 col-lg-3">
                        <p className="h5">Redes</p>   
                        <div className="mb-2">
                            <a className="text-secondary text-decoration-none" href="https://www.facebook.com/rickroll548/"> Facebook</a>
                        </div>
                        <div className="mb-2">
                            <a className="text-secondary text-decoration-none" href="https://www.instagram.com/rick_astley_memes/?hl=en"> Instagram</a> 
                        </div>
                        <div className="mb-2">
                            <a className="text-secondary text-decoration-none" href="https://twitter.com/search?q=%23Rickroll"> Twitter</a>
                        </div>
                    
                    </div >
                </div>

                <div className="row p-5 pb-2 bg-dark">
                    <p className="text-white text-center">Copyright - All rights reserved © 2022</p>
                </div>

            </div>

        </footer>
    )
}

export default Footer