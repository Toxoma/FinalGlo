"use strict";

const repairTypes = ()=>{
  let currentBlock = 0;
  let currentValue = 0;
  let maxValue = 0;

  const repairTypesWrap = document.querySelector('.repair-types-tab');
  const btns = repairTypesWrap.querySelectorAll('button');
  const repairTypesSliderWrap = document.querySelector('.repair-types-slider-wrap');
  const repairTypesSlider = document.querySelector('.repair-types-slider');
  const repairTypes = document.querySelector('.repair-types-slider').children;
  const arr = [...repairTypes];

  const totalCounter = repairTypesSliderWrap.querySelector('.slider-counter-content__total');
  const currentCounter = repairTypesSliderWrap.querySelector('.slider-counter-content__current');

  const arrowLeft = repairTypesSliderWrap.querySelector('.slider-arrow_left');
  const arrowRight = repairTypesSliderWrap.querySelector('.slider-arrow_right');

  const navListRepair = repairTypesWrap.querySelector('.nav-list-repair');
  const navArrowLeft = repairTypesWrap.querySelector('.nav-arrow_left');
  const navArrowRight = repairTypesWrap.querySelector('.nav-arrow_right');

  let changeWidth=0;
  navArrowLeft.addEventListener('click',()=>{
    if (changeWidth===0) {
      changeWidth=-41;
    }else{
      changeWidth=0;
    }
    navListRepair.style.transform= `translateX(${changeWidth}%)`;
  });

  navArrowRight.addEventListener('click',()=>{
    if (changeWidth===-41) {
      changeWidth=0;
    }else{
      changeWidth=-41;
    }
    navListRepair.style.transform= `translateX(${changeWidth}%)`;
  });




  const check = (i,max)=>{
    let k = i;
    if (k<0) {
      k=max;
    }
    if (k>max) {
      k=0;
    }
    return k;
  };

  let maxSlides = arr[currentBlock].querySelectorAll('.repair-types-slider__slide');

  maxValue = maxSlides.length;
  totalCounter.textContent = maxValue;


  const switchFoto =(value)=>{
    currentCounter.textContent = value+1;
    arr[currentBlock].prepend(maxSlides[value]);
  };

  arrowLeft.addEventListener('click',()=>{
    currentValue = check(--currentValue,maxValue-1);
    switchFoto(currentValue);
  });

  arrowRight.addEventListener('click',()=>{
    currentValue = check(++currentValue,maxValue-1);
    switchFoto(currentValue);
  });

  const removeActive=(value)=>{
    btns.forEach(btn=>{
      if (btn!==value) {
        btn.classList.remove('active');
      }
    });
  };

  for (let i = 0; i < btns.length; i++) {
    btns[i].value = i;
  }

  btns.forEach(btn=>btn.addEventListener('click',()=>{
    btn.classList.add('active');
    removeActive(btn);
    currentBlock = btn.value;
    repairTypesSlider.prepend(arr[currentBlock]);
    maxSlides = arr[currentBlock].querySelectorAll('.repair-types-slider__slide');
    maxValue = maxSlides.length;
    totalCounter.textContent = maxValue;
    currentValue=0;
    switchFoto(currentValue);
  }));
};

export default repairTypes;
