'use strict'

// const { i } = require("mathjs");

// 1-amenametsn u naxaverji mets@

//   let d = 0
//    let b = 0
//    let main = [9, 7, 5, 10, 5, 1, 9, 2, 3, 13,8]

//    for (let j = 0; j < main.length; j++) {
//        if (main[j] > d){
//        d = main[j]
//        b = main[main.length - j-1]
//        }
//    }
// console.log(d)
//    console.log(b)
//    console.log(main)


//2-  +  gumarn a buttnnerov

// let btn = document.querySelector('.sum')
// let btn1 = document.querySelector('.sum1')

// function sum(Plus) {
//     let inp1 = +document.getElementById('num1').value
//     let inp2 = +document.getElementById('num2').value
//     let p = document.querySelector('p')

//     let x

//     if(Plus === true) {
//         x = inp1 + inp2
//     } else {
//         x = inp1 - inp2
//     }

//     console.log('x: ' + x)
//     p.innerText = x
// }


// btn.onclick = function() {
//     sum(true);
// };
// btn1.onclick = function() {
//     sum(false);
// };

//3-texerov vor@ klni

// let a = prompt();
// let b = prompt();
// let c = prompt();

// if(a>b && a>c){
// 	if(b>c){
// 		console.log(c+','+ b +','+a)
// 	}else{
// 		console.log(b+','+ c +','+a)
// 	}

// }else if(b>a && b>c){
// 	if(a>c){
// 		console.log(c+','+ a +','+b)
// 	}else{
// 		console.log(b+','+ c +','+a)
// 	}
// }else{
// 	if(a>b){
// 	consol.log(a+','+ b +','+c)
// }else{
// 	consol.log(b+','+ a +','+c)
// }
// }

//իմ գրածները

// let a = prompt();


// if(a>=0 && a<10){
// 		console.log('mianish tiv e')
// }else if(a>=10 && a<100){
// 	console.log('erkanish tiv e')
// }else if(a>=100 && a<1000){
// 	console.log('eranish tiv e')
// }else{
// 	console.log('bacasakan tiv e')
// }


//4- qarakusi armat

// let a=2, b=5, c=3;

// let d=Math.pow(b,2)-4*a*c;
// //console.log(d)
// if(a!==0){
// 	if(d<0){
// 		alert('lucum chuni')
// 	}else if(d===0){
// 		let x=-b/2*a;
// 		alert('x'+x)
// 	}else{
// 		let x1 = (-b+Math.sqrt(d))/2*a;
// 		let x2 = (-b-Math.sqrt(d))/2*a;
// 	alert('x1='+x1+', x2'+x2)
// 	}
// }else{
// 	alert('a=0')
// }


// let a = 1, b = 1, c = 143;

// let d = Math.pow(b,2) - 4 * a * c;

// // console.log(d)
// if(a !== 0){
//    if(d < 0){
//       alert('lucum chuni')
//    }else if(d === 0){
//        let x = -b/2*a;
//        alert('x = '+ x)
//    }else{
//        let x1 = (-b + Math.sqrt(d))/2*a;
//        let x2 = (-b - Math.sqrt(d))/2*a;

//        alert('x1 = '+ x1 + '; x2 = ' + x2)

//    }

//x²-3x-10=0
// let a=1;
// let b=-3;
// let c=-10;

// let d=Math.pow(b,2)-4*a*c;

// if(a !== 0 ){
//     if(d<0){
// 		alert('lucum chka')
// 	}else if(d===0){
// 		let x=-b/2*a;
// 		alert('x= '+x)
// 	}else{
// 		let x1=(-b+Math.sqrt(d))/2*a;
// 		let x2=(-b-Math.sqrt(d))/2*a;
// 		alert(' x1= '+x1+', x2= '+x2)
// 	}
// }else{
//    alert('a=0')
// }


////zuygeri gumarum
// let a=0;

// for(let i=0;i<20;i+=2){
//    a=a+i;
// }
// console.log(a);



//1-100 parz tveri gumar@

// for(let i = 2; i < 100 ; i++){
//    let xt = false;
//        for(let j = 2; j < i; j++){
//        if(i % j === 0) {
//       xt = true;
//         break;
//        }
//        }
//     if(!xt){
//      console.log(i); 
//        }
//    }

