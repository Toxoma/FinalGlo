import sendData from './sendData.js';

const popupModal = (todo,data)=>{
  'use strict';
  const addBtn = document.querySelector('.btn-addItem');
  const modal = document.getElementById('modal');
  const form = modal.querySelector('form');

  modal.style.display = 'block';
  modal.style.visibility = 'hidden';

  const submitForm = (e)=>{
    e.preventDefault();
    if (data) {
      sendData(e.target, data[0].textContent.trim());
    }else{
      sendData(e.target);
    }
  };

  const clickOut=(e)=>{
    if (!e.target.closest('.modal') || e.target.closest('.button__close')) {
      modal.style.visibility = 'hidden';
      document.removeEventListener('click',clickOut);
      form.removeEventListener('submit',submitForm);
    }
  };

  const appear = ()=>{
    modal.style.visibility = 'visible';
    setTimeout(() => {
      document.addEventListener('click',clickOut);
    }, 100);
  };

  const addElem = ()=>{
    addBtn.addEventListener('click',()=>{
      appear();
      form.addEventListener('submit',submitForm);
    });
  };

  const changeEl = ()=>{
    const inputs = form.querySelectorAll('input');

    appear();

    for (let i = 0; i < inputs.length; i++) {
      let str = data[i+1].textContent.trim();
      if (/\sруб/.test(str)) {
        str = str.replace(/\sруб/,'');
      }

      inputs[i].value = str;
    }
  };

  if (todo==='add') {
    addElem();
  }

  if(todo==='change'){
    changeEl();
    form.addEventListener('submit',submitForm);
  }

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
