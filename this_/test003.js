Function.prototype.before = function( beforeFn ){
    var  _self = this ;
    //console.info('this [1] : ', beforeFn) ;
    return function () {
        //console.info('this [2] : ' , this) ;
        beforeFn.apply( this,arguments ) ;
         //这里动态传入this，保证了函数在被装饰之后，this不会被劫持
        return _self.apply( this,arguments ) ;
        //注意一定要将this传递进去，下面代码不对
        // return _self.apply( null,arguments ) ;
    }
}

var obj = {name:'yicj',a:function(){
    console.info('func a has executed ... ' + this.name) ;
}} ;


obj.a = obj.a.before(function(){
    console.info('helle world ...') ;
}) ;
//注意这里不能直接掉a否则没有任何效果，因为当调用before才会返回一个新的闭包func
obj.name = 'test001' ;
obj.a();