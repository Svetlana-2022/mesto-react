import React from 'react';
import { api } from '../utils/api';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';



function App() {
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isImegePopupOpen, setImegePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);
    

    React.useEffect(() => {
        api.getInitialCards().then((resCard) => {
            setCards(resCard);
        }).catch(err => console.log(err));
    }, [])

    function handleCardLike(card) {
        console.log(card);
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        if (!isLiked) {
            api.likeCard(card._id).then((newCard) => {
                setCards(cards.map((c) => c._id === card._id ? newCard : c));  
            }).catch(err => console.log(err));
        } else{
            api.inLikeCard(card._id).then((newCard) => {
                setCards(cards.map((c) => c._id === card._id ? newCard : c));
            }).catch(err => console.log(err));
        }
        
    
    }
    function handleCardDelete(card) {
        console.log(card._id);
        api.deleteCard(card._id).then(() => {
            setCards(cards.filter((c) => c._id !== card._id));
        }).catch(err => console.log(err));
    }

    React.useEffect(() => {
        api.getUserInfo().then((resUser) => {
            setCurrentUser(resUser);
        }).catch(err => console.log(err));
    }, [])
    
    function closeAllPopups() {
         setEditAvatarPopupOpen(false);
         setEditProfilePopupOpen(false);
         setAddPlacePopupOpen(false);
         setSelectedCard({});
         setImegePopupOpen(false);
    }
    function handleUpdateUser({name, about}) {
        api.updateProfileInfo({ name, about }).then((newUser) => {
            setCurrentUser(newUser); 
        }).catch(err => console.log(err));
        closeAllPopups();
    }
    function handleUpdateAvatar({avatar}) {
        api.updateProfileAvatar({ avatar }).then((newUser) => {
            setCurrentUser(newUser); 
        }).catch(err => console.log(err));
        closeAllPopups();
    }
    function handleAddPlaceSubmit({ name, link }) {
        api.addCard({ name, link }).then((newCard) => {
            setCards([newCard, ...cards]); 
        }).catch(err => console.log(err));
        closeAllPopups();
    }
     
  return (
    <CurrentUserContext.Provider value={currentUser}>
        <Header/>
        <Main
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        onEditAvatar={
            function handleEditAvatarClick() {
                setEditAvatarPopupOpen(true);
            }
        }
        onEditProfile={
            function handleEditProfileClick() {
                setEditProfilePopupOpen(true);
            }
        }
        onAddPlace={
            function handleAddPlaceClick() {
                setAddPlacePopupOpen(true);
            }
        }
        onCardClick={
            function handleCardClick(card) {
                setSelectedCard(card);
                setImegePopupOpen(true);
            }
        }
        />
        <Footer/>
        <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
        <AddPlacePopup onAddPlace={handleAddPlaceSubmit} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
        
        <ImagePopup card={selectedCard}  onClose={
            function handleCloseClick() {
                closeAllPopups();
            }}
            isOpen={isImegePopupOpen}
        />
        <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
    </CurrentUserContext.Provider>
  );
}

export default App;
