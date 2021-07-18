

const getData = () => {
  'use strict';

  const all = 'Все услуги';

  const getInfo = () => {
    return fetch('http://localhost:3000/api/items', {
      method: 'GET',
    });
  };

  const formTbody = (type, data) => {
    const tbody = document.getElementById('tbody');
    let arr = data;

    if (type !== all) {
      arr = data.filter(item => item.type === type);
    }

    tbody.textContent = '';

    arr.forEach(item => {
      tbody.insertAdjacentHTML('beforeend',
        `
      <tr class="table__row">
      <td class="table__id table__cell">${item.id}</td>
      <td class="table-type table__cell">${item.type}</td>
      <td class="table-name table__cell">
      ${item.name}
      </td>
      <td class="table-units table__cell">
      ${item.units}
      </td>
      <td class="table-cost table__cell">
      ${item.cost} руб
      </td>
      <td>
        <div class="table__actions table__cell">
          <button value=${item.id} class="button action-change"><span class="svg_ui"><svg class="action-icon_change"><use xlink:href="./img/sprite.svg#change"></use></svg></span><span>Изменить</span>
          </button>
          <button value=${item.id} class="button action-remove"><span class="svg_ui"><svg class="action-icon_remove"><use xlink:href="./img/sprite.svg#remove"></use></svg></span><span>Удалить</span>
          </button>
        </div>
      </td>
    </tr>
      `);
    });
  };

  const formTypeItems = (data) => {
    const typeItem = document.getElementById('typeItem');
    const arrTypes = new Set();
    arrTypes.add(all);
    typeItem.textContent = '';

    for (const key in data) {
      arrTypes.add(data[key].type);
    }

    arrTypes.forEach(item => {
      typeItem.insertAdjacentHTML('beforeend',
        `
        <option value="${item}">${item}</option>
      `);
    });

    formTbody(all, data);

    typeItem.addEventListener('change', (e) => {
      formTbody(e.target.options[e.target.selectedIndex].textContent, data);
    });


  };



  getInfo()
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('status network not 200');
      } else {
        return response.json();
      }
    })
    .then((response) => {
      formTypeItems(response);
    })
    .catch(err => {
      console.error(err);
    });

};

export default getData;
