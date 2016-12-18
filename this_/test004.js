Function.prototype.after = function( afterFn ){
    var _self = this ;
    return function () {
        var ret = _self.apply(this,arguments) ;
        afterFn.apply(this,arguments) ;
        return ret ;
    }
}

var showLogin = function () {
    console.info('打开登录浮层') ;
}

var log = function () {
    console.info('上报标签为 : xxx') ;
}

showLogin = showLogin.after(log) ;

showLogin() ;