// 동기적 처리는 작업의 순서대로 끝날 때까지 다른 작업은 중지

// 비동기적 처리는 동시에 여러가지 작업을 하며, 기다리는 과정에서 다른 함수 호출 가능

// setTimeOut 함수는 작업을 백그라운드에서 수행하기에 수행되는 동안 다른 함수 호출 가능

// 첫째 파라미터는 작업할 함수 내용을 두번째 파라미터는 지정한 시간 이후에 실행되도록하는 파라미터(0==4ms)
function work(){
    setTimeout(()=>{
        const start=Date.now();
        for(let i=0; i<10000; i++){

        }

        const end=Date.now();

        console.log(end-start+'ms');

    },0);
}

console.log('작업시작');
work();
console.log('다음 작업');

// 콜백함수를 통해서 인자로 입력한 함수가 함수에 callback으로 전달되어 callback 안의 파라미터값을 기반으로 함수 수행
// 콜백함수는 비동기 처리 함수를 마친 후 뒤의 작업을 진행
function work_callback(callback){
    setTimeout(()=>{
        const start=Date.now();
        for(let i=0; i<10000; i++){

        }

        const end=Date.now();

        console.log(end-start+'ms');
        callback(end-start);
    },0);
}

console.log('작업시작');
work_callback((ms)=>{
    console.log(ms+'ms 걸림');
});
console.log('다음 작업');


