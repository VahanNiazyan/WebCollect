'use strict'


// events
//
//function clickButton(){
//    alert('click')
//}
//
////let div = document.querySelector('div')
//
//////div.onclick = clickButton
////div.onclick = function(){
////    console.log(5)
////}
//
////div.addEventListener('click',clickButton)
//
////
//let div = document.querySelector('div')
//
//div.ondblclick = function(){
//    console.log('double click')
//}
//div.oncontextmenu = function(){
//    console.log('aj click')
//}
//
//div.onmouseenter = function(){
//    this.style.background = 'red'
//}
//
//div.onmouseleave = function(){
//    this.style.background = 'green'
//}
//
//div.onmousemove = function(){
//    console.log('move')
//}
//




//inp.onchange = function(e){
//    console.log(e.target.value){
////    let p = document.querySelector
//}
//}


//let sec = document.querySelector('section')
//sec.addEventListener('mouse move',function(e){
//    console.log(e.offsetx)
//    console.log(e.offsety)
//})

//=======================================

//
// let inp = document.querySelector('.inp');
//
//
//  inp.onchange = function (e) {
//    let h1 = document.querySelector('h1');
//    h1.innerText = e.target.value
//  }

// // inp.oninput = function(e) {
// //   let h1 = document.querySelector('h1');
// //   h1.innerText = e.target.value
// //   this.style.color = 'red'

// // }

//
let sec = document.querySelector('section');
// let a = false;

sec.addEventListener('click',function(e){
  let x = e.offsetX
  let y = e.offsetY
  let c = Math.round(Math.random()*400)
  let d = Math.round(Math.random()*400)
  console.log(c)

  let div = document.createElement('div');
  div.style.width = '20px';
  div.style.height = '20px';
  div.style.borderRadius = '50%';
  div.style.background = 'aqua';
  div.style.position = 'absolute';
 
  div.style.left = x + c + 'px'
  div.style.top = y + d + 'px'
  this.appendChild(div)

  div.onclick = function(e){
    e.stopPropagation()
     this.remove()
  }

//div.style.background = a ? 'aqua' : 'yellow'
})



// Saqoi tnayn@
// let btn = document.querySelector('.sum');
// let btn1 = document.querySelector('.sum1');
// let btn2 = document.querySelector('.sum2');

// function sum(plus) {
//   let inp1 = +document.getElementById('num1').value;
//   let inp2 = +document.getElementById('num2').value;
//   let p = document.querySelector('p');
//   let s 
//   if(plus ==='*'){
//      s = inp1 * inp2
//   p.innerText = s
// }else if(plus ==='+'){
//        s = inp1 + inp2
//   p.innerText = s
//   }else{
//       s = inp1 - inp2
//      p.innerText = s
//   }
// }
// 
// btn.onclick = function(){
//     sum('*')
//         }
//btn1.onclick = function(){
//     sum('+')
//         }
//btn2.onclick = function(){
//     sum('-')
//         }

