
var compose = function(functions) {
    return function(x) {
        // x는 숫자 입력값
        if(functions.length ===0) return x;
        let input =x;
        for(let i= functions.length-1; i>=0;i--){
            // k는 함수
            const k = functions[i];
            //input은 k함수를 거치고 나온 숫자.
            input = k(input);

        }
        return input;
    }
};

// reduceRight 라는걸 처음봄
// var compose = function(functions) {
//     return (x)=>functions.reduceRight((acc,f)=>f(acc),x);
//x값을 acc에 할당하고 f에 함수를 할당 -> f(acc)를 거쳐서 나온 값을 x로 반환
// };


// TS
// type F = (x: number) => number;
//
// function compose(functions: F[]): F {
//     return function(x) {
//         if(functions.length===0)return x;
//         let ans = x;
//         for(let i=functions.length-1; i>=0; i--){
//             let k = functions[i];
//             ans = k(ans);
//         }
//         return ans;
//     }
// };

//문제 의도 !
// 함수를 인자 값으로 받을 때 계산! (JS는 함수가 일급 객체라 가능!~)

