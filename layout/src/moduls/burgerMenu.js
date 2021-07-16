"use strict";

const burgerMenu = ()=>{
  const icon = document.querySelector('.menu__icon');

  const footer = document.querySelector('.footer');
  const menuFooter  = footer.querySelector('.menu');
  const menuFooterIcon  = menuFooter.querySelector('.menu__icon');

  const menu = document.querySelector('.popup-dialog-menu');
  const closeMenu = document.querySelector('.close-menu');

  const arrIcons = [menuFooterIcon,icon];

  menuFooter.style.display = 'block';

  const outsideClick = (e)=>{
    const target = e.target;

    if (target.closest('.popup-dialog-menu') && target!==closeMenu) {
      return;
    }

    document.removeEventListener('click',outsideClick);
    closeMenu.click();
  };

  const appear = ()=>{
    menu.style.transition = '1s';
    menu.style.transform = 'translateX(0px)';

    setTimeout(()=>{
      document.addEventListener('click',outsideClick);
    },100);
  };

  const disappear = ()=>{

    let cord = 'X',
    value = '100%';

    if (window.outerWidth<576) {
      cord = 'Y';
      value = '-100%';
    }

    menu.style.transform = `translate${cord}(${value})`;
  };

  arrIcons.forEach(item=>item.addEventListener('click',appear));

  // icon.addEventListener('click',appear);
  closeMenu.addEventListener('click',disappear);

  window.addEventListener('resize',()=>{
    menu.style.transition = '0s';
    if (window.outerWidth<576) {
      menu.style.transform= 'translate3d(0,-100%,0)';
    }else{
      menu.style.transform= 'translate3d(100%,0,0)';
    }

    if (window.outerWidth<1024){

    }
  });

};

export default burgerMenu;
