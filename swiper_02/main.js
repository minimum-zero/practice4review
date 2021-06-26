const prevBtn = document.querySelector('.left');
const nextBtn = document.querySelector('.right');
const slideR = document.querySelector('.slider');
const slideS = document.getElementsByClassName('slides');

let i = 0;
function swiper(){
  i++;
  if(i >= slideS.length){
    i = 0;
  }
  slideR.style.transform = 'translateX('+(-i * 100)+'vw)';
};

swiper();
setInterval(swiper,5000);

nextBtn.addEventListener('click', function(){
  i++;
  if(i >= slideS.length){
    i = 0;
  }
  slideR.style.transform = 'translateX('+(-i * 100)+'vw)';
});

prevBtn.addEventListener('click', function(){
  i--;
  if(i < 0){
    i = slideS.length - 1;
  }
  slideR.style.transform = 'translateX('+(-i * 100)+'vw)';
});