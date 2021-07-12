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

  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if (request.readyState !== 4) {
      return;
    }

    if (request.status === 200) {
      console.log('success!!!');
    } else {
      console.error(request.status);
    }

    clearInput(form);
  });

  request.open('POST', '/layout/server.php');
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(data));

};

const formObject = (form) => {
  const data = new FormData(form);
  let arr = [];

  data.forEach((value, key) => {
    arr[key] = value;
  });

  sendObject({...arr}, form);
};

export default formObject;
