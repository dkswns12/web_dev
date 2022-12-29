
(function (window, document) {
    'use strict';

    const $toggles=document.querySelectorAll('.toggle');
    const $toggleBtn=document.getElementById('toggle-btn');

    // 
    // html 내의 스크립트 defer를 통해 html 다 로드 된 후에 자바스크립트 내용 실행
    // 토글 버튼 클릭 시의 이벤트 감지 기능 추가-토글 버튼 id
    // 토글 클래스를 가진 것들을 배열로 연결한 후, css의 on을 통해 display
    // 
    $toggleBtn.addEventListener('click', function(){
        toggleElements();
    });

    // 윈도우 - 브라우저를 사이즈 조정시, 이벤트 추가
    // 브라우저 사이즈가 1024 px 이상 리사이즈 되면 offelements를 통해 토글 요소 on 제거-리사이즈 시, 토글 메뉴 닫힘
    window.addEventListener('resize', function(){
        if (window.innerWidth > 1024){
            offElements();
        }
    });

    function toggleElements(){
        [].forEach.call($toggles, function (toggle){
            toggle.classList.toggle('on');
        });
    }

    function offElements(){
        [].forEach.call($toggles, function (toggle){
            toggle.classList.remove('on');
        });

    }

})(window, document)
