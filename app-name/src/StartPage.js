import React, {useEffect} from "react";
import "./components/StartPage.css";
import {Link} from 'react-router-dom'

function StartPage() {
<<<<<<< HEAD
  useEffect(() => {
    document.getElementById("inicioLink").firstElementChild.style.background = "rgba(255, 255, 255, 0.584)";
    return () => {
        document.getElementById("inicioLink").firstElementChild.style.background = "none";
    };
  });
=======
>>>>>>> 3e9e73edea03afc323e0aae84440dce1ac40e6e5
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
    </div>
    <div class="carousel-item">
      <img src="Inicio/B.jpg" class="d-block w-100" alt="imagen"></img>
    </div>
    <div class="carousel-item">
      <img src="Inicio/C.jpg" class="d-block w-100" alt="imagen"></img>
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