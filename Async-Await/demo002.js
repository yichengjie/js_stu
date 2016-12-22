var sleep = function (timeout) {
    return new Promise(function (resolve,reject) {
        setTimeout(function() {
            //模拟出错，返回'error'
            reject('error info ...') ;
        }, timeout);
    }) ;
}

var start = async function () {
    try {
        console.info('start ...') ;
        await sleep(3000) ;//这里得到一个返回错误
        //所以下面的代码不会被执行
    } catch (error) {
       console.error(error) ; //这里捕捉到错误 'error info ...'
    }
}

start() ;