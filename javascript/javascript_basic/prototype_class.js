function Animal(type, name, sound){
    this.type=type;
    this.name=name;
    this.sound=sound;
}

// 객체 생성자의 프로토타입을 통해서 생성한 각 객체들에 공통된 값을 공유하거나

// 공통된 함수를 지니게 함
Animal.prototype.say=function(){
    console.log(this.sound);
}

Animal.prototype.sharedValue=1;

// 객체 생성자를 작성후, new 연산자를 통해 파라미터 입력시켜 객체 생성
const dog=new Animal('개', '멍멍이', '멍멍');
const cat=new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();

console.log(dog.sharedValue);

console.log(cat.sharedValue);

// Animal 객체 생성자를 Dog가 상속받음-call을 통해 현재의 객체 정보와 파라미터로 초기화

// 상속 대상 객체의 프로토타입도 맞춤
// 상속을 통해서 공통된 구조나 정보를 재사용
function Dog(type, name, sound){
    Animal.call(this, '개', name, sound);
}

Dog.prototype=Animal.prototype;

// ES6 문법의 클래스 사용

// 생성자(constructor)를 통해서 정보의 값들을 초기화

// 함수를 정의 하여 자동 프로토타입 등록

// extends를 통해 상속을 받고 해당 정보들을 재사용

// super로 상속받은 객체를 생성시, 상속한 클래스의 생성자를 호출하여 초기화
class Animal2{
    constructor(type, name, sound){
        this.type=type;
        this.name=name;
        this.sound=sound;
    }

    say(){
        console.log(this.sound);
    }
}

class Dog2 extends Animal2{
    constructor(name, sound){
        super('개', name, sound);
    }
}

const dog2=new Dog2('멍멍이', '크르릉');

dog2.say();

class Food{
    constructor(name){
        this.name=name;
        this.brands=[]
    }

    addBrands(brand){
        this.brands.push(brand);
    }

    print(){
        console.log(`${this.name}을 파는 가게`);
        console.log(this.brands.join(', '))
    }
}

const pizza=new Food('pizza');

pizza.addBrands('피자헛');
pizza.addBrands('도미노 피자');

pizza.print();
