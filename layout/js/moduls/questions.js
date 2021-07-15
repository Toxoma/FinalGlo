"use strict";

const questions = () => {
  const accordion = document.querySelector('.accordion');
  const elems = accordion.querySelectorAll('li>.title_block');

  const toggleElems=(value)=>{
    elems.forEach(elem=>{
      if (elem!==value) {
        elem.classList.remove('msg-active');
      }else{
        elem.classList.toggle('msg-active');
      }
    });
  };

  elems.forEach(elem=>elem.addEventListener('click',()=>{
    toggleElems(elem);
  }));
};

export default questions;
