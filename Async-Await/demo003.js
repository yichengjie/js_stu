var sleep = function (timeout) {
    return new Promise(function (resolve,reject) {
        setTimeout(function() {
            //模拟出错，返回'error'
            resolve('ok') ;
        }, timeout);
    }) ;
}

var start = async function () {
    for (var i = 1; i <= 10; i++) {
        console.log(`当前是第${i}次等待..`);
        let result = await sleep(1000);
    }
};

start() ;