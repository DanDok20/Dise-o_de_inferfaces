import React, {useEffect} from 'react';
import "./components/Contacto.css";


function ContactUs() {
    useEffect(() => {
        document.getElementById("contactanosLink").firstElementChild.style.background = "rgba(255, 255, 255, 0.584)";
        return () => {
            document.getElementById("contactanosLink").firstElementChild.style.background = "none";
        };
    });
    return(
        <div className="form-area">
        <div className="container">
            <div className="row single-form g-0">
                <div className="col-sm-12 col-lg-6">
                    <div className="left text-center">
                        <h2><span>Contactanos</span> <br></br><br></br></h2>
                        <p className='text-white'> 
                          Nos puedes mandar un mensaje por este medio 
                          para solucionar inquietudes que tengas. 
                          <br/><br/> 
                          O tambien, por si tienes una sugerencia de
                          la pagina, o avistamiento de un bug.
                          <br></br><br></br> El plazo maximo para la respuesta <br></br> será de 48 horas. 
                          </p>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                    <div className="right">
                       <i className="fa fa-caret-left"></i>
                        <form>
                          <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Usuario</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                          </div>
                          <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                          </div>
                          <div className="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Mensaje</label>
                              <textarea type="password" class="form-control" id="exampleInputPassword1"></textarea>
                          </div>
                          <button type="submit" class="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <br></br><br></br><br></br><br></br>
    </div>
    )
}

export default ContactUs;