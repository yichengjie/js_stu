var Book = (function () {
    //静态私有变量
    var bookNum = 0 ;
    //静态私有方法
    function checkBook (name) {

    }
    //返回构造函数
    return function (newId,newName,newPrice) {
        //私有变量
        var name ,price ;
        //私有方法
        function checkID (id) {}
        //特权方法
        this.getName = function () {} ;
        this.getPrice = function () {} ;
        this.setName = function () {} ;
        this.setPrice = function () {} ;
        //共有属性
        this.id = newId ;
        //公有方法
        this.copy = function () {} ;
        bookNum ++ ;
        if(bookNum > 100) {
            throw new Error('我们仅出版100本书.') ;
        }
        //构造器
        this.setName(name) ;
        this.setPrice(price) ;
    }
})() ;

Book.prototype = {
    //静态公有属性
    isJSBook : false,
    display : function () {}
} ;

var isJSBook = Book.isJSBook ;
console.info('isJSBook : ' + isJSBook) ;
//实例化对象
var book = new Book() ;
console.info('isJSBook flag 2 : ' + book.isJSBook) ;


console.log("%c\n       ", "font-size:41px;background:url('http://cdn.iknow.bdimg.com/static/common/pkg/module_zed9cd9fd.png') no-repeat -135px -1px") ;