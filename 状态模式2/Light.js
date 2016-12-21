var OffLightState = function ( light ) {
    this.light = light ;
}
OffLightState.prototype.buttonWasPressed = function (){
    console.info('弱光') ;
    this.light.setState(this.light.weakLight) ;//切换状态到weakLightState
}

var WeakLightState = function ( light ) {
    this.light = light ;
}
WeakLightState.prototype.buttonWasPressed = function (){
    console.info('强光') ;
    this.light.setState(this.light.strongLightState) ;//切换状态到weakLightState
}

var StrongLightState = function ( light ) {
    this.light = light ;
}
StrongLightState.prototype.buttonWasPressed = function (){
    console.info('关灯') ;
    this.light.setState(this.light.offLightState) ;//切换状态到weakLightState
}

var Light = function () {
    this.offLightState = new OffLightState(this) ;
    this.weakLightState = new WeakLightState(this) ;
    this.strongLightState = new StrongLightState(this) ;
    this.button = null ;
}

Light.prototype.init = function () {
    var button = document.createElement( 'button' ) ;
    var self = this ;
    this.button = document.body.appendChild(button) ;
    this.button.innerHTML = '开灯' ;
    this.currState = this.offLightState ;//设置当前状态
    this.button.onclick = function () {
        self.currState.buttonWasPressed() ;
    }
}

Light.prototype.setState = function (state) {
    this.currState = state ;
}

//测试代码
var light = new Light () ;
light.init() ;


