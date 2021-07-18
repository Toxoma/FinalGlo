import getData from './getData.js';

const deleteItem = () => {
  'use strict';

  document.addEventListener('click', (e) => {
    if (e.target.closest('.action-remove')) {
      const key = e.target.closest('.action-remove').value;
      fetch(`http://localhost:3000/api/items/${key}`, {
        method: 'DELETE',
      })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          getData();
        }else{
          throw new Error('status network not 200');
        }
      })
      .catch(err => {
        console.error(err);
      });
    }
  });
};

export default deleteItem;
