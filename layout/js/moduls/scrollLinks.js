"use strict";

const scrollLinks = ()=>{
  const links = document.querySelectorAll('.popup-menu-nav__item > .menu-link');
  const buttonFooter = document.querySelectorAll('.button-footer>a');
  const arr = [...links,...buttonFooter];

  arr.forEach(item =>{
    item.addEventListener('click',(e)=>{
      e.preventDefault();

      const blockId = item.getAttribute('href').substr(1);

      document.getElementById(`${blockId}`).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      document.querySelector('.close-menu').click();

    });
  });
};

export default scrollLinks;
