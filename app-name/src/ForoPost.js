import React, {useEffect} from "react";
import { useLocation } from 'react-router-dom';
import './components/foroPost.css';

function InfoForo() {
    useEffect(() => {
        document.getElementById("foroLink").firstElementChild.style.background = "rgba(255, 255, 255, 0.584)";
        return () => {
            document.getElementById("foroLink").firstElementChild.style.background = "none";
        };
    });

    const postNumber = useLocation();
    switch (postNumber.pathname){
        case '/foro/post-1':
            return(                 
                <div className="foro">
                    <div className="container mt-5">
                        <div className="card mb-5">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="/Foro/A.jpg" className="img-fluid" alt="user"></img>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="card-title mt-2 text-center"> Titulo </h3>
                                        <p className="mx-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at animi unde, et, obcaecati eius.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at animi unde, et, obcaecati eius.
                                    </p>
                                </div>
                                <div className="col-md-2 my-2">
                                    <div className="mx-auto like"/>
                                    <div className="mx-auto dislike"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );

        case '/foro/post-2':
            return(
                <div className="foro">
                    <div className="container mt-5">
                        <div className="card mb-5">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="/Foro/B.jpg" className="img-fluid" alt="user"></img>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="card-title mt-2 text-center"> Titulo </h3>
                                        <p className="mx-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at animi unde, et, obcaecati eius.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at animi unde, et, obcaecati eius.
                                    </p>
                                </div>
                                <div className="col-md-2 my-2">
                                    <div className="mx-auto like"/>
                                    <div className="mx-auto dislike"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );

        case '/foro/post-3':
            return(
                <div className="foro">
                    <div className="container mt-5">
                        <div className="card mb-5">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="/Foro/C.jpg" className="img-fluid" alt="user"></img>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="card-title mt-2 text-center"> Titulo </h3>
                                        <p className="mx-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at animi unde, et, obcaecati eius.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at animi unde, et, obcaecati eius.
                                    </p>
                                </div>
                                <div className="col-md-2 my-2">
                                    <div className="mx-auto like"/>
                                    <div className="mx-auto dislike"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );

        case '/foro/post-4':
            return(
                <div className="foro">
                    <div className="container mt-5">
                        <div className="card mb-5">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="/Foro/D.jpg" className="img-fluid" alt="user"></img>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="card-title mt-2 text-center"> Titulo </h3>
                                        <p className="mx-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at animi unde, et, obcaecati eius.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at animi unde, et, obcaecati eius.
                                    </p>
                                </div>
                                <div className="col-md-2 my-2">
                                    <div className="mx-auto like"/>
                                    <div className="mx-auto dislike"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );

        case '/foro/post-5':
            return(
                <div className="foro">
                    <div className="container mt-5">
                        <div className="card mb-5">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="/Foro/E.jpg" className="img-fluid" alt="user"></img>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="card-title mt-2 text-center"> Titulo </h3>
                                        <p className="mx-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at animi unde, et, obcaecati eius.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at animi unde, et, obcaecati eius.
                                    </p>
                                </div>
                                <div className="col-md-2 my-2">
                                    <div className="mx-auto like"/>
                                    <div className="mx-auto dislike"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );

        case '/foro/post-6':
            return(
                <div className="foro">
                    <div className="container mt-5">
                        <div className="card mb-5">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="/Foro/F.jpg" className="img-fluid" alt="user"></img>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="card-title mt-2 text-center"> Titulo </h3>
                                        <p className="mx-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at animi unde, et, obcaecati eius.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at animi unde, et, obcaecati eius.
                                    </p>
                                </div>
                                <div className="col-md-2 my-2">
                                    <div className="mx-auto like"/>
                                    <div className="mx-auto dislike"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        
        default:
            return( <div className="foro"></div> );
    };
}

export default InfoForo