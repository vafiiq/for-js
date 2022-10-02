"use strict"


// 1 - ex
// let n = +prompt('n =');
// let k = +prompt('k =');
// for (let x = 1; x <= n; x++) {
//     console.log(k);
// }


// 2 - ex
// let a = prompt('a=') * 1;
// let b = prompt('b=') * 1;

// for (let x = a; x <= b; x++) {
//     console.log(x);
// }

// 3 - ex
// let a = prompt('a=') * 1;
// let b = prompt('b=') * 1;
// for (let x = b; x >= a; x--) {
//     console.log(x);
// }



// 4 - ex
// let wealth = 10000;
// for (let kg = 1; kg <= 10; kg++) {
//     console.log(wealth * kg);
// }


// 5-ex
// let wealth = 10000;
// for (let kg = 1; kg <= 10; kg++) {
//     console.log(((kg / 10) * wealth));
// }


// 6-ex
// let wealth = 10000;
// for (let kg = 12; kg <= 20; kg++) {
//     console.log((kg / 10) * wealth);
// }



// function getComplexNumbers(n){
//     for(var i=2; i < n; i++){
//         var a = 0;
//         for( var j=1; j<= n/2   ; j++){
//             if(i%j == 0 && i>j){
//                 a++;
//             }
//         }
//         if(a>2){
//             console.log(i);
//         }
//     }
// }

// getComplexNumbers(100);


// function formula(n, x) {
//     var summ = 0;
//     for (let i = 0; i <= n; i++) {
//         for (let j = 0; j <= n; j++) {
//             var factorial = 1;
//             factorial = factorial * j;
//             console.log("fac", factorial);
//         }
//         summ = summ + Math.pow(x, i) / factorial;
//     }
//     console.log("sum:", summ);
// }
// formula(1, 2)