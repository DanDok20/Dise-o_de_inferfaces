import {Link} from "react-router-dom";
import "./components/NotFound.css"

function NotFoundMessage() {
    return (
<div class="testimonial-area">
<div class="container">
    <div class="row text-white">
        <div class="col-sm-12">
            <div class="section-header text-white">
                <h1 className='text-center'>Que extraño...</h1>
                <p className="text-white" id="error_text_format">
                    Parece que acá debería haber existido algo, pero no encontramos nada.<br/> 
                    Intentalo de nuevo, o regresa a la pagina principal.<br/>

                    <img src="/broken_gun.png" alt="ErrorGun"></img><br/>
                </p>
            </div>
            
            <Link to="/">
                <button type="submit" class="btn btn-primary">Volver</button>
            </Link>
        </div>
    </div>
</div>
<br/><br/><br/><br/><br/>
</div>
        
    );
}

export default NotFoundMessage