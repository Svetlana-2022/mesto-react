import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isImegePopupOpen, setImegePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    
    function closeAllPopups() {
         setEditAvatarPopupOpen(false);
         setEditProfilePopupOpen(false);
         setAddPlacePopupOpen(false);
         setSelectedCard({});
         setImegePopupOpen(false);
    }
     
  return (
    <>
        <Header/>
        <Main onEditAvatar={
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
        <PopupWithForm title="Редактировать профиль" name="edit" buttonText="Сохранить" isOpen ={isEditProfilePopupOpen} onClose={
            function handleCloseClick() {
                closeAllPopups();
            }
        }>
            <input id="name-input" type="text" className="form__input form__input_type_name" placeholder="Имя" name="nameInput" minLength="2" maxLength="40" required/>
            <span className="form__input-error name-input-error" ></span>
            <input id="name-job" type="text" className="form__input form__input_type_job" placeholder="О себе" name="jobInput" minLength="2" maxLength="200" required/>
            <span className="form__input-error name-job-error"></span>
        </PopupWithForm>
        <PopupWithForm title="Новое место" name="card" buttonText="Создать" isOpen ={isAddPlacePopupOpen} onClose={
            function handleCloseClick() {
                closeAllPopups();
            }
        }>
            <input id="name-card" type="text" className="form__input form__input_type_title" placeholder="Название" name="nameCard" minLength="2" maxLength="30" required/>
            <span className="form__input-error name-card-error"></span>
            <input id="link-card" type="url" className="form__input form__input_type_link" placeholder="Ссылка на картинку" name="linkCard" required/>
            <span className="form__input-error link-card-error"></span> 
        </PopupWithForm>
        <ImagePopup card={selectedCard}  onClose={
            function handleCloseClick() {
                closeAllPopups();
            }}
            isOpen={isImegePopupOpen}
        />
        <PopupWithForm title="Вы уверены?" name="delete" buttonText="Да" />
        <PopupWithForm title="Обновить аватар" name="avatar" buttonText="Сохранить" isOpen ={isEditAvatarPopupOpen} onClose={
            function handleCloseClick() {
                closeAllPopups();
            }
        }>
            <input id="link-avatar" type="url" className="form__input form__input_type_avatar" placeholder="Ссылка на картинку" name="avatar" required/>
            <span className="form__input-error link-avatar-error"></span>
        </PopupWithForm>
        
    </>
  );
}

export default App;
