"use strict";
import closeAllPopup from './closeAllPopup.js';

const privacyLinks = ()=>{
  const links = document.querySelectorAll('.link-privacy');
  const popupPrivacy = document.querySelector('.popup-privacy');
  const close  = popupPrivacy.querySelector('.close');

  links.forEach(link=>link.addEventListener('click',()=>{
    popupPrivacy.style.visibility =  'visible';
    closeAllPopup(popupPrivacy);
  }));

  close.addEventListener('click',()=>{
    popupPrivacy.style.visibility =  'hidden';
  });
};

export default privacyLinks;
