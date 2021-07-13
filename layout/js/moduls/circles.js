"use strict";

const circles = ()=>{
  const formula = document.getElementById('formula');
  const icons = formula.querySelectorAll('.formula-item__icon');


  icons.forEach(icon=>icon.addEventListener('mouseover',(e)=>{
      const popup = icon.querySelector('.formula-item-popup');

      if (popup.matches('.formula-item-popup-06') ||
      popup.matches('.formula-item-popup-02')) {
        const text = popup.querySelector('.rotate');

        text.style.transform = 'rotate(180deg)';
        popup.style.transform = 'translateY(280px) rotate(180deg)';
      }

      if (popup.matches('.formula-item-popup-01') ) {
        const text = popup.querySelector('.rotate');

        text.style.transform = 'rotate(180deg)';
        popup.style.transform = 'translateY(240px) rotate(180deg)';
      }

      popup.style.transition = 'opacity 0.5s ease';
      popup.style.visibility = 'visible';
      popup.style.opacity = 1;
  }));

  icons.forEach(icon=>icon.addEventListener('mouseout',(e)=>{
      const popup = icon.querySelector('.formula-item-popup');

      popup.style.visibility = 'hidden';
      popup.style.opacity = 0;
  }));
};

export default circles;
