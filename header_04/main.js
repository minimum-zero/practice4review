const toggleBtn = document.querySelector('.toggle');
const menuList = document.querySelector('.mainnav');
const openSub = document.querySelector('.mainnav h3');
const subMenu = document.querySelector('.subnav');

toggleBtn.addEventListener('click', function(){
  menuList.classList.toggle('active');
});

openSub.addEventListener('click', function(){
  subMenu.classList.toggle('active');
});