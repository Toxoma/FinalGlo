import formObject from './formObject.js';

const login = ()=>{
  'use strict';

  const mainForm = document.querySelector('.main-form > form');
  mainForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    formObject(mainForm);
  });

};

export default login;
