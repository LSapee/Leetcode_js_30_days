function memoize(fn) {
    const c ={};
    return function(...args) {
        const key = JSON.stringify(args);
        if(key in c){
            return c[key];
        }
        const ans =fn(...args);
        c[key] = ans;
        return ans;
    }
}

//ㄴㅏ중에 다른 풀이 살펴볼것 1줄짜리 신기했었기에

//TS
// type Fn = (...params: any) => any
//
// function memoize(fn: Fn): Fn {
//     let c={};
//     return function(...args) {
//         const key = JSON.stringify(args);
//         if(key in c){
//             return c[key];
//         }
//         const ans = fn(...args);
//         c[key] = ans;
//         return ans;
//     }
// }
