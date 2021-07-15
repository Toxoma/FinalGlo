"use strict";

const feedback = () => {
  const arrowLeft = document.getElementById('reviews-arrow_left');
  const arrowRight = document.getElementById('reviews-arrow_right');
  const slider = document.querySelector('.reviews-slider');
  const slides = slider.querySelectorAll('.reviews-slider__slide');
  let currentCounter = 0;

  const switchFoto =()=>{
    slider.prepend(slides[currentCounter]);
  };

  const check = (i,max=slides.length-1)=>{
    let k = i;
    if (k<0) {
      k=max;
    }
    if (k>max) {
      k=0;
    }
    return k;
  };

  arrowRight.addEventListener('click', () => {
    currentCounter = check(++currentCounter);
    switchFoto();
  });

  arrowLeft.addEventListener('click', () => {
    currentCounter = check(--currentCounter);
    switchFoto();
  });
};

export default feedback;
