// 'use strict';

// // events

// function clickButton() {
//   alert('click')
// }


// // div.onclick = clickButton
// // div.onclick = function(){
// //   console.log(5)
// // }

// // div.addEventListener('dblclick',clickButton)

// let div = document.querySelector('div');

// div.ondblclick = function () {
//   console.log('double click')
// }

// div.oncontextmenu = function () {
//   console.log(' aj click')
// }

// div.onmouseenter = function () {
//   this.style.background = 'red'
//   console.log('enter')

// }
// div.onmouseleave = function () {
//   this.style.background = 'green'
//   console.log('leave')

// }
// div.onmousemove = function () {
//   console.log('move')
// }

// // ================================


// let btn = document.querySelector('.sum');

// function sum() {
//   let inp1 = +document.getElementById('num1').value;
//   let inp2 = +document.getElementById('num2').value;

//   let p = document.querySelector('p');

//   let s = inp1 + inp2
//   p.innerText = s
// }

// btn.onclick = sum

// // ================================

//// let inp = document.querySelector('.inp');
//
//
//// // inp.onchange = function (e) {
//// //   let h1 = document.querySelector('h1');
//// //   h1.innerText = e.target.value
//// // }
//
//// // inp.oninput = function(e) {
//// //   let h1 = document.querySelector('h1');
//// //   h1.innerText = e.target.value
//// //   this.style.color = 'red'
//
//// // }
//
//
//let sec = document.querySelector('section');
// let a = false;
//
//sec.addEventListener('click',function(e){
//  let x = e.offsetX
//  let y = e.offsetY
//
//  a = !a;
//  // console.log(a)
//
//  let div = document.createElement('div');
//  div.style.width = '20px';
//  div.style.height = '20px';
//  div.style.borderRadius = '50%';
//  div.style.position = 'absolute';
//
//  div.style.left = x - 10 + 'px';
//  div.style.top = y - 10 + 'px';
//  this.appendChild(div)
//
//  div.onmousemove = function(e){
//    e.stopPropagation()
//    // this.remove()
//  }
//
//  // if(a){
//  //   div.style.background = 'aqua';
//  // }else{
//  //   div.style.background = 'yellow';
//  // }
//
//// a ? div.style.background = 'aqua': div.style.background = 'yellow'
//
//div.style.background = a ? 'aqua' : 'yellow'
//})












//-------------------------2-------------------------
let d=document.querySelector('div');
d.style.width='599px';
d.style.height='599px';
d.style.border='10px solid red';
d.style.margin='50px auto';
d.style.display='flex';
d.style.flexWrap='wrap';
d.style.alignContent='flex-start';
	for (let i=0;i<9;i++){
    let s=document.createElement('div')
    s.setAttribute('id',i)
    let text=document.createTextNode('')
    s.appendChild(text);
    d.appendChild(s);
    s.style.flexBasis = '198px';
    s.style.height='160px'
    s.style.textAlign='center';
    s.style.paddingTop='50px'
    s.style.fontSize='50px';
    s.style.fontWeight='bold';
   s.style.background =  `rgb(255,255,255)`
  }
let m=0;
let myf=()=>{
        if (m===9){
            for (let j=0;j<=8;j++){
                let f=document.getElementById(j);
                f.style.background='white'
                f.style.border='none'
               f.innerText=''
            }
            m=0;
}
		let k=document.getElementById(m)
		let r = Math.round(Math.random() * 255);
		let g = Math.round(Math.random() * 255);
 		let b = Math.round(Math.random() * 255);
 		k.style.background = `rgb(${r},${g},${b})`;
        let t=document.createTextNode('square');
        k.appendChild(t)
	    m++
		}
myf()
setInterval(myf,300)