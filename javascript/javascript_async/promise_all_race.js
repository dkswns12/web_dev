function sleep(ms){
    return new Promise((resolve)=>setTimeout(resolve, ms))
}

const getDog=async () =>{
    await sleep(1000);
    return '멍뭉이';
}

const getRabbit=async () =>{
    await sleep(500);
    return '토끼';
}

const getTurtle=async()=>{
    await sleep(3000);
    return '거북이';
}

// process.all은 async 함수(promise)를 모두 동시에 실행

// 개별 시간은 각자 진행

// 배열안에는 해당 함수의 리턴 값
async function process_await(){
    const start=Date.now();
    await getDog();
    await getRabbit();
    await getTurtle();

    console.log(Date.now()-start);
}


process_await();


async function process_all(){
    const start=Date.now();
    const results =await Promise.all([getDog(), getRabbit(), getTurtle()]);
    console.log(Date.now()-start);
    console.log(results);
}

process_all();

// 비구조화 할당 가능
async function process_all2(){
    const start=Date.now();
    const [dog, rabbit, turtle] =await Promise.all([getDog(), getRabbit(), getTurtle()]);
    console.log(Date.now()-start);
    console.log(dog);
    console.log(rabbit);
    console.log(turtle);
}

process_all2();

// promise.race는 배열중 가장 빨리 끝나는 함수를 반환

// all은 배열 중 하나라도 에러 시, 전체 에러

// race는 가장 먼저 끝나는 함수가 에러만 나지 않으면 에러 간주 x
async function process_race(){
    const start=Date.now();
    const fastest =await Promise.race([getDog(), getRabbit(), getTurtle()]);
    console.log(Date.now()-start);
    console.log(fastest);
}

process_race();