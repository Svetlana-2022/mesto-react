import React from "react";

function Card (props) {
    function handleClick() {
        props.onCardClick(props.card);
    }
    
    return (
        <li className="element">
            <button type="button" className="element__trash"></button>
            <img className="element__mask-group" src={props.card.link} alt="фото"  onClick={()=>handleClick()}/>
            <div className="element__container">
                <h2 className="element__title">{props.card.name}</h2>
                <div className="element__like-container">
                    <button type="button" className="element__like"></button>
                    <div className="element__like-count"></div>
                </div>
            </div>
        </li>  
    )
}


export default Card;