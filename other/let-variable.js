+function test01(){
    var foo = true ;
    if(foo){
        var bar = foo * 2 ;
        //let bar = foo * 2 ;
        // bar = something(bar) ;
        console.info(bar) ;
    }

    //为什么let就会显示0,1,2,3,4
    for(var i = 0 ; i < 5 ; i ++ ){
        setTimeout(function(){
            console.info(i) ;
        },0) ;
    }

    console.info(bar) ;
}() ;