"use strict";

const closeAllPopup = (value)=>{
  const menu = document.querySelector('.popup-dialog-menu');
  const closeMenuBurger = document.querySelector('.close-menu');

  const popupRepairTypes = document.querySelector('.popup-repair-types');
  const closeRepairTypes = document.querySelector('.popup-repair-types > .close');

  const popupPrivacy = document.querySelector('.popup-privacy');
  const closePrivacy  = popupPrivacy.querySelector('.close');

  if (value!==menu) {
    closeMenuBurger.click();
  }
  if (value!==popupRepairTypes) {
    closeRepairTypes.click();
  }
  if (value!==popupPrivacy) {
    closePrivacy.click();
  }
};



export default closeAllPopup;
