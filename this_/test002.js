function test(){
    console.info('hello test') ;
    this.a = 10 ;
    return function(){
        return 1 ;
    }
}

var a = new test() ;  
var b = test() ;
[new test()]
//运行结果a的值和b的值相同，都是test函数返回的闭包。
console.info("a : " ,a) ;
console.info("b : " ,b) ;
