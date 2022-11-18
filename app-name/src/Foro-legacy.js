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
        <div>
            <div className="post" >
                <img src="/agents/agent1.jpg" alt="user"className="userPhoto" width="100%" height="100%"></img>
                <div className="information">
                    <h2>Lorem ipsu!</h2>
                    <p>Jadwo dawoe djas dakew<br/>Jodwowkd! dieha Ndiwde cnciac</p>
                </div>
                <div className="rate">
                    <div className="like"></div>
                    <div className="dislike"></div>
                </div>
            </div>
            <div className="post" >
                <img src="/agents/agent1.jpg" alt="user"className="userPhoto" width="100%" height="100%"></img>
                <div className="information">
                    <h2>Lorem ipsu rataka Kiwxcs?</h2>
                    <p>Jadwo dawoe djas dakedwi idwa mdaeolk Jaka!<br/>Hua jies Iksd sas,ieha Ndiwde cnciac</p>
                </div>
                <div className="rate">
                    <div className="like"></div>
                    <div className="dislike"></div>
                </div>
            </div>
            <div className="post" >
                <img src="/agents/agent1.jpg" alt="user"className="userPhoto" width="100%" height="100%"></img>
                <div className="information">
                    <h2>Yhawja Juw xcal!! Knase? Dasescm...</h2>
                    <p>Jadwo dawoe djas dakew<br/>Jodwowkd! dieha Ndiwde cnciac</p>
                </div>
                <div className="rate">
                    <div className="like"></div>
                    <div className="dislike"></div>
                </div>
            </div>
        </div>
    )
}

export default Foro