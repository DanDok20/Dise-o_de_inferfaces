import {Link} from "react-router-dom";
import "./components/NotFound.css"

function NotFoundMessage() {
    return (
        <div className="Custom404">
            <div id="text_bg">
            <h1>404</h1>
            <h1>Que extraño...</h1> <br/><br/>
                <p id="error_text_format">
                    Parece que acá debería haber existido algo, pero no encontramos nada.<br/> 
                    Intentalo de nuevo, o regresa a la pagina principal.<br/>
                    <img src="broken_gun.png" alt="ErrorGun"></img><br/>
                    <Link to='/'>
                    <button type="button" class="btn btn-outline-light btn-lg">Volver</button>
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default NotFoundMessage