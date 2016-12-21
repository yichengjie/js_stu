import plugin from './plugin.js' ;

var Upload = function ( fileName ) {
    this.plugin = plugin ;
    this.fileName = fileName ;
    this.button1 = null ;
    this.button2 = null ;
    this.signState = new SignState( this ) ;//设置初始状态为waiting
    this.uploadingState = new UploadingState( this ) ;
    this.pauseState = new PauseState( this ) ;
    this.doneState = new DoneState( this ) ;
    this.errorState = new ErrorState( this ) ;
    this.currState = this.signState ;//设置当前的状态
}
//
Upload.prototype.init = function () {
    var that = this ;
    this.dom = document.createElement( 'div' ) ;
    this.dom.innerHTML = '<span>文件名称:'+this.fileName+'</span>'+
    '<button data-action ="button1">扫描中</button>'+
    '<button data-action = "button2">删除</button>' ;
    document.body.appendChild( this.dom ) ;
    this.button1 = this.dom.querySelector( '[data-action="button1"]' ) ;
    this.button2 = this.dom.querySelector( '[data-action="button2"]' ) ;
    this.bindEvent() ;
}

Upload.prototype.bindEvent = function () {
    var self = this ;
    this.button1.onclick = function () {
        self.currState.clickHandle1() ;
    }
    this.button2.onclick = function () {
        self.currState.clickHandle2() ;
    }
}

Upload.prototype.sign = function () {
    this.plugin.sign() ;
    this.currState = this.signState ;
}

Upload.prototype.uploding = function () {
    this.button1.innerHTML = '正在上传，点击暂停' ;
    this.plugin.uploding() ;
    this.currState = this.uploadingState ;
}

Upload.prototype.pause = function () {
    this.button1.innerHTML = '已暂停，点击继续上传' ;
    this.plugin.pause() ;
    this.currState = this.pauseState ;
}

Upload.prototype.done = function () {
    this.button1.innerHTML = '上传完成' ;
    this.plugin.done() ;
    this.currState = this.doneState ; 
}

Upload.prototype.error = function () {
    this.button1.innerHTML = '上传失败' ;
    this.currState = this.errorState ;
}

Upload.prototype.del = function () {
    this.plugin.del() ;
    this.dom.parentNode.removeChild( this.dom ) ;
}

var StateFactory = (function () {
    var State = function () {} ;
    State.prototype.clickHandle1 = function () {
        throw new Error( '子类必须重写父类的clickHandle1方法' ) ;
    }
    State.prototype.clickHandle2 = function () {
        throw new Error( '子类必须重写父类的clickHandle2方法' ) ;
    }
    return function ( param ) {
        var F = function (uploadObj) {
            this.uploadObj = uploadObj ;
        }
        F.prototype = new State() ;
        for(var i in param) {
            F.prototype[i] = param[i] ;
        }
        return F ;
    } 
})() ;

var SignState = StateFactory({
    clickHandle1: function () {
        console.info( '扫描中，点击无效....' ) ;
    },
    clickHandle2: function () {
        console.info( '文件正在上传，不能删除' ) ;
    }
}) ;

var UploadingState = StateFactory({
     clickHandle1: function () {
       this.uploadObj.pause() ;
    },
    clickHandle2: function () {
        console.info( '文件正在上传，不能删除' ) ;
    }
}) ;

var PauseState = StateFactory({
     clickHandle1: function () {
       this.uploadObj.uploding() ;
    },
    clickHandle2: function () {
       this.uploadObj.del() ;
    }
}) ;

var DoneState = StateFactory({
     clickHandle1: function () {
       console.info('文件已经上传完成，点击无效') ;
    },
    clickHandle2: function () {
       this.uploadObj.del() ;
    }
}) ;

var ErrorState = StateFactory({
     clickHandle1: function () {
       console.info('文件上传失败，点击无效') ;
    },
    clickHandle2: function () {
       this.uploadObj.del() ;
    }
}) ;

var uploadObj = new Upload( 'javascript设计模式与开发实战' ) ;
uploadObj.init() ;

window.external.upload = function ( state ) {
    uploadObj[state]() ;
}

window.external.upload( 'sign' ) ;

setTimeout(function(){
    window.external.upload( 'uploading' ) ;
},1000) ;

setTimeout(function(){
    window.external.upload( 'done' ) ;
},3000) ;