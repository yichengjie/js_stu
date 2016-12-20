//var $ = require('jquery') ;
$(function(){
    $(".clazz").bind('refresh.widget',function(){
        console.info('refresh.widget ... ') ;
    })

    $(".clazz").trigger('refresh.widget') ;
}) ;