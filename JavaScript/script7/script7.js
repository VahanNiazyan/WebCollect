'use strict'

let arr = [4,9,7,3,2,5]
//
// let arr1 = arr.filter(function(item){
//    return item > 5
// })

// //let arr1 = arr.filter(x => x<6)

// console.log(arr1)
// ========================
// let arr2 = arr.reverse()
// console.log(arr2)


////========================
//
//let arr3 = arr.map((item,ind,arr)=>{
//    return item * 2
//})
//console.log(arr3)
//
//
//arr.forEach((item,ind,arr)=>{
//    return console.log(item+'/'+ind+'/'+arr)
//})
//
////==========================
//
//let a = arr.every((b)=>{
//    return b < 6
//})
//
//console.log(a)
//
//let c = arr.some((b)=>{
//    return b < 3
//})
//
//console.log(c)

////=========================

//let sum = arr.reduce((item,s)=>{
//    return s *= item
//},10)
//
//console.log(sum)

////=========================
//
//arr.sort((a,b)=>{
//    return b-a
//},10)
//
//console.log(arr)
//
//let str = ['as','xs','qe']
//str.sort()
//
//console.log(str)

////=========================
//
//function closures(){
//    let p = 0
//    function name(){
//        console.log(p)
//        p++
//    }
//    return name()
//}
//
//closures()

//========================

// rekursia

// 0 - n sum

function sum1(n){
    let s = 0;
    for(let i = 0; i < n;i++){
        s+= i
    }
    return s
}
console.log(sum1(4))

//function sum1(n){
//    if(n === 0){
//        return n
//    }else{
//        return n + sum1(n-1)
//    }
//}
//console.log(sum1(4))



//function minusTo1(x) {
    
//    let size = x;
//    
//    for(let i = 0; i <= size; i++){
//        
//       if(x === 0){
//           console.log("x: " + x);
//           break;
//       } else {
//           x--;
//       }
//        
//    }
//}
//
//function minusTo2(x) {
//    
//    while(x !== 0){
//       x--;
//    }
//    
//    console.log("x: " + x);
//
//}
//
//function minusTo3(x) {
//    
//    if(x < 0) {
//        console.log("x: " + x);
//        return;
//    }
//    
//    if(x === 0) {
//        console.log("x: " + x);
//    } else {
//        minusTo3(x - 1)
//    }
//}
//
////minusTo1(10)
////minusTo2(10)
//minusTo3(-10)
//minusTo3(10)



//.reduce




//function getSum(x){
//    if(x===1){
//        return x
//    }else{
//        return x = x + getSum(x-1)
//    }
//}
//
//alert(getSum(4))

//function getSum2(number) {
//    
//    let sum = 0;
//    
////    for(let k = 1; k <= number; k++) {
//    for(let k = number; k => 1; k--) {
//        sum += k;
//    }
//    
//    return sum;
//}
//
//alert(getSum2(4))
//
//
///////////////////////////////
//
//number *10
//if(0 < numer < 10) {
//    numer++ 
//} else {
//    Number --
//}


//tvats a 4 amenangam 4 avelana

// 4 -> 16
// 4+(4+4) + ((4+4)+4) + (((4+4)+4)+4)


//function sumX(defaultX, x, resultX) {
//    if(x <= defaultX * defaultX) {
//        resultX += x;
//        console.log("x: " + x + ", resultX: " + resultX);
//        return sumX(defaultX, defaultX + x, resultX);
//    } else {
//        return resultX;
//    }
//}
//
//console.log(sumX(4, 0, 0));


//function name(x){
//    if(x===1){
//        return 1
//    }else{
//        return x *= name(x-1)
//    }
//}
//alert(name(5))

//function name(x){
//    while{
//        let a
//    }
//}


//let arr1 = [9,5,6,8,7,4,5,2,1,];
//let arr2 = [8,7,6,3,5,8,4,2];
//let arr3 = [];
//
//for(let i = 0; i < arr1.length; i++){
////    let c = false;
//    for(let j = 0; j < arr2.length; j++){
//        if(arr1[i]===arr2[j]){
//           arr3.push(arr1[i])
//            break
//        }
//    }
//}
//console.log(arr3)

//let arr = [14,16,13,8,6,4,2];
//let max = NaN
//let max2 = NaN
//
//for(let i = 0; i < arr.length; i++){
//   
//    if(Number.isNaN(max)) {
//        max = arr[i]
//    } else if(max < arr[i]){
//        max2 = max;
//        max = arr[i];
//    } else if(Number.isNaN(max2) || max2 < arr[i]){
//        max2 = arr[i];
//    }
//}
////
//console.log(max2)
//
//// max  = 12   | max  = 3 | max  = 5 | max = 14 | max = 
//// max2 = Nan | max2 = 1 | max2 = 3 | max2 = 5 | max2 =













    
    