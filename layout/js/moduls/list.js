"use strict";

const list = ()=>{
  const arrow = document.querySelector('.header-contacts__arrow');
  const wrap = document.querySelector('.header-contacts__phone-number-wrap');
  const messagers = document.querySelector('.header-contacts__messagers');
  const phone = document.querySelector('.header-contacts__phone-number-accord>a');

  wrap.style.opacity = 0;
  phone.style.opacity = 1;

  const newPhone = phone.cloneNode(true);
  newPhone.textContent = "+7 (987) 654-32-80";
  newPhone.classList.add('hide-block');
  messagers.insertAdjacentElement('beforebegin',newPhone);

  const toggle = (e)=>{
    newPhone.classList.toggle('hide-block');
    arrow.classList.toggle('rotate-block');
  };

  arrow.addEventListener('click',toggle);
};

export default list;
