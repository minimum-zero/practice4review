const toggleBtn = document.querySelector('.toggle');
const opened = document.querySelector('.menu');

toggleBtn.addEventListener('click',function(){
  opened.classList.toggle('opened');
});