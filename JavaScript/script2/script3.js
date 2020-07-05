"use strich"

//cikl
//
//for(let i =0; i <= 10; i+=3){
//    console.log(i)
//}
//
//
//


//for(let i = 10;i > 0;i--)
//console.log(i)
//
//for(let i=0;i<100;i++){
//    if(i%11==0){
//        console.log(i)
//    }
//}

////zuygeri gumarum
//let a=0;
//
//for(let i=0;i<20;i+=2){
//    a=a+i;
//}
//console.log(a);

//let sum=0;
//let mul=1;
//for(let i=0;i<=20;i++){
//    if(i%2===0){
//        sum+=i;
//    }else{
//        mul *=i
//    }
//}
//console.log('sum = '+sum)
//console.log('mul = '+mul)


//for(let i=0;i<50;i++){
//    if(i%5===0 || i%3===0){
//        continue
//    }
//    console.log(i)
//}


//ekror cikl while=======================

//let a=0;
//while(a<6){
//      console.log(Math.round(Math.random()*50));
//      a++
//}

//let b=8;
//do{
//    console.log(Math.round(Math.random()*50));
//    b++;
//}while(b<14)

//let x=prompt();
//let r='';
//for(let i=0; i< x.length;i++){
//    if([i]==='5'){ 
//        r='yes';
//        break
//    }else{
//        r='no';
//    }
//}
//console.log(r)


//let s='dcv sdcv sdv sdvcdasdec dsacds'
//let p=0;
//for(let i=0;i<s.length;i++){
//    if(s[i]==''){
//        p++
//    }
//}
//
//let number = prompt()
//
//if(number.length ===5){
//    let newNumber ='';
//    for(let i=0;i<number.length; i++){
//        if(number[i]%2==0){
//            newNumber = newNumber+0
//        }else{
//            newNumber = newNumber+number[i]
//        }
//    }
//    console.log(newNumber)
//}else{
//    console.log('hnganish che')
//}

//let x='sdfv sdfvcc sdvc dv'
//let y='ergsrtgjg rigj jrgh jrfhbr vbfryu'
//let xl=x.length;
//let yl=y.length;
//console.log(xl,yl);
//if(xl>yl){
//    let z= xl-yl
//    for(let i=0;i<z;i++){
//        document.write('<p>'+x+'</p>')
//    }
//}else{
//    let z= yl-xl
//    for(let i=0;i<z;i++){
//        document.write('<p>'+y+'</p>')
//    }
//}
//
//
//%===1 && %!==0 apa tox lini
//gtnum eq 0-100 mijakayqum 
//bolor parz tvery

///////////////////////////////////////////////////////////

//for(let i = 2; i< 100 ; i++){
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

//////////////////////////////////////////////////////////////


//let str = "";
//let Nx = 5;
//let Ny = 5;
//
//for( let i = 0  ; i < Ny ;  i++ ) {
//
//    for(let j = 0; j < Ny; j++) {
//        if(i === 0 || i === Ny - 1) {
//            str += " *"
//        } else {
//            
//            if(j === 0 || j === Nx - 1) {
//                str += " *"
//            } else {
//                str += "  "
//            }
//            
//        }
//    }
//    
//    str += "\n"
//}
//
//console.log(str);
//




// && i%3!==0 && i%5!==0 && i%7!==0 

///////////////////////////////////////////////////////////










let b='*****';
let p='';

for(let i =0;i< b.length;i++){
   for(let a=0;a<b.length;a++){
       if([i]==='5'){
           let c= [i]-'3';
      
       }
       document.write('* ')
   }
   document.write('<br>')
}


for(let i =0; i<5; i++){
  for(let a =0; a<=5; a++){
      }
     for(let b =0; b<5; b++){
         document.write('*')
}
   document.write('<br>')
}






//for( let i = 0  ; i < 5 ;  i++ ) {
//    
//    for(let j = 0; j < 10; j++) {
//        
//        console.log("oooooo");
//
//        
//        if(i === j) {
////            break;
//            continue;
//        }
//        
//          console.log("i: " + i + ", j: " + j);
//        
//        if(i === j) {
//            break;
//        }
//        
////         i: 0, j: 0
////         oooooo
////         i: 0, j: 1
////         oooooo
////         i: 0, j: 2
////         i: 0, j: 3
////         i: 0, j: 4
////        
//    }
//    
//    console.log("xxxx");
//    
//}

//

//let str ="";
//let x = 5;
//let y = 5;
//let z = 5;
// 
//for(let i = 0; i < y; i++){
//    for(let j = 0; j < y ; j++){
//        if(i === 0 || i !== y - 3 || i !== y - 2 || y !== x -1)
//           {
//           str +=" *"
// 
//        }else{
//            if(j === 0  || j !== y -4  || j !== y - 3 )
//            {
//               str +=" *"
//            }//else if(i === y-4){
//               
////                    str = " ****";
//                   
//                }             
//        }
//    str += "\n"
//}
//console.log(str)


    
    
