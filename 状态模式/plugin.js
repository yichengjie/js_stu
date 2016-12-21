var plugin = (function(){
    var plugin = document.createElement( 'embed' ) ;
    plugin.style.display = 'none' ;
    plugin.type = 'application/txftn-webkit' ;

    plugin.sign = function () {
        console.info( '开始文件扫描' ) ;
    }

    plugin.pause = function (){
        console.info( '暂停文件上传' ) ;
    }

    plugin.uploading = function () {
        console.info( '开始上传文件' ) ;
    }

    plugin.done = function () {
        console.info( '文件上传完成' ) ;
    }
    document.body.appendChild( plugin ) ;
    return plugin ;
})() ;

window.external.upload = function ( state ) {
    console.info ( state ) ;
}

export default plugin ;