// 모달 만들기

// querySelector를 통해 태그의 클래스로 접근-모달

// 열고 닫는 버튼의 요소에 이벤트를 추가하여 해당 모달을 보여주거나 사라지게함
const open=document.getElementById('open');
const close=document.getElementById('close');
const modal=document.querySelector('.modal-wrapper');

open.onclick=()=>{
    modal.style.display='flex';
}

close.onclick=()=>{
    modal.style.display='none';
}