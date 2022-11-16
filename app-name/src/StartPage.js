import React, {useEffect} from "react";
import "./components/StartPage.css";

function StartPage() {
  useEffect(() => {
    document.getElementById("inicioLink").firstElementChild.style.background = "rgba(255, 255, 255, 0.584)";
    return () => {
        document.getElementById("inicioLink").firstElementChild.style.background = "none";
    };
  });
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="Inicio/A.jpg" class="d-block w-100" alt="imagen" ></img>
      <div class="carousel-caption d-none d-md-block">
        <h1><b>Te encanta Rainbow Six?</b></h1>
        <p>Hoy es tu dia de suerte! Has encontrado la mejor pagina para compartir, educarte y sacarle provecho al juego.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="Inicio/B.jpg" class="d-block w-100" alt="imagen"></img>
      <div class="carousel-caption d-none d-md-block">
        <h1><b>Cansado de perder?</b></h1>
        <p>Aqui podras encontrar gran variedad de informacion sobre el juego tanto como estrategias y datos que te puedan no solo interesar sino tambien ayudar.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="Inicio/C.jpg" class="d-block w-100" alt="imagen"></img>
      <div class="carousel-caption d-none d-md-block">
        <h1><b>Nadie con quien jugar?</b></h1>
        <p>Tenemos la solucion! Contamos con una gran comunidad en la que no solo se comparten estrategias de juego, sino que tambien promovemos los torneos y colaboracion entre usuarios. Podras encontrar eventos populares que se aproximan y ver en nuestros foros quien esta dispuesto a unirse a tu partida.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  );
}

export default StartPage;