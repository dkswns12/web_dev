// async는 함수 앞에 붙이며 await이 꼭 들어가야함

// await은 해당 프로미스가 끝날때까지 기다렸다가 다음 작업을 수행
function sleep(ms){
    return new Promise((resolve)=>setTimeout(resolve, ms))
}


async function process(){
    console.log('시작');
    await sleep(1000);
    console.log('끝');
    return true;
}

// async 함수는 promise를 반환 하기에 then 사용 가능
process().then(val=>{
    console.log(val);
});

// throw를 통해 예외 발생

// 해당 예외는 catch 구문에서 처리
async function makeError(){
    await sleep(1000);
    const error=new Error('just_error');
    throw error;
}

async function process2(){
    try{
        await makeError();

    } catch(e){
        console.error(e);
    }
}

process2();