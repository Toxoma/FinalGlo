"use strict";

const consultation = () => {
  let btns = document.querySelectorAll('button');
  btns = [...btns].filter(btn=>btn.textContent.toLowerCase()==='проконсультироваться');

  const popupConsultation = document.querySelector('.popup-consultation');

  const clickOut=(e)=>{
    if (!e.target.closest('.feedback-wrap') || e.target.closest('.close')) {
      popupConsultation.style.visibility = 'hidden';
      document.removeEventListener('click',clickOut);
    }
  };

  btns.forEach(btn=>btn.addEventListener('click',()=>{
    popupConsultation.style.visibility= 'visible';
    setTimeout(() => {
      document.addEventListener('click',clickOut);
    }, 100);
  }));
};

export default consultation;
