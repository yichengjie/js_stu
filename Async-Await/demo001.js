var sleep = function (timeout) {
    return new Promise(function (resolve,reject) {
        setTimeout(function() {
            resolve('ok') ;
        }, timeout);
    }) ;
}

var start = async function (){
    //这里使用起来就像同步代码一样直观
    console.log('start ...') ;
    let result = await sleep(3000) ;
    console.info('end result ['+result+'] ...') ;
}

start() ;