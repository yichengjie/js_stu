var n = 'hello world' ;
function example(){
    this.test ="test" ;
    console.info('----------------> ' + this.n +"--->  " + this.test ) ;
}
var o = {} ;
o.n = 'hey~' ;
o.m = example ;
o.m.apply() ;
