var curry = function(fn) {
    return function curried(...args) {
        if(args.length>= fn.length)return fn(...args);
        return (...nxArgs) => curried(...args,...nxArgs);
    };
};