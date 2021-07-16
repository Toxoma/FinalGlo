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

  const mistake = ()=>{
    const block = document.createElement('div');
    block.className='mistake-block';
    block.insertAdjacentHTML('afterbegin',
    `
    Ошибка отправки формы!!!
    `);
    document.body.append(block);
    setTimeout(() => {
      block.classList.add('disapeare');
      setTimeout(() => {
        block.remove();
      }, 2000);
    }, 1000);
  };

  fetch('./server.php1', {
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
    clearInput(form);
    mistake();
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


  const style = document.createElement('style');
  style.textContent = `
  .mistake-block{
    position: fixed;
    font-size: 30px;
    color: red;
    top: 50%;
    left: 38%;
    z-index: 999;
    background-color: black;
    padding: 20px;
    border-radius: 20px;
    border: 4px solid red;
    transition: 2s;
  }
  @media (max-width: 1024px) {
    .mistake-block {
      left: 30%;
    }
  }
  @media (max-width: 786px) {
    .mistake-block {
      left: 20%;
    }
  }
  .disapeare{
    opacity: 0;
  }
  `;
  document.querySelector('head').insertAdjacentElement('beforeend',style);

};

export default formObject;
