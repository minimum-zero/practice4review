let mainNav = document.querySelector('.mainnav');
let subNav = document.querySelector('.sub');

mainNav.addEventListener('mouseover', function(){
  subNav.classList.add('active');
});
mainNav.addEventListener('mouseleave', function(){
  subNav.classList.remove('active');
});