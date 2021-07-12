"use strict";

const validator = ()=>{
  const forms = document.querySelectorAll('form');
  const phoneValid = new RegExp(/^\+7\s\(\d{3}\)\s\d{3}\-\d{2}\-\d{2}$/);
  // const phoneValid = new RegExp(/\+7\s{0,1}?\(\d{3}\)\s{0,1}?\d{3}\-\d{2}\-\d{2}/);
  const remove = new RegExp(/[^\+\d\-\(\)\s]/g);


  forms.forEach(form=>{
    const phone = form.querySelector('input[name=phone]');
    const subBtn = form.querySelector('button');
    const error = new Set();
    error.add(phone);

    phone.addEventListener('input',(e)=>{
      const target = e.target;
      target.value = target.value.replace(remove,'');

      if (!phoneValid.test(target.value)) {
        target.style.border = '2px solid red';
        target.style.borderRadius = '20px';
        error.add(phone);
      }else{
        target.style.border = '2px solid green';
        target.style.borderRadius = '20px';
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

  });

};

export default validator;
