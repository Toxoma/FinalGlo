"use strict";

const burgerMenu = ()=>{
  const icon = document.querySelector('.menu__icon');
  const menu = document.querySelector('.popup-dialog-menu');
  const closeMenu = document.querySelector('.close-menu');

  const appear = ()=>{
    menu.style.transform = 'translateX(0px)';
  };
  const disappear = ()=>{
    menu.style.transform = 'translateX(645px)';
  };


  icon.addEventListener('click',appear);
  closeMenu.addEventListener('click',disappear);
};

export default burgerMenu;
