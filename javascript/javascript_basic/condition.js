
// 조건문 안의 괄호가 조건의 참, 거짓 여부를 판단 후 중괄호 블록을 수행
// 중괄호 블록은 지역변수로써 블록 밖의 변수 값과 달리 적용
const a=1;

if(a+1===2){
    const a=2;
    console.log(a);
}

console.log(a);

// 변수 값에 의해 특정 조건문의 조건에 합당 한 블록 수행
const conditinalVal=1;
if(conditinalVal===2){
    console.log(2);
} else if(conditinalVal===3){
    console.log(3);
} else{
    console.log(1);
}

// switch 괄호 안의 변수값을 특정 케이스마다의 일치여부 확인 후, 해당 블록 수행
// 단, break를 케이스마다 작성하여 특정 케이스 블록 수행 후 중단
// default는 모든 케이스에 해당하지 않을 때 적용
const device='iphone';

switch(device){
    case 'iphone':
        console.log('아이폰');
        break;
    case'ipad':
        console.log('아이패드');
        break;
    
    default:
        console.log('not at all');
}
