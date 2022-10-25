import {Link} from "react-router-dom";
import "./components/NotFound.css"

function NotFoundMessage() {
    return (
        <div className="Custom404">
            <div id="text_bg">
                <h1>Que extraño...</h1> <br/><br/>
                <p id="error_text_format">
                    Parece que acá debería haber existido algo, pero no encontramos nada.<br/> 
                    Intentalo de nuevo, o regresa a la pagina principal.<br/>
                    <Link to='/'>Click aqui!</Link>
                </p>
            </div>
            <div className="broken_gun"><img src="broken_gun.png" alt="ErrorGun"></img></div>
        </div>
    );
}

export default NotFoundMessage