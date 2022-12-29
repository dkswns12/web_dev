// for 문을 배열의 크기보다 적게 설정 시, 인덱스는 0부터 시작함으로 해당 배열 내 원소 모두 추출 가능
const array=['멍멍이', '야옹이', '멍뭉'];

for (let i=0; i < array.length; i++){
    console.log(array[i]);
}

// while 문은 조건문 참인 동안만 블록 수행하고, false 시 블록 수행문 종료
let i=0;
let isFun=false;

while(!isFun){
    console.log(i);
    i++;
    if(i === 5){
        isFun=true;
    }
}

// for of, for in

// for in은 객체의 키 값을 하나씩 추출하여 템플릿 리터럴로 표출 가능

// Object를 통한 객체의 정보 추출
for(let arr of array){
    console.log(arr);
}

const obj={
    name:'멍멍이',
    sound:'멍멍',
    age:2
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

for (let key in obj){
    console.log(`${key} : ${obj[key]}`);
}

// continue는 루프를 바로 탈 수 있게

// break는 반복문을 탈출
for (let i=0; i<10; i++){
    if(i===2) continue;
    console.log(i);
    if(i==5) break;
}

function sumOf(numbers){
    let sum=0;
    for(let i=0; i<numbers.length; i++){
        sum+=numbers[i];
    }
    return sum;
}

const result=sumOf([1,2,3]);
console.log(result);

let result_bigger3=[]
function bigger3(numbers){
    for (let i=0; i<numbers.length; i++){
        if (numbers[i]>3){
            result_bigger3.push(numbers[i]);
        }
    }

    console.log(result_bigger3);
    result_bigger3=[];
}

bigger3([1,3,4,5,6,7,8]);