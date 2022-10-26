import React from "react";
import './components/Foro.css';
import agent1 from './agents/agent1.jpg'
import agent2 from './agents/agent2.jpg'
import agent3 from './agents/agent3.jpg'

function Foro() {
    return (
        <div>
            <div className="post" >
                <img src={agent1} alt="user"className="userPhoto" width="100%" height="100%"></img>
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
                <img src={agent2} alt="user"className="userPhoto" width="100%" height="100%"></img>
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
                <img src={agent3} alt="user"className="userPhoto" width="100%" height="100%"></img>
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