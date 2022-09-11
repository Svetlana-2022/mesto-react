import React from "react";

function Card ({card, onCardClick}) {
    function handleClick() {
        onCardClick(card);
    }
    
    return (
        <li className="element">
            <button type="button" className="element__trash"></button>
            <img className="element__mask-group" src={card.link} alt={card.name}  onClick={()=>handleClick()}/>
            <div className="element__container">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__like-container">
                    <button type="button" className="element__like"></button>
                    <div className="element__like-count"></div>
                </div>
            </div>
        </li>  
    )
}


export default Card;