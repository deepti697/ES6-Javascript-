function greet(name,callback){
    console.log('Hi :'  +  ' ' + name);
    callback();
}

function callMe(){
    console.log('I am a callback function....')
}
greet ('alex', callMe)