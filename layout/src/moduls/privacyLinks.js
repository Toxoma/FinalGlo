"use strict";
import closeAllPopup from './closeAllPopup.js';

const privacyLinks = ()=>{
  const links = document.querySelectorAll('.link-privacy');
  const popupPrivacy = document.querySelector('.popup-privacy');

  const clickOut=(e)=>{
    if (!e.target.closest('.popup-dialog-privacy') || e.target.closest('.close')) {
      popupPrivacy.style.visibility = 'hidden';
      document.removeEventListener('click',clickOut);
    }
  };

  links.forEach(link=>link.addEventListener('click',()=>{
    popupPrivacy.style.visibility =  'visible';
    closeAllPopup(popupPrivacy);
    setTimeout(() => {
      document.addEventListener('click',clickOut);
    }, 100);
  }));
};

export default privacyLinks;
