var craeateHelloWorld = function() {
    return function(...args){
        return "Hello World";
    }
}

const func = craeateHelloWorld();
console.log(func());