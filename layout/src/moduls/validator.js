"use strict";

import formObject from './formObject.js';

const validator = ()=>{
  const forms = document.querySelectorAll('form');
  const phoneValid = new RegExp(/^\+7\s\(\d{3}\)\s\d{3}\-\d{2}\-\d{2}$/);
  // const phoneValid = new RegExp(/\+7\s{0,1}?\(\d{3}\)\s{0,1}?\d{3}\-\d{2}\-\d{2}/);
  const remove = new RegExp(/[^\d\+\(\)\-]\s/g);


  forms.forEach(form=>{
    const phone = form.querySelector('input[name=phone]');
    const subBtn = form.querySelector('button');
    const checkBox = form.querySelector('input[type=checkbox]');
    const error = new Set();
    error.add(phone);

    phone.addEventListener('focus',()=>{
      phone.value = '+7 (';
    });

    checkBox.required = true;

    phone.addEventListener('input',(e)=>{

      const target = e.target;
      console.log('target.value: ', target.value);
      target.value = target.value.replace(remove,'');

      if (/^\+7\s\(\d{3}$/.test(target.value)) {
        phone.value += ') ';
      }
      if (/^\+7\s\(\d{3}\)\s\d{3}$/.test(target.value) ||
      /^\+7\s\(\d{3}\)\s\d{3}\-\d{2}$/.test(target.value)
      ) {
        phone.value += '-';
      }

      if (!phoneValid.test(target.value)) {
        target.classList.add('error');
        target.classList.remove('success');
        error.add(phone);
      }else{
        target.classList.add('success');
        target.classList.remove('error');
        error.delete(phone);
      }

      if (error.size) {
        subBtn.disabled = true;
        subBtn.style.opacity = '0.6';
      }else{
        subBtn.disabled = false;
        subBtn.style.opacity = '1';
      }
    });

    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      formObject(form);
    });
  });

};

export default validator;
