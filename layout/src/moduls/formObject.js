"use strict";

const sendObject = (data, form) => {
  console.log(JSON.stringify(data));

  const clearInput = (form) => {
    const inputs = form.querySelectorAll('input');
    const checkboxLabel = form.querySelector('.checkbox__label');
    inputs.forEach(input => {
      input.value = '';
      input.classList.remove('success');
    });
    checkboxLabel.click();
  };

  const popup =()=>{
    const popupThank = document.querySelector('.popup-thank');

    popupThank.style.visibility = 'visible';

    const clickOut=(e)=>{
      if (!e.target.closest('.popup-thank-bg') || e.target.closest('.close')) {
        popupThank.style.visibility = 'hidden';
        document.removeEventListener('click',clickOut);
      }
    };

    setTimeout(() => {
      document.addEventListener('click',clickOut);
    }, 100);
  };

  fetch('./server.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  .then((response) => {
    if (response.status !== 200) {
      throw new Error('status network not 200');
    }
  })
  .then(()=>{
    popup();
    clearInput(form);
  })
  .catch(err => {
    console.error(err);
  });

};

const formObject = (form) => {
  const data = new FormData(form);
  let arr = [];

  data.forEach((value, key) => {
    arr[key] = value;
  });

  sendObject({
    ...arr
  }, form);
};

export default formObject;
