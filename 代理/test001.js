var synchrnousFile = function (id) {
    console.info('开始同步文件id为 ： ' + id) ;
}

var proxySynchrnousFile = (function(){
    var cache = [] ;
    var timer = null ;
    return function (id) {
        cache.push(id) ;
        if(timer) {
            return ;
        }
        timer = setTimeout(function () {
            synchrnousFile(cache.join(',')) ;
            clearTimeout(timer) ;
            timer = null ;
            cache.length = 0 ;
        },2000) ;
    }
})() ;