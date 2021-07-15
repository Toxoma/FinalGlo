"use strict";

const portfolio = () => {
  const wrap = document.querySelector('.portfolio-slider-wrap');
  const slider = wrap.querySelector('.portfolio-slider');
  const row = slider.querySelector('.row-slide');

  const main = () => {
    const arrowLeft = wrap.querySelector('.slider-arrow_left-portfolio');
    const arrowRight = wrap.querySelector('.slider-arrow_right-portfolio');
    const cols = wrap.querySelectorAll('.portfolio-slider__slide');
    const widthWndow = slider.clientWidth;
    const widthElem = cols[0].clientWidth;

    const maxCounter = cols.length - widthWndow / widthElem;
    let counter = 0;

    const check = (i, max = maxCounter) => {
      let k = i;
      arrowLeft.style.visibility = 'visible';
      arrowRight.style.visibility = 'visible';
      if (k <= 0) {
        arrowLeft.style.visibility = 'hidden';
        k = i++;
      }
      if (k >= max) {
        arrowRight.style.visibility = 'hidden';
        k = i--;
      }
      return k;
    };

    check(counter);

    arrowRight.addEventListener('click', () => {
      counter = check(++counter);
      row.style.transform = `translateX(-${widthElem*counter}px)`;
    });

    arrowLeft.addEventListener('click', () => {
      counter = check(--counter);
      row.style.transform = `translateX(-${widthElem*counter}px)`;
    });

    const style = document.createElement('style');
    style.textContent = `
    .row-slide{
       display: flex;
       transition: all 1s ease 0s;
    }
    `;
    document.querySelector('head').insertAdjacentElement('beforeend', style);
  };
  main();

  const popup = () => {
    //модалочка popup-dialog-portfolio
    const popupPortfolio = document.querySelector('.popup-portfolio');
    const popupDialogPortfolio = document.querySelector('.popup-dialog-portfolio');
    const close = popupPortfolio.querySelectorAll('.close ');
    const popupTextMas = document.querySelectorAll('.popup-portfolio-text');
    const slidesMas = row.querySelectorAll('.portfolio-slider__slide-frame');
    const popupPortfolioSlider = popupPortfolio.querySelector('.popup-portfolio-slider');
    const imgMas = popupPortfolioSlider.querySelectorAll('.popup-portfolio-slider__slide');
    const arr = [];
    const sliderCounterContentCurrent = popupPortfolio.querySelector('.slider-counter-content__current');
    const sliderCounterContentTotal = popupPortfolio.querySelector('.slider-counter-content__total');

    const portfolioTotal = wrap.querySelector('.slider-counter-content__total');
    const portfolioCurrent = wrap.querySelector('.slider-counter-content__current');

    for (let i = 0; i < slidesMas.length; i++) {
      arr[i] = {
        slide: slidesMas[i],
        text: popupTextMas[i],
        img: imgMas[i],
      };
    }

    sliderCounterContentTotal.textContent = arr.length;
    portfolioTotal.textContent = arr.length;

    const outsideClick = (e) => {
      const target = e.target;

      if (target.closest('.popup-dialog-portfolio') && target !== close) {
        return;
      }

      document.removeEventListener('click', outsideClick);
      close[0].click();
    };

    let data;
    let currentCounter=0;

    const removeText = () => {
      if (!data) {
        return;
      }
      if (popupDialogPortfolio.clientWidth <= 768) {
        data.text.style.display = 'none';
      } else {
        data.text.style.display = 'block';
      }
    };

    slidesMas.forEach(slide => slide.addEventListener('click', () => {

      popupPortfolio.style.visibility = 'visible';
      data = arr.filter(item => item.slide === slide)[0];

      popupPortfolioSlider.prepend(data.img);
      removeText();

      setTimeout(() => {
        document.addEventListener('click', outsideClick);
      }, 100);

      currentCounter = arr.findIndex(item=>item===data);
      sliderCounterContentCurrent.textContent = currentCounter+1;
      portfolioCurrent.textContent = currentCounter+1;

    }));

    close.forEach(item=>item.addEventListener('click', () => {
      popupPortfolio.style.visibility = 'hidden';
      data.text.style.display = 'none';
    }));

    window.addEventListener('resize', () => {
      removeText();
    });

    const arrowLeft = popupPortfolio.querySelector('.popup-arrow_left');
    const arrowRight = popupPortfolio.querySelector('.popup-arrow_right');


    const check = (i,max=arr.length-1)=>{
      let k = i;
      if (k<0) {
        k=max;
      }
      if (k>max) {
        k=0;
      }
      return k;
    };


    const switchFoto =(value)=>{
      popupPortfolioSlider.prepend(arr[value].img);
      sliderCounterContentCurrent.textContent = value+1;
      portfolioCurrent.textContent = value+1;
    };

    arrowRight.addEventListener('click', () => {
      currentCounter = check(++currentCounter);
      switchFoto(currentCounter);
    });

    arrowLeft.addEventListener('click', () => {
      currentCounter = check(--currentCounter);
      switchFoto(currentCounter);
    });

    //mainPhone
    const arrowLeftMain = wrap.querySelector('.slider-arrow-tablet-mobile_left');
    const arrowRightMain = wrap.querySelector('.slider-arrow-tablet-mobile_right');
    const sliderMobile = wrap.querySelector('.portfolio-slider-mobile');

    const switchFotoMain =(value)=>{
      sliderMobile.prepend(arr[value].img);
      sliderCounterContentCurrent.textContent = value+1;
      portfolioCurrent.textContent = value+1;
    };

    arrowRightMain.addEventListener('click', () => {
      currentCounter = check(++currentCounter);
      switchFotoMain(currentCounter);
    });

    arrowLeftMain.addEventListener('click', () => {
      currentCounter = check(--currentCounter);
      switchFotoMain(currentCounter);
    });
  };
  popup();

  // const mainPhone=()=>{

  // };
  // mainPhone();
};

export default portfolio;
