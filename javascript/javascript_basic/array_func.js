// 배열의 내장함수를 통해 forEach의 내부 원소들의 각 원소들에 대해 변수로 담아서 함수 내용 수행
const superheros=['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

superheros.forEach(hero=>{
    console.log(hero);
})

// map을 통해 배열의 모든 원소에 화살표 함수를 적용한 배열을 생성
const array=[1,2,3,4];

const squared=array.map(n=>n*n);

console.log(squared);

const items=[
    {
        id:1,
        text:'hellow'
    },

    {
        id:2,
        text:'bye'
    }

]

// 배열 내 객체들에 있어서 텍스트만 추출
const texts = items.map(item=>item.text);

console.log(texts);

// indexOf를 통해 배열 내, 특정 원소와 일치한 인덱스 번호 리턴
// 배열 내 객체의 특정 정보 값에 해당하는 인덱스를 구할 때, findIndex를 통해 구함
// find는 찾은 객체를 그대로 리턴
const superheros2=['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
const index=superheros2.indexOf('캡틴 아메리카');
console.log(index);

const todos=[
    {
        id:0,
        text:'1단계',
        done:true
    },

    {
        id:1,
        text:'2단계',
        done:true
    },

    {
        id:2,
        text:'3단계',
        done:false
    }


]

const index2=todos.findIndex(todo=>todo.id===1);

console.log(index2);

// 배열 내 객체 원소 중 특정 값의 조건에 맞춰 필터링
// const falseDone=todos.filter(todo=>!todo.done);
const falseDone=todos.filter(todo=>todo.done === false);

console.log(falseDone);

// shift를 통해서 배열 내, 가장 앞의 원소 값을 추출-추출 된 값은 value에, numbers2는 추출된 원소 제거 한 후의 배열
// pop을 통해서 배열 내, 가장 뒤의 원소 값을 추출-위와 동일
// unshift는 앞에 원소를 추가, push는 뒤에 원소를 추가
const numbers2=[1,2,3,4,5];
const value=numbers2.shift();
console.log(value);
console.log(numbers2);

const numbers3=[1,2,3,4,5];
const value2=numbers3.pop();
console.log(value2);
console.log(numbers3);

const numbers4=[1,2,3,4,5];
numbers4.unshift(6);
console.log(numbers4);

const numbers5=[1,2,3,4,5];
numbers5.push(6);
console.log(numbers5);

// concat은 배열의 내장 함수로 다른 배열과 합침-기존의 배열을 건드리지 않음
const arr1=[1,2,3];
const arr2=[4,5,6];

const concated=arr1.concat(arr2);
console.log(concated);

// join은 파라미터가 없을 시, 배열 내의 원소들을 모두 묶어 문자열화

// 파라미터 값을 넣을 시, 배열 원소들에 적용하여 문자열화
const arr_join=[1,2,3,4,5];
console.log(arr_join.join());
console.log(arr_join.join(' '));
console.log(arr_join.join(', '));

// reduce는 accumulator 변수를 누적값으로 두고 두번째 파라미터(0)을 대입

// current는 배열의 순차적인 현재 원소를 가르킴

// 더해진 값은 accumulator 변수로 가고 배열의 원소가 끝날때까지 합함
const arr_reduce=[1,2,3,4,5];
const sum=arr_reduce.reduce((accumulator, current)=>accumulator + current, 0);
console.log(sum);

// 배열의 index, array 정보를 가져와 평균을 구함

// return을 통해 accumulator에 정보를 계속 업데이트하고 특정 조건 시, 해당 리턴값을 avg에 대입
const avg=arr_reduce.reduce((accumulator, current, index, array)=>{

    if(index === array.length-1){
        return (accumulator+current)/array.length;
    }

    return accumulator+current;

}, 0)

console.log(avg);

// reduce는 배열내 원소 카운팅도 가능

// acc을 객체로 두고 current 원소를 하나씩 추출하여 객체 안에 해당 key value 없을 시, 추가

// 있으면 1씩 증가 시킴
const alphabets=['a', 'a', 'b','c','c'];

const counts=alphabets.reduce((acc, current)=>{
    if (acc[current]){
        acc[current]+=1;
    } else{
        acc[current]=1;
    }
    return acc;
}

, {})

console.log(counts);
