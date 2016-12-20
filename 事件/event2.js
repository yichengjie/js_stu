jQuery.fn.tabs = function (control) {

    var element = $(this) ;
    control = $(control) ;

    element.delegate("li", "click", function () {
        //遍历选项卡名称
        var tabName = $(this).attr('data-tab') ;
        //在点击选项卡时触发自定义事件
        element.trigger('change.tabs',tabName) ;
    }) ;

    element.bind("change.tabs", function (e,tabName) {
        element.find("li").removeClass('active')  ;
        element.find(">[data-tab='"+tabName+"']").addClass('active') ;
    }) ;

    element.bind("change.tabs", function (e,tabName) {
        control.find('>[data-tab]').removeClass('active') ;
        control.find('>[data-tab="'+tabName+'"]').addClass('active') ;
    }) ;

    //激活第一个选项卡
    var firstName = element.find("li:first").attr('data-tab') ;
    element.trigger('change.tabs',firstName) ;

    return this ;
} ;


$("ul#tabs").tabs("#tabContent") ;
//程序中可以直接更改选项卡的状态，只需要触发观察列表的change.tabs事件即可
$("#tabs").trigger("change.tabs","users") ;
//同时，可以将选项卡的动作和窗口的hash做关联，这样就开始使用浏览器的后退按钮了:
$("#tabs").bind("change.tabs", function (e, tabName) {
    window.location.hash = tabName ;
}) ;

$(window).bind('hashchange', function () {
    //slice去掉字符串的第一个字符#
    var tabName = window.location.hash.slice(1) ;
    $("#tabs").trigger('change.tabs',tabName) ;
}) ;