//原型是继承
function inheritObject (o) {
    //声明一个过渡对象
    function F () {} 
    //过渡对象的原型继承父对象
    F.prototype = o ;
    //返回过渡对象的一个实例，该实例的原型继承了父对象
    return new F() ;
}

//寄生式继承
var book = {
    name:"js book", 
    alikeBook:['css book', 'html book']
} ;

function createBook (obj) {
    //通过原型继承方式创建新对象
    var o = new inheritObject(obj) ;
    //拓展新对象
    o.getName = function () {
        console.info('name : ' + this.name) ;
    }
    //返回拓展后的新对象
    return o ;
}





// function F () {

// }
// F.prototype = {
//     a:function(){}
// } ;
// console.dir( F.constructor ) ;
//console.info( JSON.stringify(F.constructor)  ) ;