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



  const check = (i,max= transparencyItems.length-1)=>{
  //   let k = i;
  //   if (k<0) {
  //     k=max;
  //   }
  //   if (k>max) {
  //     k=0;
  //   }
  //   countCurrent.textContent = k+1;
  //   return k;
  };

  // const switchFotoMain =()=>{
  //   transparencySlider.style.transform = `translateX(${-100*currentCounter}%)`;
  // };

  const slider = () => {
  //   arrowRight.addEventListener('click', () => {
  //     currentCounter = check(++currentCounter);
  //     switchFotoMain();
  //   });

  //   arrowLeft.addEventListener('click', () => {
  //     currentCounter = check(--currentCounter);
  //     switchFotoMain();
  //   });
  };
  slider();

  const modal=()=>{
  //   const transparencyRight = document.getElementById('transparency_right');
  //   const transparencyLeft = document.getElementById('transparency_left');
  //   const slider = popupTransparency.querySelector('.popup-transparency-slider');
  //   const slides = slider.querySelectorAll('.popup-transparency-slider__slide');

  //   const switchFoto =()=>{
  //     slider.prepend(slides[currentCounter]);
  //   };

  //   transparencyRight.addEventListener('click', () => {
  //     currentCounter = check(++currentCounter);
  //     switchFoto();
  //   });

  //   transparencyLeft.addEventListener('click', () => {
  //     currentCounter = check(--currentCounter);
  //     switchFoto();
  //   });

  //   transparencyItems.forEach(item=>item.addEventListener('click',()=>{
  //     popupTransparency.style.visibility = 'visible';
  //     switchFoto();
  //     setTimeout(() => {
  //       document.addEventListener('click',clickOut);
  //     }, 100);
  //   }));

  };
  modal();

  // const style = document.createElement('style');
  // style.textContent = `

  // `;
  // document.querySelector('head').insertAdjacentElement('beforeend',style);
};

export default consultation;