////5- ********* xndir@

// let str = "";
// let Nx = 5;
// let Ny = 5;

// for( let i = 0  ; i < Ny ;  i++ ) {

//    for(let j = 0; j < Ny; j++) {
//        if(i === 0 || i === Ny - 1) {
//            str += " *"
//        } else {

//            if(j === 0 || j === Nx - 1) {
//                str += " *"
//            } else {
//                str += "  "
//            }

//        }
//    }

//    str += "\n"
// }

// console.log(str);


////sa 2 fori frracnelu dzeveric a

// for( let i = 0  ; i < 5 ;  i++ ) {

//    for(let j = 0; j < 10; j++) {

//        console.log("oooooo");


//        if(i === j) {
// //            break;
//            continue;
//        }

//          console.log("i: " + i + ", j: " + j);

//        if(i === j) {
//            break;
//        }

// //         i: 0, j: 0
// //         oooooo
// //         i: 0, j: 1
// //         oooooo
// //         i: 0, j: 2
// //         i: 0, j: 3
// //         i: 0, j: 4
// //        
//    }

//    console.log("xxxx");

// }


// astxanisher

// let str ="";
// let x = 5;
// let y = 5;
// let z = 5;

// for(let i = 0; i < y; i++){
//    for(let j = 0; j < y ; j++){
//        if(i === 0 || i !== y - 3 || i !== y - 2 || y !== x -1)
//           {
//           str +=" *"

//        }else{
//            if(j === 0  || j !== y -4  || j !== y - 3 )
//            {
//               str +=" *"
//            }//else if(i === y-4){

// //                    str = " ****";

//                }             
//        }
//    str += "\n"
// }
// console.log(str)


// stringi u tveri gumar@

// let arr = [87,65,'red',54,'blue',false]
// let num =0;
// let str =0;

// for(let i=0; i<arr.length; i++){
//    let type = typeof arr[i]
//    if(type === 'number'){
//        num++
//    }else if(type === 'string'){
//        str++
//    }
// }
// alert(num+' , '+str)





// let b=10
// let arr=[]
// for(let i=0;i<b;i++){
//     if(i < b/2){
//     arr.push(i)
//     }else{
//         let c = arr[b-i-1]
//         arr.push(c)
//     }
// }
// console.log(arr)

//kesic nerqev u verev nuyn tvern en

// let size = 10;
// let range = 10;
// let arr = [];

// for(let i = 0; i < size; i++){
//    if(i < size/2){
//         let element = Math.round(Math.random() * range)
//        arr.push(element)
//    }else{
//        let element_i = arr[size-i-1]
//        arr.push(element_i)
//    }
// }
// console.log(arr)

//**                                          
// size = 5
// 0 1 2 3 4
// 1 3 5 3 1

// 0 1 2 3 4
// 1 3 5 3 1

// let pos3 = size-i-1 = 5 - 3 - 1 = 1
// x = arr[pos3]

// let pos4 = size-i-1 = 5 - 4 - 1 = 0
// x = arr[pos4]

// es el nuynn a uxaki zronerov@
// let arraySize = 13;
// let range = 10;
// let Size = 4;
// let Count = 0;
// let arr = [];

// for(let i = 0; i < arraySize; i++){

//     if(i < arraySize/2){
//         let element = 0;
//         if(Count < Size/2) {
//             element = Math.round(Math.random() * range)
//             if(element !== 0) {
//                 Count++;
//             }
//         }

//         arr.push(element)
//     }else{
//         let element_i = arr[arraySize-i-1]
//         arr.push(element_i)
//     }
// }
// console.log(arr)





// function Createsum(n) {
//     let a = 0
//     for (let i = 0; i < n; i++) {
//         a = a + n
//     }
//     console.log(a)
// }
// Createsum(10)



// let arr = [4,8,5,'sfdg',5,'gh',4,'fdg','fdg']
// let a = 0
// let b = 0

// for(let i = 0; i < arr.length;i++){
//     let c = typeof arr[i]
//    if(c==='string'){
//        a = a + arr[i]
//    }else if(c==='number'){
//       b = b + arr[i]
//    }
// }
// console.log(a)
// console.log(b)

