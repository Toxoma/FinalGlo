"use strict";

const privacyLinks = ()=>{
  const links = document.querySelectorAll('.link-privacy');
  const popupPrivacy = document.querySelector('.popup-privacy');
  const close  = popupPrivacy.querySelector('.close');

  links.forEach(link=>link.addEventListener('click',()=>{
    popupPrivacy.style.visibility =  'visible';
  }));

  close.addEventListener('click',()=>{
    popupPrivacy.style.visibility =  'hidden';
  });
};

export default privacyLinks;
