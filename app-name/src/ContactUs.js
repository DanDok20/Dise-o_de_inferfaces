import React, {useEffect} from 'react';
import "./components/ContactUs.css";

function ContactUs() {
    useEffect(() => {
        document.getElementById("contactanosLink").firstElementChild.style.background = "rgba(255, 255, 255, 0.584)";
        return () => {
            document.getElementById("contactanosLink").firstElementChild.style.background = "none";
        };
    });
    return(
      <div className="ContactPage">
          <div class="container-fluid d-flex justify-content-center">
              <div class="row">
                  <div class="col-sm-2 col-md-4 border border-primary text-white bg-dark bg-opacity-75 mt-4">
                      <h1 className="title-details"> Contactanos </h1>
                          <p className="description"> 
                          Nos puedes mandar un mensaje por este medio 
                          para solucionar inquietudes que tengas. 
                          <br/><br/> 
                          O tambien, por si tienes una sugerencia de
                          la pagina, o avistamiento de un bug.
                          <br></br><br></br> El plazo maximo para la respuesta <br></br> será de 48 horas. 
                          </p>
                          <br></br>
                          <p className="developer-info"> hello@reallygreatsite.com </p>
                          <p className="developer-info"> +123-456-7890 </p>
                          <p className="developer-info"> reallygreatsite.com </p>
                          <p className="developer-info"> Cali, Colombia </p>
                  </div>

                  <div class="col-sm-2 col-md-6 text-white mt-4">
                      <p className="question-descriptions" required> Usuario (*)       <input className="question-box-design"></input> </p>
                      <p className="question-descriptions" required> Email (*)         <input className="question-box-design"></input> </p>
                      <p className="question-descriptions"> Breve descripción (*)      <input className="question-box-design"></input> </p>
                      <p className="question-descriptions"> Como supiste de nosotros?  <select className="select-box-design">
                          <option className="blackcolor4optiontext" disabled selected hidden>Elige una opción...</option>
                          <option className="blackcolor4optiontext">Opción N°1</option>
                          <option className="blackcolor4optiontext">Opción N°2</option>
                          <option className="blackcolor4optiontext">Opción N°3</option>
                      </select> </p>
                      <p className="question-descriptions" required> Mensaje (*): <textarea className="message-box-design" placeholder="Escribe tu mensaje aquí..."></textarea> </p>
                  </div>

                  <div class="col-sm-12 col-md-2 mt-8">
                      <sendButton> Enviar </sendButton>
                  </div>
              </div>
          </div>
          
      </div>
  )
}

export default ContactUs;