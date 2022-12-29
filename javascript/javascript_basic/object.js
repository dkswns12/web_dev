// dog라는 객체에 key 값을 통해 정보를 작성
// key는 공백을 넣을 수 없으나 따옴표를 통해 가능
const dog={
    name:'멍멍이',
    key:2,
    'key with space':true,
}

console.log(dog);
console.log(dog.name);
console.log(dog["key with space"]);

const ironMan={
    name:'토니 스타크',
    actor:'로버트 다우니 주니어',
    alias:'아이언맨'
}

const captainAmerica={
    name:'스티븐 로저스',
    actor:'크리스 에반스',
    alias:'캡틴 아메리카'
}

function print(hero){
    console.log(`${hero.alias}(${hero.name}) 역할을 맡은 사람은 ${hero.actor} 입니다.`);
}

print(ironMan);

// 비구조화 할당을 통해서, 객체 안의 정보를 추출하여 사용 가능
function print2(hero){
    const {name, actor, alias }=hero;
    console.log(`${alias}(${name}) 역할을 맡은 사람은 ${actor} 입니다.`);
}

print2(ironMan);

// 객체 안의 정보 값들을 함수의 파라미터로 받아서 사용 가능
// 상수 값으로 추출 가능
function print3({name, actor, alias }){
    console.log(`${alias}(${name}) 역할을 맡은 사람은 ${actor} 입니다.`);
}

print3(ironMan);

const {name}=ironMan;
console.log(name);

// this는 function이 속한 객체를 가르킴(dog2, dog3)

// function, 함수명 제거 가능

// 화살표 함수로는 this를 하지 못함

// cat 객체에 dog2의 say 값을 전달받고 해당 함수를 호출 시켰을 때, this는 현재 cat의 객체 기반으로 수행

// catSay에는 this의 sound가 지정 안됬으므로 undefined
const dog2={
    name:'멍멍이',
    sound:'멍멍',
    say:function say(){
        console.log(this.sound);
    }
}

const dog3={
    name:'멍멍이',
    sound:'멍멍',
    say(){
        console.log(this.sound);
    }
}

dog2.say();

dog3.say();

const cat={
    name:'야옹이',
    sound:'야옹',
}

cat.say=dog2.say;

cat.say();

// const catSay=dog.say;
// catSay();

// getter 함수를 객체에 삽입함으로 해당 객체의 함수를 조회하는 것만으로도 호출하여 수행 가능

// 객체 정보값을 변경 가능-numbers.a=3;
const numbers={
    a:1,
    b:2,
    get sum(){
        console.log('함수 실행');
        return this.a + this.b;
    }
}

console.log(numbers.sum);
numbers.a=3;
console.log(numbers.sum);

// getter 함수를 객체에 삽입함으로 해당 객체의 함수를 조회하는 것만으로도 호출하여 수행 가능

// 객체 정보값을 변경 가능-numbers.a=3;

// 객체에 setter를 통해서 정보 값을 변경 가능-setter를 통해 실제 key 값을 통해 접근 하기 보다 함수를 통해 접근하여 변경 가능
const dog4={
    _name:'멍멍이',
    
    set name(value){
        this._name=value;
    },

    get name(){
        console.log(this._name);
    }

}

console.log(dog4._name);
dog4.name='멍뭉';
console.log(dog4._name);
dog4.name;

// setter로 값 변경 시마다 업데이트 하여 _sum 변수 조회
const calc={
    _a:1,
    _b:2,
    _sum:3,
    calculate(){
        this._sum = this._a + this._b;
    },
    set a(value){
        this._a=value;
        this.calculate();
    },
    set b(value){
        this._b=value;
        this.calculate();
    },
    get sum(){
        console.log(this._sum);
    }
}

calc.a=10;
calc.b=10;
calc.sum;