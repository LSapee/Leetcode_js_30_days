var createCounter = function(init) {
    let k = init;
    return {
        increment:() => {
            return k+=1;
        },
        decrement:()=>{
            return k-=1;
        },
        reset:()=>{
            k=init;
            return k;
        }
    }
};

const ans = createCounter(10);
console.log(ans.decrement());
console.log(ans.increment());
console.log(ans.reset());
console.log(ans.increment());

// type ReturnObj = {
//     increment: () => number,
//     decrement: () => number,
//     reset: () => number,
// }
//
// function createCounter(init: number): ReturnObj {
//     let k = init;
//     return{
//         increment:function(){
//             return k+=1;
//         },
//         decrement:function(){
//             return k-=1;
//         },
//         reset:function(){
//             k=init;
//             return k;
//         }
//     }
// };