import React, {useEffect} from "react";
import './components/Foro.css';

function Foro() {
    useEffect(() => {
        document.getElementById("foroLink").firstElementChild.style.background = "rgba(255, 255, 255, 0.584)";
        return () => {
            document.getElementById("foroLink").firstElementChild.style.background = "none";
        };
    });
    return (
    <div className="foro">
        <div className="container mt-5">

        <div className="card">
            <div className="row">
                <div className="col-md-4">
                    <img src="/Foro/A.jpg" className="img-fluid"></img>
                </div>
                <div className="col-md-8">
                    <h3 className="card-title mt-2"> Titulo </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at animi unde, et, obcaecati eius.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at animi unde, et, obcaecati eius.
                    </p>
                    <button class="btn btn-primary">Leer mas</button>
                    <br></br><br></br>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="row">
                <div className="col-md-4">
                    <img src="/Foro/B.jpg" className="img-fluid"></img>
                </div>
                <div className="col-md-8">
                    <h3 className="card-title mt-3"> Titulo </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at animi unde, et, obcaecati eius.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at animi unde, et, obcaecati eius.
                    </p>
                    <button class="btn btn-primary">Leer mas</button>
                    <br></br><br></br>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="row">
                <div className="col-md-4">
                    <img src="/Foro/C.jpg" className="img-fluid"></img>
                </div>
                <div className="col-md-8">
                    <h3 className="card-title mt-3"> Titulo </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at animi unde, et, obcaecati eius.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at animi unde, et, obcaecati eius.
                    </p>
                    <button class="btn btn-primary">Leer mas</button>
                    <br></br><br></br>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="row">
                <div className="col-md-4">
                    <img src="/Foro/D.jpg" className="img-fluid"></img>
                </div>
                <div className="col-md-8">
                    <h3 className="card-title mt-3"> Titulo </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at animi unde, et, obcaecati eius.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at animi unde, et, obcaecati eius.
                    </p>
                    <button class="btn btn-primary">Leer mas</button>
                    <br></br><br></br>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="row">
                <div className="col-md-4">
                    <img src="/Foro/E.jpg" className="img-fluid"></img>
                </div>
                <div className="col-md-8">
                    <h3 className="card-title mt-3"> Titulo </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at animi unde, et, obcaecati eius.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at animi unde, et, obcaecati eius.
                    </p>
                    <button class="btn btn-primary">Leer mas</button>
                    <br></br><br></br>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="row">
                <div className="col-md-4">
                    <img src="/Foro/F.jpg" className="img-fluid"></img>
                </div>
                <div className="col-md-8">
                    <h3 className="card-title mt-3"> Titulo </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at animi unde, et, obcaecati eius.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at animi unde, et, obcaecati eius.
                    </p>
                    <button class="btn btn-primary">Leer mas</button>
                    <br></br><br></br>
                </div>
            </div>
        </div>

        </div>
        <br></br><br></br><br></br><br></br>
    </div>


    )
}

export default Foro