var nextFlagStr = 'nextSuccessor' ;
var Chain = function(fn){
    this.fn = fn ;
    this.successor = null ;
}
Chain.prototype.setNextSuccessor = function(successor){
    return this.successor = successor ;
    //return this.successor ;
}
Chain.prototype.passRequest = function(){
    //console.info('args : ' , arguments) ;
    var ret = this.fn.apply(this,arguments) ;
    if(ret === nextFlagStr){
       // return this.successor && this.successor.passRequest.apply(this.successor,arguments) ;
       return this.successor && this.successor.passRequest.apply(this.successor,arguments) ;
    }
    return ret ;
}
Chain.prototype.next = function(type,name,addr){
    return this.successor && this.successor.passRequest.apply(this.successor,arguments) ;
}

var fn1 = new Chain(function(type,name,addr){
    var _self = this ;
    var args = arguments ;
    setTimeout(function(){
        _self.next.apply(_self,args) ;
    },1000) ;
    //console.info('1' + " , type : " ,arguments) ;
    //return nextFlagStr ;
}) ;

var fn2 = new Chain(function(type,name,addr){
    console.info('2' + " , type : " ,arguments) ;
    //var ccc = arguments ;
    setTimeout(()=>{
        this.next.apply(this,arguments) ;
    },1000) ;
   // return nextFlagStr ;
}) ;

var fn3 = new Chain(function(type,name,addr){
     console.info('3' + " , type : " ,arguments) ;
}) ;
fn1.setNextSuccessor(fn2).setNextSuccessor(fn3) ;
//运行
fn1.passRequest('F','yicj','henan') ;

