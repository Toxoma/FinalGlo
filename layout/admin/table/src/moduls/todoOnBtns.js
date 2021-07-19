import getData from './getData.js';
import popupModal from './popupModal.js';

const todoOnBtns = () => {
  'use strict';

  const deleteBtn = (e)=>{
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
  };



  const changeBtn = (e)=>{
    const block = e.target.closest('.table__row');
    const cols = block.querySelectorAll('td');

    popupModal('change',cols);

  };

  document.addEventListener('click', (e) => {
    if (e.target.closest('.action-remove')) {
      deleteBtn(e);
    }
    if (e.target.closest('.action-change')) {
      changeBtn(e);
    }
  });
};

export default todoOnBtns;
