var once = function(fn) {
    let called =false;
    return function(...args){
        if(called){
            return undefined;
        }else{
            called = true;
            return fn(...args);
        }
    }
};

//함수가 호출되었을때 처음이면 인자값을 더한 값을 반환하고 처음이 아니면 undefined를 반환


//TS
// function once<T extends (...args: any[]) => any>(fn: T):
// ((...args: Parameters<T>) => ReturnType<T> | undefined) {
//     let called: boolean = false;
//     return function (...args) {
//         if(called){
//             return undefined;
//         }else{
//             called=true;
//             return fn(...args);
//         }
//     };
// }