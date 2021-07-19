import checkAuth from './moduls/checkAuth.js';
import getData from './moduls/getData.js';
import popupModal from './moduls/popupModal.js';
import todoOnBtns from './moduls/todoOnBtns.js';

//formObject
checkAuth();

//getData
getData();

//popupModal
popupModal('add');

//to_doOnBtns
todoOnBtns();
