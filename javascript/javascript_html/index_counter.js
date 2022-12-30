
// 자바스크립트에서 html 파일의 id로 접근하여 해당 요소를 가져옴

// 해당 요소에 대한 이벤트(클릭-onclick) 시, 함수 내용을 실행

// parseInt를 통해서 숫자가 작성 된 태그의 텍스트를 10진수 정수형으로 파싱

// 해당 값을 연산 후, html의 숫자 태그의 컨텐츠에 삽입
const number=document.getElementById('number');
const increase=document.getElementById('increase');
const decrease=document.getElementById('decrease');

// querySelectorAll을 통해 태그들에 대한 접근과 비구조화 할당을 통해 진행 가능
// const [increase, decrease] = document.querySelectorAll('button')
increase.onclick=()=>{
    const current=parseInt(number.innerText, 10);
    number.innerText=current+1;
}

decrease.onclick=()=>{
    const current=parseInt(number.innerText, 10);
    number.innerText=current-1;
}