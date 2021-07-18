import getData from './getData.js';

const sendData = (form) => {
  'use strict';


  const clearInput = (form) => {
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
      input.value = '';
    });
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

  const postData = (data)=>{
    console.log('data: ', JSON.stringify(data));

    fetch('http://localhost:3000/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        clearInput(form);
        getData();
        document.getElementById('modal').click();
      }else{
        throw new Error('status network not 200');
      }
    })
    .catch(err => {
      console.error(err);
      clearInput(form);
      mistake();
    });
  };

  const getFormData = () => {
    try {
      const inputs = form.querySelectorAll('input');
      let arr = {};

      inputs.forEach((input) => {
        if (input.dataset.info==='cost') {
          if (isNaN(+input.value)) {
            mistake();
            throw Error('тип данныз не тот!');
          }
          arr[input.dataset.info] = +input.value;
        }else{
          arr[input.dataset.info] = input.value+'';
        }
      });

      postData(arr);
    } catch (error) {
      console.error('error: ', error);
    }

  };

  getFormData();


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

export default sendData;
