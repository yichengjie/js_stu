var Book = (function () {
    //静态私有变量
    var bookNum = 0 ;
    //静态私有方法
    function checkBook (name) {}
    //创建类
    function _book (newId,newName,newPrice) {
        //私有变量
        var name ,price ;
        //私有方法
        function checkID (id) {}
        //特有方法
        this.getName = function () {} ;
        this.getPrice = function () {} ;
        this.setName = function () {} ;
        this.setPrice = function () {} ;
        //公有属性
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
    //构造原型
    _book.prototype = {
        //静态公有属性
        isJSBook: false,
        display: function () {}
    };
     //返回类
    return _book ;
})() ;

var isJSBook = Book.isJSBook ;
console.info('isJSBook : ' + isJSBook) ;
var book = new Book() ;
console.info('isJSBook flag 2 : ' + book.isJSBook) ;