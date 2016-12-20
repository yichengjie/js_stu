var Class = function () {
    var clazz = function () {
        this.init.apply(this,arguments) ;
    };
    clazz.prototype.init = function () {

    };
    //定义prototype的别名
    clazz.fn = clazz.prototype ;
    //定义类的别名
    clazz.fn.parent = clazz ;
    //给类添加属性
    clazz.extend = function (obj) {
        var extended = obj.extended ;
        for(var i in obj){
            clazz[i] = obj[i] ;
        }
        if(extended) extended(clazz) ;
    } ;

    //给示例添加属性
    clazz.include = function (obj) {
        var includeed = obj.includeed ;
        for(var i in obj) {
            clazz.fn[i] = obj[i] ;
        }
        if(includeed) includeed(clazz) ;
    } ;

    //添加一个proxy函数
    clazz.proxy = function (func) {
        var self = this ;
        return function () {
            return func.apply(self,arguments) ;
        }
    }
    //在实例中也添加这个函数
    clazz.fn.proxy = clazz.proxy ;

    return clazz ;
};


var Button = new Class() ;

Button.include({
    name:'yicj',
    init: function (element){
        this.element = $(element) ;
        // 代理了这个click函数
        this.element.click(this.proxy(this.handleClick)) ;
        //或则使用bind函数,效果与上面一样
        //this.element.click(this.click.bind(this)) ;
    },
    handleClick: function () {
        console.info('hello world : ' + this.name) ;
    }
}) ;




