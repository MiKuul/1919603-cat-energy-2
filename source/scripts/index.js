const navMain = document.querySelector('.header__navigation');
const navToggle = document.querySelector('.header__menu-toggle');

navMain.classList.remove('header__navigation--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('header__navigation--closed')) {
    navToggle.classList.remove('header__menu-toggle--closed');
    navToggle.classList.add('header__menu-toggle--opened');
    navMain.classList.remove('header__navigation--closed');
    navMain.classList.add('header__navigation--opened');
  } else {
    navMain.classList.add('header__navigation--closed');
    navMain.classList.remove('header__navigation--opened');
    navToggle.classList.add('header__menu-toggle--closed');
    navToggle.classList.remove('header__menu-toggle--opened');
  }
});