//    if(i === 0 || i === Ny - 1 || j === 0 || j === Nx - 1) {
//            str += " *"
//        } else {
//            str += "  "
//        } 




//let num = ('armstrong number');
//
//for(let i =0; i<1000 ; i++){ 
//    i = String(i)
//     let l = String(i).length//i nisheeri qanak
//     let sum = 0;
//     for(let j=0;j <=1; j++){
//        sum = sum + Math.pow(i[j],l) 
//     }
//    if(sum == i){
//        console.log(sum)
//    }
//}



//let arr = [87,65,'red',54,'blue',false]
//let num =0;
//let str =0;
//
//for(let i=0;i<arr.length;i++){
//    let type = typeof arr[i]
//    if(type === 'number'){
//        num++
//    }else if(type === 'string'){
//        str++
//    }
//}
//alert(num+' , '+str)


//let arr = [];
//let sum = 0;
//let r = 0;
//for(let i = 0 ; i < 10; i++){
//    sum = Math.round(Math.random()*10)
//    arr.push(sum)
//    r = r + sum
//    console.log(sum,r)
//}



//let arr = []
//let sum = 0;
//let z = 0;
//for(i = 0; i < 10; i++){
//    sum = Math.round(Math.random()*10)
//    arr.push(sum)
//    
////    z += sum
//    
//}
//console.log(arr)
//
//dasavorel achman kargov random funqcian


//let x = 0;
//let r = 1;
//for(let i = 0; i < 10; i++){
//    x = Math.round(Math.random()*10)
//console.log(x)
//}



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

/**
size = 5
0 1 2 3 4
1 3 5 3 1

0 1 2 3 4
1 3 5 3 1

let pos3 = size-i-1 = 5 - 3 - 1 = 1
x = arr[pos3]

let pos4 = size-i-1 = 5 - 4 - 1 = 0
x = arr[pos4]

/////////////////////////////////

1, 3, 5, 7, 9, 0, 0, 9, 7, 5, 3, 1

*/

//let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
//let range = 10;
//let size = 13;
//let x = 0;
//
//    
//for(let i = 0; i < size; i++){
//    if(i < size/2){
//        let s = Math.round(Math.random()*range)
//        arr.push(s)
//    }else{
//        if(size===13 ){
//            arr.push(arr[size-i-1])
//            arr[5,6,7]="0"
//            arr[2]=4
//        }
//        
//    }
//}
//
//arr[5,6,7]="0"
//
//console.log(arr)

//
// let arraySize = 13;
// let range = 10;
// let not0ElementsSize = 4;
// let not0ElementsCount = 0;
// let arr = [];

// for(let i = 0; i < arraySize; i++){
    
//     if(i < arraySize/2){
//         let element = 0;
//         if(not0ElementsCount < not0ElementsSize/2) {
//             element = Math.round(Math.random() * range)
//             if(element !== 0) {
//                 not0ElementsCount++;
//             }
//         }
         
//         arr.push(element)
//     }else{
//         let element_i = arr[arraySize-i-1]
//         arr.push(element_i)
//     }
// }
// console.log(arr)

//////////////////////////////////////////////////////



//let arr = [];
//let size = 15;
//
//
//for(let i = 0; i < size; i++){
//    let x = Math.round(Math.random()*15);
//    for(let j = i; j < arr.length; j++){
//    let x = Math.round(Math.random()*15);
//    if(x % 3 ==0 && x !==0 ){
//         arr.push(x)
//    }
//        if(arr[i] > arr[j]) {
//     let b = arr[i]
//      arr[i] =arr[j]
//      arr[j] = b
//        arr.push(b)
//    }
//    }
//    
//    }
//console.log(arr)

//////////////////////////

// Sorting Algorithms
//let arr = [4, 7, 1, 3, 4, 9, 16];
//let t = arr[i]; // t =7
//arr[i] =arr[j]; // [4, 9, 1, 3, 4, 9, 16]
//arr[j] =t; // [4, 9, 1, 3, 4, 7, 16]
//
//// i: 0 
//// [4, 7, 1, 3, 4, 9, 16]
//// [1, 7, 4, 3, 4, 9, 16]
//// [1, 7, 4, 3, 4, 9, 16]
//// [1, 7, 4, 3, 4, 9, 16]
//// [1, 7, 4, 3, 4, 9, 16]
//// [1, 7, 4, 3, 4, 9, 16]
//
//// index: 1
//// [1, 7, 4, 3, 4, 9, 16]
//// [1, 4, 7, 3, 4, 9, 16]
//// [1, 4, 7, 3, 4, 9, 16]
//// [1, 3, 7, 4, 4, 9, 16]
//// [1, 3, 7, 4, 4, 9, 16]
//
//// index: 2
//// ...
//
//let arr = [4, 7, 1, 3, 4, 9, 16];
//
//
