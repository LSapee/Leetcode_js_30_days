var timeLimit = function(fn, t) {
    return async function(...args) {
        const errAns = new Promise((resolve,reject)=>{
            setTimeout(()=>reject("Time Limit Exceeded"),t)
        });
        const ans = fn(...args);
        return Promise.race([errAns,ans]);
    }
};
