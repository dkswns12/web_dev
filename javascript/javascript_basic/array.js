// 배열은 [ ] 안에 여러 데이터 타입에 맞는 원소를 넣을 수 있음

// 인덱싱은 0부터 시작

// 객체 별로도 저장 가능({ })

// push를 통해서 원소 항목을 삽입 가능
const array=[1,'a',{},4];

console.log(array[2]);

const obj_array=[
    {name:'멍멍이'},
    {name:'야옹이'}
]

console.log(obj_array);

obj_array.push({
    name:'멍뭉'
})

console.log(obj_array);

// length를 통해, 배열의 크기를 출력
console.log(obj_array.length);