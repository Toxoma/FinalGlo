"use strict";

import formObject from './formObject.js';

const validator = ()=>{
  const forms = document.querySelectorAll('form');
  const phoneValid = new RegExp(/^\+7\s\(\d{3}\)\s\d{3}\-\d{2}\-\d{2}$/);
  const remove = new RegExp(/[^\d\+\(\)\-\s]/g);

  forms.forEach(form=>{
    const phone = form.querySelector('input[name=phone]');
    const subBtn = form.querySelector('button');
    const checkBox = form.querySelector('input[type=checkbox]');

    const error = new Set();
    error.add(phone);
    error.add(checkBox);

    const check = ()=>{
      if (error.size) {
        subBtn.disabled = true;
        subBtn.style.opacity = '0.6';
      }else{
        subBtn.disabled = false;
        subBtn.style.opacity = '1';
      }
    };

    subBtn.disabled = true;
    subBtn.style.opacity = '0.6';

    phone.addEventListener('focus',(e)=>{
      if (!e.target.value) {
        phone.value = '+7 (';
      }
    });

    checkBox.required = true;

    const clearError = (form)=>{
      const inputs = form.querySelectorAll('.error');
      inputs.forEach(item=>{
        item.classList.remove('error');
      });
    };

    const checkChkBox = (form)=>{
        const label = form.querySelector('.checkbox__label');
        const input = form.querySelector('input[name=phone]');

        if (input.value) {
          if (checkBox.checked) {
            error.delete(checkBox);
            label.classList.remove('error');
          }else{
            label.classList.add('error');
            error.add(checkBox);
          }
        }else{
          clearError(form);
        }
    };

    phone.addEventListener('input',(e)=>{
      const target = e.target;

      target.value = target.value.replace(remove,'');

      if (/^\+7\s\(\d{3}$/.test(target.value)) {
        phone.value += ') ';
      }
      if (/^\+7\s\(\d{3}\)\s\d{3}$/.test(target.value) ||
      /^\+7\s\(\d{3}\)\s\d{3}\-\d{2}$/.test(target.value)
      ) {
        phone.value += '-';
      }

      if (/^\+7\s\(\d{3}\)\s\d{3}\-\d{2}\-\d{2}/.test(target.value)) {
        target.value = target.value.substr(0,18);
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

      checkChkBox(form);
      check();
    });

    checkBox.addEventListener('change',()=>{
      checkChkBox(form);
    });

    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      formObject(form);
    });

  });

};

export default validator;
