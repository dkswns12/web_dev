// 함수 선언과 함수명을 작성하며 괄호안의 파라미터 값으로 블록안의 내용 수행
function add(a,b){
    return a+b;
}

console.log(add(1,2));

function hellow(name){
    console.log('hi '+name+' ~~!!');
}

hellow('jy');


// 새로운 문법으로 ` `를 통해 입력값을 ${ }안에 삽입함으로 연결된 string 형태로 출력
// return은 함수 종료 시킴
function hellow2(name){
    return `hellow ${name} !`;
}

const h2=hellow2('jy');
console.log(h2);

const add2=(a,b) => {
    return a+b;
}

const result_add2=add2(1,2);
console.log(result_add2);

const add3=(a, b)=>a+b;

const result_add3=add3(1,3);
console.log(result_add3);