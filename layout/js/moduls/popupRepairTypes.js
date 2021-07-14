"use strict";
import closeAllPopup from './closeAllPopup.js';

const popupRepairTypes = ()=>{
  const linkMenu = document.querySelector('.link-list-menu > a');
  const link = document.querySelector('.repair-types-tab>.link-list>a');
  const arr = [linkMenu,link];
  const popupRepairTypes = document.querySelector('.popup-repair-types');
  const closeBtn = document.querySelector('.popup-repair-types > .close');

  arr.forEach(item=>item.addEventListener('click',()=>{
    popupRepairTypes.style.visibility= 'visible';
    closeAllPopup(popupRepairTypes);
  }));

  closeBtn.addEventListener('click',()=>{
    popupRepairTypes.style.visibility= 'hidden';
  });
};

export default popupRepairTypes;
