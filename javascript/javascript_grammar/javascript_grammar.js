// 삼항 연산자
// text 변수의 값에는 앞 조건문이 true일 때, 첫 문자열 값을 false일때 뒤의 문자열값을 가짐
// 한번만 사용하는 것을 권고
const array=[];
let text=array.length === 0
    ?'배열이 비어있음'
    :'배열이 비어있지 않음';

console.log(text);

// truthy와 falsy
// 아래의 값들은 false의 값을 지님
// 해당 false의 값들을 제외한 모든 값은 true
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);
console.log(!false);

// 단축평가 논리 계산법
// && 연산자 앞이 truthy 할 경우, 뒤의 값이 출력
// 반대의 경우 앞의 값만을 출력함
console.log(true && 'hellow');
console.log(false && 'hellow');
console.log('not null & not undefined' && 'hellow');
console.log('' && 'hellow');

// || 연산자는 앞이 falsy 일 경우, 뒤에 값을 출력
// 반대의 경우엔 앞을 출력
console.log(false || 'bye');
console.log(true || 'bye');

// 기본 파라미터
// 함수의 기본 값을 지정 시, 파라미터에 값을 대입-파라미터 값을 외부에서 정의 안할 땐 미리 지정한 값으로 실행 됨
const calcCircleArea=(r=1)=>Math.PI * r * r;
const area=calcCircleArea();
console.log(area);

// 배열의 내장함수 include를 사용하여 해당 배열 내, 파라미터의 텍스트 값의 존재 여부를 boolean으로 리턴
const animals=['고양이', '개', '거북이', '너구리']

const isAnimal=(text)=>animals.includes(text);

const result=isAnimal('고양이');

console.log(result);

// 객체에 메서드를 정의하여 파라미터를 객체의 키 값으로 받아들여 value를 출력
function makeSound(animal){
    const tasks={
        개 : () => {
            console.log('멍멍')
        },
        
        고양이(){
            console.log('야옹');
        },

        비둘기 : function(){
            consonle.log('구구');
        }
    }

    
    if (!tasks[animal]){
        console.log('...?');
        return;
    }

    tasks[animal]();

}

const result_make_sound=makeSound('ㄱ');

// 비구조화 할당
const obj={a:1};

function print({a, b=2}){
    console.log(a);
    console.log(b);
}

print(obj);

// 객체의 비구조화 할당을 통해 추출한 정보를 콜론 뒤의 상수에 대입 가능
const animal2={
    name:'멍멍이',
    type:'개'
}

const {name:nickname} = animal2;

console.log(nickname);

// 배열 또한 비구조화 할당 가능
const array_un=[1,2];

const [one, two=2] = array_un;

console.log(one);
console.log(two);

const deepObj={
    state:{
        information:{
            name:'velopert',
            languages:['korean', 'english', 'chinese']
        }
    },

    value: 5
};

// 깊은 객체 구조에서 비구조화 할당
// 추출된 상수에는 값이 존재하므로 객체 생성 시, value를 따로 지정 할 필요 없음
const {name, languages}=deepObj.state.information;

const {value}=deepObj;

const Extracted={
    name,
    languages,
    value
}

console.log(Extracted);

// spread 연산자(...)를 통해 위의 객체 정보를 그대로 가져옴
// 각 객체들은 위의 객체 정보를 복사한 것이기에 개별적이며 독립적임(같은 객체 가르킴x)
// 해당 연산자 후, 특정 정보 변경은 덮어 씀(단, 해당 연산자 전이면 특정 정보를 그대로 씀)
const slime={
    name:'슬라임'
}

const cuteSlime={
    ...slime,
    attribute:'cute'
}

const purpleCuteSlime={
    ...cuteSlime,
    color:'purple'
}

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);

// 배열 또한 spread를 통해 데이터 표현 가능-배열 내 ,여러번 사용 가능

// 배열 내장함수 concat 사용한 결과와 동일
const animals_spread=['개', '고양이', '참새'];
const add_animals_spread=[...animals_spread, '비둘기'];
const concat_animals=animals_spread.concat('비둘기');

console.log(animals_spread);
console.log(add_animals_spread);
console.log(concat_animals);

// rest는 비구조화 할당 시, 남은 여러개의 정보들을 객체로 가져옴

// rest 명은 자유롭게 변경 가능
const purpleCuteSlime_rest={
    name:'슬라임',
    attribute:'cute',
    color:'purple'
}

const {color, ...rest} = purpleCuteSlime_rest;

console.log(color);
console.log(rest);

// 배열 또한 rest 적용 가능-맨 마지막에만 적용
const numbers=[0,1,2,3,4,5,6];

const [zero_numbers, one_numbers, ...rest_numbers]=numbers;

console.log(zero_numbers);
console.log(one_numbers);
console.log(rest_numbers);

// 파라미터 값들을 rest 시, 개수를 떠나 배열로 받음

// 배열 내장함수 reduce로 총합 계산 가능
function sum(...rest){
    return rest.reduce((acc, current)=>acc+current, 0);
}

console.log(sum(1,2,3));

// spread로 인자(실 사용함수 파라미터 값)에 적용 시, 해당 원소들 계산
const numbers_spread=[1,2,3,4,5,6,7,8];
console.log(sum(...numbers_spread));
