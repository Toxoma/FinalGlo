const checkAuth = ()=>{
  'use strict';
  const key = localStorage.getItem('token');
  if (!key || key === 'undefined') {
    let href = window.location.href;

    href = href.substring(0,href.lastIndexOf('/'));
    window.location.href = href;
  }

};

export default checkAuth;
