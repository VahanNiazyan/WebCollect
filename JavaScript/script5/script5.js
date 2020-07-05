'use strich'

const { array } = require("prop-types")

//
//let size = 10;
//let range = 10;
//let arr = [];

//let a = 0;
//let b = 0;
//
//for(i = 0; i < size; i++){
//    
//    let rundomElement = Math.round(Math.random() * range);
//    let rundomInt = Math.round(Math.random());
//    
//    rundomInt = 0;
//    
//    let isNegative = false;
//    if(rundomInt === 1) {
//        isNegative = true;
//    }
//
//    if((isNegative && b < size/2) || a === size/2) {
//        rundomElement = -1 * rundomElement;
//    }
//    
//    if(rundomElement >= 0) {
//        ++a;
//    } else {
//        ++b;
//    }
//    
//    arr.push(rundomElement);
//}
//  
//console.log(arr)

////////////////////////////////////////


//let size = 10;
//let range = 10;
//let arr = [];
//
//for(let i = 0; i < size; i++){
//    if(i < size/2){
//         let element = Math.round(Math.random() * range)
//        arr.push(element)
//    }else{
//        let element_i = arr[size-i-1]
//        arr.push(element_i)
//    }
//}
//console.log(arr)
//



//////////////////////////////////////////

//
//function max(arr){
//   let max = arr[0];
//    for(let i = 0 ; i < arr.length;i++){
//        if(arr[i] > max){
//            max = arr[i]
//        }
//    }
//    return max
//}
//
//document.write(max([5,12,4,78,5,9,5]))



//////achman karg@

// for(let i = 0; i < arr.length; i++){
//     for(let j = i; j < arr.length; j++){
//         if(arr[i] > arr[j]) {
//             let t = arr[i];
//             arr[i] = arr[j];
//             arr[j] = t;
//             arr.push(t)
//         }
//     }
// }

// console.log(arr)

// let arr = []

// for (let c = 0; c < 10; c++) {
//     let b = Math.round(Math.random() * 10)
//     arr.push(b)
// }
// let m = []
// // console.log(arr)
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             let v = arr[i]
//             arr[i] = arr[j]
//             arr[j] = v
//             m.push(v)
//         }
//     }
// }
// console.log(m)
let arr = [5,12,4,78,5,9,5]
let a = 0
for(let i = 0; i < arr.length;i++){
    if(arr.length > a){
    a = arr[arr.length-i-1]
    }
}
console.log(a)

x1 = "1, 5, 6, 8, 4, 9"
x2 = "1, 5, 4, 4, 6, 8, 4, 9"

x2-x1
"ekke aassaa olpooplo"