const slideAt = 'showup'; // 보여줄 슬라이드 클래스명
const slideFirst = document.querySelector('.slides:first-child'); // 시작 슬라이드 지정

function slide(){ // 슬라이드 함수 작성
  const slideNow = document.querySelector(`.${slideAt}`); // 보여줄 슬라이드에 클래스명 추가
  if (slideNow){ // 다음슬라이드로 넘어가게 하기
    slideNow.classList.remove(slideAt); // showup이 지정되어 있으면 showup 제거
    const slideNext = slideNow.nextElementSibling; // 다음 슬라이드 지정 (다음 형제요소 선택)
    if (slideNext){ // 무한루프 지정
      slideNext.classList.add(slideAt); // 다음 형제요소가 있으면 해당 요소에 showup 지정
    } else {
      slideFirst.classList.add(slideAt); // 다음 형제요소가 없으면 첫번째 슬라이드에 showup 지정
    }
  } else{
    slideFirst.classList.add(slideAt); // showup이 지정되어 있지 않다면 첫 슬라이드부터 시작
  }
}
slide(); // 함수 실행
setInterval(slide,3500) // 슬라이드 함수 실행 텀 지정