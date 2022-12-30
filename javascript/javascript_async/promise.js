// promise는 성공시 resolve를 실패시 reject를 호출
// then을 통해서 promise의 파라미터 함수를 수행 후의 값을 가져와서 작업 진행 가능
const myPromise=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('result');
    }, 1000)
});

myPromise.then(result=>{
    console.log(result);
})

const myPromise_reject=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject(new Error);
    }, 1000)
});

const myPromise_reject2=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const err=new Error('justError');
        reject(err);
    }, 1000);
})

myPromise.then(result=>{
    console.log(result);
}).catch(e => {
    console.error(e);
})

myPromise_reject.then(result=>{

    try{
        console.log(result);
    }

    catch (e)  {e=>
        console.error(e);
    }

}) 


// promise를 통해 함수 실행 시의 결과값을 resolve와 then을 통해 해당 output 가져옴

// 실패 조건 시, reject로 하여 에러 생성 시, 해당 값을 catch 문 수행

// increaseAndPrint 함수 값이 입력 되면 promise가 반환되고 then을 통해 내용 수행 후, output 값을 다음 함수에 전달 & 반복

// 시점은 받은 output 값으로 부터의 함수 실행 & 내부 promise 수행
function increaseAndPrint(n){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const value=n+1;
            if(value === 5){
                const error=new Error();
                error.name='valueIsFiveError';
                reject(error);
                return
            }
            console.log(value);
            resolve(value);
        }, 1000)
    });
}

// increaseAndPrint(0).then(increaseAndPrint).then(increaseAndPrint).then(increaseAndPrint).then(increaseAndPrint).catch(e=>console.error(e));

increaseAndPrint(0).then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint).catch(e=>{
    console.error(e);
})
