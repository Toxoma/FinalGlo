import sendData from './sendData.js';

const popupModal = ()=>{
  'use strict';
  const addBtn = document.querySelector('.btn-addItem');
  const modal =document.getElementById('modal');
  const form = modal.querySelector('form');

  modal.style.display = 'block';
  modal.style.visibility = 'hidden';

  const clickOut=(e)=>{
    if (!e.target.closest('.modal') || e.target.closest('.button__close')) {
      modal.style.visibility = 'hidden';
      document.removeEventListener('click',clickOut);
    }
  };

  addBtn.addEventListener('click',()=>{
    modal.style.visibility = 'visible';
    setTimeout(() => {
      document.addEventListener('click',clickOut);
    }, 100);
  });

  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    sendData(e.target);
  });

  const style = document.createElement('style');
  style.textContent = `
    .modal{
      left: ${modal.clientWidth/2 - 450/2}px;
      top:100px;
    }
  `;
  document.querySelector('head').insertAdjacentElement('beforeend',style);
};

export default popupModal;
