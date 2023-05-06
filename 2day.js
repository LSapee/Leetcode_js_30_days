//JS
var createCounter = function(n) {
    let ans =n-1;
    return ()=> {
        ans += 1;
        return ans;
    };
};

//TS
// function createCounter(n: number): () => number {
//     let ans:number = n-1;
//     return ()=> {
//         return ans +=1;
//     }
// }

