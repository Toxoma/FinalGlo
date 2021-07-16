"use strict";

const sendObject = (data, form) => {
  console.log(JSON.stringify(data));

  const clearInput = (form) => {
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
      input.value = '';
      input.classList.remove('success');
    });
  };

  const mistake = ()=>{
    const block = document.createElement('div');
    block.className='mistake-block';
    block.insertAdjacentHTML('afterbegin',
    `
    Ошибка авторизации!!!
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
    clearInput(form);
  })
  .catch(err => {
    console.error(err);
    clearInput(form);
    mistake();
  });

};

const formObject = (form) => {
  const name = document.getElementById('name');
  const password = document.getElementById('type');

  let arr = {
    name: name.value,
    password: password.value,
  };

  sendObject(arr, form);

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
