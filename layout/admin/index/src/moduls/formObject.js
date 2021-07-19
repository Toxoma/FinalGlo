"use strict";

const clearInput = (form) => {
  const inputs = form.querySelectorAll('input');
  inputs.forEach(input => {
    input.value = '';
    input.classList.remove('success');
  });
};

const sendObject = (data, form) => {

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

  const saveLocal = (token)=>{
    localStorage.setItem('token',token);
  };

  fetch('../server.php', {
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
  .then((token='пришедший токен')=>{
    clearInput(form);
    saveLocal(token);
    window.location.href = 'table.html';
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
  let flag = true;

  const mistake = (value)=>{
    flag = false;
    value.nextElementSibling.style.display = 'block';
  };

  [name,password].forEach(item=>{
    if (item.name === 'name') {
      if (name.value!=='admin') {
        mistake(name);
      }
    }
    if (item.name === 'password') {
      if (password.value!=='admin1') {
        mistake(password);
      }
    }
  });

  if (flag) {
    let arr = {
      name: name.value,
      password: password.value,
    };
    sendObject(arr, form);
  }else{
    clearInput(form);
  }

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
