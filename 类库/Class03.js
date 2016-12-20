//给类库添加继承
var Class = function (parent) {
    var clazz = function () {
        this.init.apply(this,arguments) ;
    };

    //改变clazz的原型
    if(parent){
        var Subclass = function () {

        } ;
        Subclass.prototype = parent.prototype ;
        clazz.prototype = new Subclass() ;
    }
    clazz.prototype.init = function () {

    };
    //定义prototype的别名
    clazz.fn = clazz.prototype ;
    //定义类的别名
    clazz.fn.parent = clazz ;
    clazz._super = clazz.__proto__ ;
    console.info('__proto__ : ' , __proto__) ;

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

var Animal = new Class ;

Animal.include({
    breath: function () {
        console.info('breath ... ') ;
    }
}) ;

var Cat = new Class(Animal) ;

//用法
var tommy = new Cat ;
tommy.breath () ;




