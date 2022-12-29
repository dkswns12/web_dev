// 산술 연산자를 통해 변수에 대입을 함으로써 해당 연산 결과 값을 만들어 낼 수 있음
// 연산자(++, --)는 변수 뒷 위치를 할 때, 해당 코드 라인 다음에 연산 수행
// 변수 앞 위치에 존재 할 땐, 해당 코드에서 바로 연산 수행
let a=(1+2)*3;
console.log(a);

let b=1;
console.log(b++);
console.log(b);

let c=1;
console.log(++c);
console.log(c);

// +=, *=, -=, /= 는 변수 값과 연산자 다음에 있는 수를 연산하게 함
let d=0;
d+=1;
console.log(d);

// Not(!) 연산자는 부정을 의미-!true == false
// And(&&) 연산자는 모두 true여야 true
// Or(||)연산자는 하나만이라도 true일 경우에 true
// not -> and -> or 순서로 연산 됨
let bool=!true;
console.log(bool);

const And=true && true;
console.log(And);

const Or=true || false;
console.log(Or);

// 비교 연산자에서 ===를 통해 비교 대상들이 같다면 true, 아니라면 false

// ==의 경우 데이터의 타입을 고려하지 않고 비교

// !==의 경우엔 비교 대상이 다르면 true, 반대면 false

// !=의 경우에도 데이터 타입을 고려하지 않고 비교
const equalA=1;
const equalB=1;

const equal=equalA === equalB;
console.log(equal);

// 비교 연산자(>, <)를 통해서 비교 기준이 맞다면 boolean 값 출력
const compareA=1;
const compareB=2;

console.log(compareA < compareB);

// 문자열의 값을 + 연산자를 통해 붙일 수 있음
const string1='안녕';
const string2='하세요';

console.log(string1+string2);