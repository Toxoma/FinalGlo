"use strict";
import closeAllPopup from './closeAllPopup.js';

const popupRepairTypes = () => {
  const getInfo = () => {
    return fetch('http://localhost:3000/api/items', {
      method: 'GET',
    });
  };

  const linkList = document.querySelectorAll('.link-list');
  const popupRepairTypes = document.querySelector('.popup-repair-types');

  const clickOut = (e) => {
    if (!e.target.closest('.popup-dialog-repair-types') || e.target.closest('.close')) {
      popupRepairTypes.style.visibility = 'hidden';
      document.removeEventListener('click', clickOut);
    }
  };


  const formModal = (data) => {
    const types = popupRepairTypes.querySelectorAll('.button_o');
    const tables = popupRepairTypes.querySelectorAll('.popup-repair-types-content-table > table > tbody');
    const arrowR = document.getElementById('nav-arrow-popup-repair_right');
    const arrowL = document.getElementById('nav-arrow-popup-repair_left');
    const slider = popupRepairTypes.querySelector('.nav-list-popup-repair');
    let currentCounter = 0;

    const check = (i,max= types.length-1)=>{
      let k = i;
      if (k<0) {
        k=max;
      }
      if (k>max) {
        k=0;
      }
      return k;
    };

    const switchType =()=>{
      slider.style.transform = `translateX(${-100*currentCounter}%)`;
    };

    const arrow = () => {
      arrowR.addEventListener('click', () => {
        currentCounter = check(++currentCounter);
        switchType();
      });

      arrowL.addEventListener('click', () => {
        currentCounter = check(--currentCounter);
        switchType();
      });
    };
    arrow();


    const arr = [];
    for (let i = 0; i < types.length; i++) {
      arr.push({
        type: types[i],
        table: tables[i],
      });
    }

    const toggleType = (value) => {
      types.forEach((item, key) => {
        if (item !== value) {
          item.classList.remove('active');
          tables[key].parentElement.classList.add('hide');
        } else {
          item.classList.add('active');
          tables[key].parentElement.classList.remove('hide');
        }
      });
    };

    types.forEach(item => item.addEventListener('click', () => {
      toggleType(item);
    }));

    const pushDataIntoBlock = () => {
      arr.forEach((item) => {
        const mas = data.filter(el => el.type === item.type.textContent);

        item.table.textContent = '';

        mas.forEach(elem => {
          item.table.insertAdjacentHTML('beforeend',
            `
          <tr class="mobile-row">
            <td class="repair-types-name">${elem.name}</td>
            <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
            <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
            <td class="repair-types-value">${elem.units}<sup></sup></td>
            <td class="repair-types-value">${elem.cost} руб.</td>
          </tr>
          `);
        });

      });
    };

    pushDataIntoBlock();

  };



  linkList.forEach(item => item.addEventListener('click', () => {
    setTimeout(() => {
      document.addEventListener('click', clickOut);
    }, 100);
    getInfo()
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('status network not 200');
        } else {
          return response.json();
        }
      })
      .then((data) => {
        formModal(data);
      })
      .then(() => {
        popupRepairTypes.style.visibility = 'visible';
        closeAllPopup(popupRepairTypes);
      })
      .catch(err => {
        console.error(err);
      });
  }));

  const style = document.createElement('style');
  style.textContent = `
  .nav-list-popup-repair{
    min-width: auto;
    flex-wrap: nowrap;
  }
  .popup-repair-types .nav-list .active{
    background-color: #66f0f0;
  }
  .popup-repair-types-content-table .hide{
    display: none;
  }
  `;
  document.querySelector('head').insertAdjacentElement('beforeend', style);


};
//
export default popupRepairTypes;
