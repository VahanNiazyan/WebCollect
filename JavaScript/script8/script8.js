'use strict'

////Document object Model ...DOM
//
//let d = document.getElementById('text');
//console.log(d)
////document.write('8')
////
////
//let text = d.innerText; //get
////alert(text)
////d.innerText = '<h1>lorem<h1>'//set
////
///////////////////
////let text1 = d.innerHTML; //get
////alert(text1)
//d.innerHTML = '<h1>fvn<h1>'//set
//
//////=====================
////
//let d1 = document.querySelector('.box')//2
//console.log(d1)
////
//let d3 = document.querySelectorAll('.box')//3
//console.log(d3)
////
//let d4 = document.getElementsByClassName('box')//4
//console.log(d4)
////
//let d5 = document.getElementsByTagName('p')//5
//console.log(d5)
//
//d.style.fontSize = '30px';
//d.style.color = '#356488';
//
////d4[1].style.color = 'red'
//
//for(let i = 0; i<d4.length;i++){
//    
//}
//    
    
    
    
//   let ul = document.querySelector('ul') 
//   let li = document.createElement('li')
//// li.innerText = 'first'
//   let t = document.createTextNode('first');
//li.appendChild(t)
//ul.appendChild(li)

    
//    
//let ul = document.querySelector('ul')
//let color = ['green','blue','pink','aqua','purple']
//    
//   for(let i=0; i<5;i++) {
//       let li = document.createElement('li')
//       let t = document.createTextNode(color[i])
//       li.appendChild(t)
//       ul.appendChild(li)
//       li.style.color = color[i]
//       li.style.listStyleType = 'none'
//       }
//    
////    ul.setAttribute('class','text')
// ul.classList.add('new')   
// ul.classList.remove('ul')  
//   

//let main = document.querySelector('.block')
//

//===========================================
//tnain

//let bord = document.querySelector('div')
//
//bord.style.border = '2px solid black'
//bord.style.width = '600px'
//bord.style.height = '600px'
//bord.style.display = 'flex'
//bord.style.flexWrap = 'wrap'
//bord.style.alignContent = "flex-start"

//
//let b = 0;
//let a = 0;
//function secund(){
//   let minborder = document.createElement('div')
////    minborder.style.border = '2px solid black'
////    minborder.style.width = '196px'
////    minborder.style.height = '196px'
////    let r = Math.round(Math.random()*250)
////    let g = Math.round(Math.random()*250)
////    let b = Math.round(Math.random()*250)
////    minborder.style.background = `rgb(${r},${g},${b})`
////    
//   let a = document.createElement('div')
//   let b = document.createElement('div')
//   let s = document.createElement('div')
//   
//    a.style.height = '0'
//    a.style.width = '0'
//    a.style.border = '100px solid white'
//    a.style.borderLeftColor = 'red';
//    b.style.borderRightColor = 'blue'
//    s.style.borderBottomColor = 'green'
//    bord.appendChild(minborder)
//    
//    a++
//    if(a === 9 ){
//       clearInterval(h)
//    }
//}
//
//
//let h = setInterval(secund,2000)


//function mini(){
//    b++
//   if(b === 4){
//       clearInterval(z)
//   }
//}minborder.appendChild(mini)
//
////
//tnain

//let bord = document.querySelector('div')
//
//bord.style.border = '2px solid black'
//bord.style.width = '600px'
//bord.style.height = '600px'
//bord.style.display = 'flex'
//bord.style.flexWrap = 'wrap'
//bord.style.alignContent = "flex-start"
//
//let a = 0;
//function secund(){
//
//   let minborder = document.createElement('div')
//    minborder.style.border = '2px solid black'
//    minborder.style.width = '196px'
//    minborder.style.height = '196px'
//    let r = Math.round(Math.random()*250)
//    let g = Math.round(Math.random()*250)
//    let b = Math.round(Math.random()*250)
//    minborder.style.background = `rgb(${r},${g},${b})`
//    bord.appendChild(minborder)
//    a++
//    if(a === 9){
//       clearInterval(h)
//    }
//}
//
//
//let h = setInterval(secund,1000)




//
//
//let bord = document.querySelector('div')
//
//bord.style.border = '2px solid black'
//bord.style.width = '600px'
//bord.style.height = '600px'
//bord.style.display = 'flex'
//bord.style.flexWrap = 'wrap'
//bord.style.alignContent = "flex-start"
//
//let a = 0;
//let b = 0;
//function secund(){
//    let minborder = document.createElement('div')
//for(let i = 0; i < 9; i++){
//    minborder.style.border = '2px solid black'
//    minborder.style.width = '196px'
//    minborder.style.height = '196px'
//    bord.appendChild(minborder)
//}
//a++
//    if(a === 9){
//        clearInterval(h)
//    }
//    
//    function secund2(){
//    let r = Math.round(Math.random()*250)
//    let g = Math.round(Math.random()*250)
//    let b = Math.round(Math.random()*250)
//    minborder.style.background = `rgb(${r},${g},${b})`
//    bord.appendChild(minborder)
//    b++
//    if(b === 9){  
//        clearInterval(z)
//}
//}
////    let z = setInterval(secund2,1000)
//    if(secund !== z && secund2 === z){
//    let z = setInterval(secund2,1000)
//}
//    
//}
//
//let h = setInterval(secund,0)





//let d=document.querySelector('div');
//d.style.width='599px';
//d.style.height='599px';
//d.style.border='10px solid red';
//d.style.display='flex';
//d.style.flexWrap='wrap';
//d.style.alignContent='flex-start';
//	for (let i=0;i<9;i++){
//    let s=document.createElement('div')
//    s.setAttribute('id',i)
//    let text=document.createTextNode('')
//    s.appendChild(text);
//    d.appendChild(s);
//    s.style.flexBasis = '198px';
//    s.style.height='160px'
////    s.style.textAlign='center';
////    s.style.paddingTop='50px'
////    s.style.fontSize='50px';
////    s.style.fontWeight='bold';
////   s.style.background =  `rgb(255,255,255)`
//  }
//let m=0;
//let myf=()=>{
//        if (m===9){
//            for (let j=0;j<=8;j++){
//                let f=document.getElementById(j);
//                f.style.background='white'
//                f.style.border='none'
//               f.innerText=''
//            }
//            m=0;
//}
//		let k=document.getElementById(m)
//		let r = Math.round(Math.random() * 255);
//		let g = Math.round(Math.random() * 255);
// 		let b = Math.round(Math.random() * 255);
// 		k.style.background = `rgb(${r},${g},${b})`;
//        let t=document.createTextNode('square');
//        k.appendChild(t)
//	    m++
//		}
//myf()
//setInterval(myf,300)
//
