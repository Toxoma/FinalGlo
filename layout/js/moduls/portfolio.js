"use strict";

const portfolio = ()=>{
  const wrap = document.querySelector('.portfolio-slider-wrap');
  const arrowLeft = wrap.querySelector('.slider-arrow_left-portfolio');
  const arrowRight = wrap.querySelector('.slider-arrow_right-portfolio');
  const slider = wrap.querySelector('.portfolio-slider');
  const row = slider.querySelector('.row-slide');
  const cols = wrap.querySelectorAll('.portfolio-slider__slide');
  const widthWndow = slider.clientWidth;
  const widthElem = cols[0].clientWidth;

  const maxCounter = cols.length - widthWndow/widthElem;
  let counter = 0;

  const check = (i, max=maxCounter)=>{
    let k = i;
    arrowLeft.style.visibility='visible';
    arrowRight.style.visibility='visible';
    if (k<=0) {
      arrowLeft.style.visibility='hidden';
      k=i++;
    }
    if (k>=max) {
      arrowRight.style.visibility='hidden';
      k=i--;
    }
    return k;
  };

  check(counter);

  arrowRight.addEventListener('click',()=>{
    counter = check(++counter);
    row.style.transform= `translateX(-${widthElem*counter}px)`;
  });

  arrowLeft.addEventListener('click',()=>{
    counter = check(--counter);
    row.style.transform= `translateX(-${widthElem*counter}px)`;
  });

    const style = document.createElement('style');
    style.textContent = `
    .row-slide{
       display: flex;
       transition: all 1s ease 0s;
    }
    `;
    document.querySelector('head').insertAdjacentElement('beforeend',style);
};

export default portfolio;
