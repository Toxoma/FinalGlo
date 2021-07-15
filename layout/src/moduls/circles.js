"use strict";

const circles = ()=>{
  const formula = document.querySelector('#formula');
  const icons = formula.querySelectorAll('.row> .formula-item > .formula-item__icon');
  const allIcons = formula.querySelectorAll('.formula-item > .formula-item__icon');

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

  allIcons.forEach(icon=>icon.addEventListener('mouseout',(e)=>{
      const popup = icon.querySelector('.formula-item-popup');

      popup.style.visibility = 'hidden';
      popup.style.opacity = 0;
  }));

  //slider
  const slider = formula.querySelector('.formula-slider');
  const slides = slider.querySelectorAll('.formula-item');
  const sliderIcons = slider.querySelectorAll('.formula-item__icon');

  const arr = [...slides];
  let currentSlide = 0;
  let maxElemsWidth = Math.floor(100/3);

  slider.textContent = '';

  const arrow = formula.querySelectorAll('.slider-arrow');

  const enterEvent=(e)=>{
    const target = e.target;

    if (target.closest('.active')) {
        if (target.closest('.formula-item__icon')) {
          const popup = target.closest('.formula-item__icon').querySelector('.formula-item-popup');

          popup.classList.add('active-popup');
          popup.style.transition = 'opacity 0.5s ease';
          popup.style.visibility = 'visible';
          popup.style.opacity = 1;
        }
    }
  };


  const check = (i)=>{
    let k = i;
    if (k<0) {
      k=5;
    }
    if (k>5) {
      k=0;
    }
    return k;
  };

  arrow.forEach(item=>item.addEventListener('click',()=>{
    arr[currentSlide].classList.remove('active');
    arr[currentSlide].removeEventListener('mouseover',enterEvent);

    if (item.matches('.slider-arrow_right')) {
      slider.append(arr[check(currentSlide-1)]);
      currentSlide = check(++currentSlide);
    }else{
      currentSlide = check(currentSlide-1);
      slider.prepend(arr[check(currentSlide-1)]);
    }

    arr[currentSlide].classList.add('active');
    arr[currentSlide].addEventListener('mouseover',enterEvent);
  }));

  for (let i = currentSlide-1; i < currentSlide+5; i++) {
    slider.appendChild(arr[check(i)]);
  }

  arr[currentSlide].classList.add('active');

  sliderIcons.forEach(item=>item.addEventListener('mouseover', enterEvent));



  const style = document.createElement('style');
  style.textContent = `
  .formula-slider-wrap{
    overflow:hidden
  }
  .formula-slider{
    display:flex;
    align-items: baseline;
  }
  .formula-slider .active{
    opacity: 1;
  }
  .formula-slider .active .formula-item__icon .formula-item-popup{
    transform: translateY(-30px);
  }
  .formula-slider .active  .formula-item__icon-inner{
    background-color: #ff9729de;
    color: #fff;
  }
  .formula-item{
    flex: 0 0 ${maxElemsWidth}%;
  }
  .formula-slider__slide:before{
    z-index: 0;
  }
  `;
  document.querySelector('head').insertAdjacentElement('beforeend',style);
};

export default circles;
