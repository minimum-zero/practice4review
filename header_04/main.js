const toggleBtn = document.querySelector('.toggle');
const menuList = document.querySelector('.mainnav');
const openSub = document.getElementsByTagName('h3');
const subMenu = document.getElementsByClassName('subnav');


toggleBtn.addEventListener('click', function(){
  menuList.classList.toggle('active');
});

for(let i = 0; i < openSub.length; i++){
	openSub[i].addEventListener('click', function(){
		subMenu[i].classList.toggle('active');
  });
};