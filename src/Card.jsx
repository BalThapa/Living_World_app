import React from "react";
import "./Card.css";


const Card = (props) => {
     
     
    return (
        <div className="cards">
            <img src={`https://source.unsplash.com/500x400/?${props.name}`} alt={props.name} />
                <button onClick={props.removeCard} className="close">X</button>
                <h3>{props.name}</h3>
            <div className="likeContainer">
                <button onClick={props.addLikes} className="btn">+</button>
                {props.likes >= 0 ? <p className="likes"> ❤️ {props.likes} </p>:<p className="likes">💔{props.likes}</p>}
                <button onClick={props.removeLikes} className="btn">-</button>
            </div>   
                
               
                
               
                
           
        </div>
       
    );
};

export default Card;