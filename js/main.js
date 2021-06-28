var elOpenHead = document.querySelector('.sitenav');
var elOpenToggle = document.querySelector('.js-site-header__toggler');

elOpenToggle.addEventListener('click', function () {
  elOpenHead.classList.toggle('sitenav--active')
});