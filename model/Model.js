var Model = {
    inherited: function () {
        console.info('Model is inherited ... ') ;
    },
    created: function () {
        console.info('Model is created .... ') ;
    } ,
    prototype:{
        init: function (){}
    },
    //create()函数返回一个新对象，这个对象继承自Model对象，我们使用它来创建新模型
    create: function () {
       // console.info('create this : ', this) ;
        var object = Object.create(this) ;
        object.parent = this ;
        object.prototype = object.fn = Object.create(this.prototype) ;
        object.created() ;
        this.inherited(object) ;
        return object ;
    },
    //init()函数返回一个新对象，他继承自Model.prototype，如Model对象的一个实例
    init: function () {
        var instance = Object.create(this.prototype) ;
        instance.parent = this ;
        instance.init.apply(instance,arguments) ;
        return instance ;
    }
} ;

var Asset = Model.create() ;
var User = Model.create() ;


var user = User.init() ;
console.info('user : ' , JSON.stringify(user) ) ;