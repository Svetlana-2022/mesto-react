const formSettings = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit-button',
    inactiveButtonClass: 'form__submit-button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
}
const popupForEdit = document.querySelector('.popup_for_edit');
//const formElementForEdit = popupForEdit.querySelector('.form_for_edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const popupForCard = document.querySelector('.popup_for_card');
//const formElementForCard = popupForCard.querySelector('.form_for_card');
const avatar = document.querySelector('.profile__hover-avatar');
const popupForAvatar = document.querySelector('.popup_for_avatar');
//const formElementForAvatar = popupForAvatar.querySelector('.form_for_avatar');
  
const config = {
    url: 'https://mesto.nomoreparties.co/v1/cohort-46/',
    headers: {
      authorization: '30876ae6-9c71-4f9d-a726-3e14bc235ea6',
      'Content-Type': 'application/json'
    }
}

export {
    formSettings, 
    popupForEdit,
    //formElementForEdit,
    profileEditButton,
    profileAddButton,
    popupForCard,
    //formElementForCard,
    avatar,
    popupForAvatar,
    //formElementForAvatar,
    config
};