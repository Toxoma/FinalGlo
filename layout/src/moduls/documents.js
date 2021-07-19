"use strict";

const documents = () => {
  const sliderWrap = document.querySelector('.transparency-slider-wrap');
  const transparencySlider = sliderWrap.querySelector('.transparency-slider');
  const transparencyItems = document.querySelectorAll('.transparency-item>.transparency-item__img');
  const arrowLeft = document.getElementById('transparency-arrow_left');
  const arrowRight = document.getElementById('transparency-arrow_right');
  const popupTransparency = document.querySelector('.popup-transparency');
  const countCurrent = popupTransparency.querySelector('.slider-counter-content__current');
  const countTotal = popupTransparency.querySelector('.slider-counter-content__total');
  let currentCounter=0;

  countCurrent.textContent = currentCounter+1;
  countTotal.textContent = transparencyItems.length;

  const check = (i,max= transparencyItems.length-1)=>{
    let k = i;
    if (k<0) {
      k=max;
    }
    if (k>max) {
      k=0;
    }
    countCurrent.textContent = k+1;
    return k;
  };

  const switchFotoMain =()=>{
    transparencySlider.style.transform = `translateX(${-100*currentCounter}%)`;
  };

  const slider = () => {
    arrowRight.addEventListener('click', () => {
      currentCounter = check(++currentCounter);
      switchFotoMain();
    });

    arrowLeft.addEventListener('click', () => {
      currentCounter = check(--currentCounter);
      switchFotoMain();
    });
  };
  slider();

  const modal=()=>{
    const transparencyRight = document.getElementById('transparency_right');
    const transparencyLeft = document.getElementById('transparency_left');
    const slider = popupTransparency.querySelector('.popup-transparency-slider');
    const slides = slider.querySelectorAll('.popup-transparency-slider__slide');

    const switchFoto =()=>{
      slider.prepend(slides[currentCounter]);
    };

    transparencyRight.addEventListener('click', () => {
      currentCounter = check(++currentCounter);
      switchFoto();
    });

    transparencyLeft.addEventListener('click', () => {
      currentCounter = check(--currentCounter);
      switchFoto();
    });

    const clickOut=(e)=>{
      if (!e.target.closest('.popup-dialog-transparency') || e.target.closest('.close')) {
        popupTransparency.style.visibility = 'hidden';
        document.removeEventListener('click',clickOut);
        currentCounter = 0;
      }
    };

    transparencyItems.forEach((item,key)=>item.addEventListener('click',()=>{
      popupTransparency.style.visibility = 'visible';
      currentCounter = key;
      switchFoto();
      setTimeout(() => {
        document.addEventListener('click',clickOut);
      }, 100);
    }));

  };
  modal();

  const style = document.createElement('style');
  style.textContent = `
  .transparency-slider-wrap{
    overflow:hidden
  }
  .transparency-slider-wrap .transparency-slider{
    display:flex;
    flex-wrap: nowrap;
    transition: 1s;
  }
  .transparency-item__img:hover{
    box-shadow: 0px 0px 40px #ff00ff;
  }
  .popup-transparency-slider-wrap{
  }
  .popup-transparency-slider{
    display: flex;
  }
  .popup-transparency-slider__slide{
    flex: 0 0 100%;
  }
  `;
  document.querySelector('head').insertAdjacentElement('beforeend',style);
};

export default documents;
