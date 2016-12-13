var nextFlagStr = 'nextSuccessor' ;

var order500 = function(orderType,pay,stock){
    if(orderType ===1 && pay ===true){
        console.info('500元定金购买，得到100元优惠券') ;
    }else{
        return  nextFlagStr ;
    }
}
var order200  = function(orderType,pay ,stock){
    //console.info('orderType : ' ,orderType) ;
    //console.info('pay : ' ,pay) ;
    //console.info('stock : ', stock) ;
    if(orderType === 2 && pay === true){
        console.info('200元定金预定，得到50元优惠券') ;
    }else{
        return nextFlagStr ;
    }
}

var orderNormal = function(orderType,pay,stock){
    if(stock >0 ){
        console.info('普通购买,无优惠券') ;
    }else{
        console.info('手机库存不足') ;
    }
}

var Chain = function(fn){
    this.fn = fn ;
    this.successor = null ;
}
Chain.prototype.setNextSuccessor = function(successor){
    this.successor = successor ;
    //return this.successor ;
}

Chain.prototype.passRequest = function(...args){
    //console.info('args : ' , arguments) ;
    var ret = this.fn.apply(this,args) ;
    if(ret === nextFlagStr){
       // return this.successor && this.successor.passRequest.apply(this.successor,arguments) ;
       return this.successor && this.successor.passRequest.apply(this.successor,args) ;
    }
    return ret ;
}

var chain500 = new Chain(order500) ;
var chain200  = new Chain(order200) ;
var chainNormal = new Chain(orderNormal) ;

chain500.setNextSuccessor(chain200) ;
chain200.setNextSuccessor(chainNormal) ;

chain500.passRequest(1,true,500) ;
console.info('--------------------------------') ;
chain500.passRequest(2,true,500) ;
console.info('--------------------------------') ;
chain500.passRequest(3,true,500) ;
console.info('--------------------------------') ;
chain500.passRequest(1,false,0) ;