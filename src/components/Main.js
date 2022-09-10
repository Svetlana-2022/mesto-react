import React from "react";
import { api } from '../utils/api';
import Card from './Card';

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);
    

    React.useEffect(() => {
        api.getUserInfo().then((resUser) => {
            setUserName(resUser.name);
            setUserDescription(resUser.about);
            setUserAvatar(resUser.avatar);
        }).catch(err => console.log(err));
    }, [])

    React.useEffect(() => {
        api.getInitialCards().then((resCard) => {
            console.log('cards--',resCard)
            setCards(resCard);
        }).catch(err => console.log(err));
    }, [])

    const cardCompanents =cards.map((card) => {
        return <Card key={card._id} card={card} onCardClick={props.onCardClick}/>
    });

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__cover">
                    <img type="button" className="profile__avatar" src={userAvatar} alt="Кусто"/>
                    <div type="button" className="profile__hover-avatar" onClick={props.onEditAvatar}></div>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{userName}</h1>
                    <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>
            <section className="groups">
                <ul className="groups__elements">
                    {cardCompanents}
                </ul>
            </section>
        </main>
    );

}

export default Main;