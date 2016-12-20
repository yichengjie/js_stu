var proxy = function (func ,thisObject) {
    return function () {
        return func.apply(thisObject,arguments) ;
    } ;
}

var clicky = {
    name:'yicj',
    wasClicked: function () {
        console.info('hello world ' + this.name) ;
    },
    addListeners: function () {
        $('.clicky').click(proxy(this.wasClicked,this)) ;
    }
} ;