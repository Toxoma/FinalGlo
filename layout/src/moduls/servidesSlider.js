"use strict";

const servidesSlider = () => {
  const wrap = document.querySelector('.services');
  const slider = document.querySelector('.services-slider');
  const slides = slider.querySelectorAll('.services-slider__slide');
  let currentCounter = 0;
  const arrowRight = wrap.querySelector('.slider-arrow_right');
  const arrowLeft = wrap.querySelector('.slider-arrow_left');

  const check = (i,max= slides.length-1)=>{
    let k = i;
    if (k<0) {
      k=max;
    }
    if (k>max) {
      k=0;
    }
    return k;
  };

  const switchFotoMain =()=>{
    slider.style.transform = `translateX(${-100*currentCounter}%)`;
  };

  arrowRight.addEventListener('click', () => {
    currentCounter = check(++currentCounter);
    switchFotoMain();
  });

  arrowLeft.addEventListener('click', () => {
    currentCounter = check(--currentCounter);
    switchFotoMain();
  });

  const style = document.createElement('style');
  style.textContent = `
  .services .slider-arrow{
    visibility: hidden;
  }
  @media (max-width: 575px){
    .services{
      overflow: hidden;
    }
    .services-slider{
      display: flex;
      transition: 1s;
    }
    .services .slider-arrow{
      visibility: visible;
    }
    .services-slider__slide{
      flex: 0 0 100%;
    }
    .services .slider-arrow_left{
      left: 0;
      top: 200px;
    }
    .services .slider-arrow_right{
      right: 0;
      top: 200px;
    }
  }
  `;
  document.querySelector('head').insertAdjacentElement('beforeend',style);
};

export default servidesSlider;
