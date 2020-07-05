'use strict';


//tnain

let sec = document.querySelector('section');   

function divCreator(n) {
    for(let i = 0; i < n; i++) {
        let div = document.createElement('div')
        div.style.width = '20px';
        div.style.height = '20px';
        div.style.borderRadius = '50%';
        div.style.background = 'aqua';
        div.style.position = 'absolute';
        div.style.transition = '1s linear';
        div.classList.add('circle')
        sec.appendChild(div)
    }
}
divCreator(5)

let a = 0
function circleMove(){
    let divs = document.querySelectorAll('.circle');
    for(let i = 0; i < divs.length; i++) {
      let x = Math.round(Math.random()*395)
      let y = Math.round(Math.random()*395)
      divs[i].style.left = x + 'px'
      divs[i].style.top = y + 'px' 
        
      divs[i].onclick = function(){
        this.remove()
          a = a + 1;
          let div2 = document.querySelector('.div2')
           div2.style.marginLeft = '180px'
           div2.style.fontSize = '30px'
           div2.style.color = 'blue'
          div2.innerText = a
       if(a === 5){
           let div3 = document.querySelector('.div3')
           div3.innerHTML = 'Lavel 2'
           div3.style.marginTop = '100px'
           div3.style.marginLeft = '130px'
           div3.style.fontSize = '50px'
           div3.style.fontStyle = 'italic'
           div3.style.color = 'red'
           sec.appendChild(div3)
        
            function divCreator1(m) {
    for(let i = 0; i < m; i++) {
        let div1 = document.createElement('div')
        div1.style.width = '20px';
        div1.style.height = '20px';
        div1.style.borderRadius = '50%';
        div1.style.background = 'aqua';
        div1.style.position = 'absolute';
        div1.style.transition = '1s linear';
        div1.classList.add('circle')
        sec.appendChild(div1)
    }
}
           
divCreator1(10)
    
    function circleMove1(){
    let divs1 = document.querySelectorAll('.circle');
    for(let i = 0; i < divs1.length; i++) {
      let x1 = Math.round(Math.random()*395)
      let y1 = Math.round(Math.random()*395)
      divs1[i].style.left = x1 + 'px'
      divs1[i].style.top = y1 + 'px' 
      }
    }
          }
      }
    }
}
setInterval(circleMove,2000)









let btn = document.querySelector('.sum')
let btn1 = document.querySelector('.sum1')

function sum(Plus) {
    let inp1 = +document.getElementById('num1').value
    let inp2 = +document.getElementById('num2').value
    let p = document.querySelector('p')

    let x
    
    if(Plus === true) {
        x = inp1 + inp2
    } else {
        x = inp1 - inp2
    }
    
    console.log('x: ' + x)
    p.innerText = x
}


btn.onclick = function() {
    sum(true);
};
btn1.onclick = function() {
    sum(false);
};

//btnSum.addEventListener("click", function(){
//    calculate(true);
//}, true);

//btnDiv.addEventListener("click", function(){
//    calculate(false);
//}, true);
