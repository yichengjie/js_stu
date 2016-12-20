jQuery.fn.tabs = function (control) {
    var element = $(this) ;
    control = $(control) ;
    element.find("li").bind("click", function () {
        //从列表项中添加或删除active类
        element.find('li').removeClass('active') ;
        $(this).addClass('active') ;
        //给tabContent添加或删除active
        var tabName = $(this).attr('data-tab') ;
        control.find(">[data-tab]").removeClass('active') ;
        control.find(">[data-tab='"+tabName+"']").addClass('active') ;
    }) ;
    //激活第一个选项卡
    element.find('li:first').addClass('active') ;
    //返回this以后可以链式调用
    return this ;
}

$("ul#tabs").tabs("#tabContent") ;