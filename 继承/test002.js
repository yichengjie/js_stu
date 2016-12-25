//原型是继承
function inheritObject (o) {
    //声明一个过渡对象
    function F () {} 
    //过渡对象的原型继承父对象
    F.prototype = o ;
    //返回过渡对象的一个实例，该实例的原型继承了父对象
    return new F() ;
}
/**
 * 寄生式继承，继承原型
 * param : subClass 子类
 * param : superClass 父类
 */
function inheritPrototype (subClass,superClass) {
    //复制一份父类的原型副本保存在变量中
    var p = inheritObject(superClass.prototype) ;
    //修正因为重写子类原型导致的子类contructor属性被修改
    p.constructor = subClass ;
    //设置子类的原型
    subClass.prototype = p ;
}


function SuperClass (name) {
    this.name = name ;
    this.colors = ['red','blue','green'] ;
}

SuperClass.prototype.getName = function () {
    return this.name ;
} ;

function SubClass (name,time) {
    SuperClass.call(this,name) ;
    this.time = time ;
}

//寄生式继承父类的原型
inheritPrototype(SubClass,SuperClass) ;

//子类现在原型方法
SubClass.prototype.getTime = function () {
    return this.time ;
} ;
//console.info('33333333333333 : ' ,SubClass.constructor) ;
//创建两个测试方法
var instance1 = new SubClass('js book' , 2014) ;
var instance2 = new SubClass('css book' , 2013) ;

instance1.colors.push('black') ;
console.info('instance1 name : ' ,instance1.getName()) ;
console.info('instance1 time : ' ,instance1.getTime()) ;
console.info('instance1 colors : ' , instance1.colors) ;
console.info('-------------------------------------------------') ;
console.info('instances name : ' ,instance2.getName()) ;
console.info('instance2 time : ' ,instance2.getTime()) ;
console.info('instance2 colors : ' , instance2.colors) ;



