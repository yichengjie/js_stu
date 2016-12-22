var sleep = function (timeout) {
    return new Promise(function (resolve,reject) {
        setTimeout(function() {
            //模拟出错，返回'error'
            resolve('ok') ;
        }, timeout);
    }) ;
}


//值得注意的是， await 必须在 async函数的上下文中 的。

// 正确示范
var start = async function () {
    let arr = [1,2,3,4,5,6,7,8,9,10];
    for(var v of arr) {
        console.log(`当前是第${v}次等待..`);
        await sleep(1000); // 正确, for循环的上下文还在async函数中
    }
}
 // 错误示范
var start2 = async function () {
    let arr = [1,2,3,4,5,6,7,8,9,10];
    arr.forEach(function (v) {
        console.log(`当前是第${v}次等待..`);
        await sleep(1000); // 错误!! await只能在async函数中运行
    });
    //下面的也不能运行
    // arr.forEach((v) => {
    //     console.log(`当前是第${v}次等待..`);
    //     await sleep(1000); // 错误!! await只能在async函数中运行
    // });
}

start2() ;
