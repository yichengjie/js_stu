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

    return clazz ;
};


var Person = new Class() ;

Person.extend({
    extended: function (clazz){
        console.info('clazz was extended ' ,clazz ) ;
    },
    find: function (id){
        console.info('查询id为['+id+']的person!') ;
    },
    exists: function (is){
        console.info('检查id为['+id+'的person是否存在!]') ;
    }
}) ;

var person = Person.find(100) ;


