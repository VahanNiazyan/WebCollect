'use strict';


//let sec = document.querySelector('section')
//
//console.log(getComputedStyle(sec))
//
//function Cont(a,b,c){
//    this.name = a;
//    this.lastname = b;
//    this.age = c;
//}
//
//let obj1 = new Cont('Aram','petrosyan',25)
//let obj2 = new Cont('Armen','Sargsyan',36)
//console.log(obj1,autor)
//
//Cont.prototype.hi=function(){
//    alert(this.name)
//}
//
//obj2.hi()

// 1.abstrakcia
// 2.inkapsulacia
// 3.jarangakanutyun
// 4.polimorfizm

//
//let arr = []
//console.log(arr)
//
//let ob3 = {
//    age: 25
//}
//
//let ob4 = {
//    name:'Ani'
//}
//console.log(ob3.name)
//
//ob3.__proto__ = ob4
//
//console.log(ob3.name)

//class Car {
//    constructor(a,b){
//        this.name = a;
//        this.year = b;
//    }
//    present(){
//   alert(this.name)
//    }
//}
//
//
//let car1 = new Car('Kia',2000)
//let car2 = new Car('Bmw',2000)
//console.log(car1)
//car2.present()

//
let li = document.querySelectorAll('.menu li');
let sel = document.querySelector('.seller');
let buy = document.querySelector('.buyer');

for(let i = 0;i < li.length;i++){
    li[i].onclick = function(event){
     let id = event.target.id;
        if(id === 'buyer'){
            buy.style.display = 'block'
            sel.style.display = 'none'
        }
        if(id === 'seller'){
            buy.style.display = 'none'
            sel.style.display = 'block'
        }
    }
}

let btn = document.querySelector('.seller button')
let ul_seller = document.querySelector('.prod-list');
let ul_buyer = document.querySelector('.buyer-list');

btn.onclick = function(){
    let name = document.querySelector('.name').value;
    let price = document.querySelector('.price').value;
    let category = document.querySelector('select').value;
    
    
    let product = new Product(name,price,category)
    list.addToProdList(product)
    createProd(product,ul_seller)
    createProd(product,ul_buyer)

}

let ind = 0;
function createProd(obj,ul){
    let btn = document.createElement('button')
    btn.setAttribute('type','button')
    btn.innerText = 'add to cart'
    btn.style.background = 'orange'
    btn.style.color = 'green'
    btn.style.border = 'none'
    btn.setAttribute('id',ind)
    btn.onclick = addToCard
    
    let li = document.createElement('li');
    
    li.innerHTML = `
      <h3>${obj.name}<span>${obj.price}</span></h3>
      <p>${obj.category}</p>
    `
    li.classList.add('list-group-item')
    if(ul === ul_buyer){
        li.appendChild(btn)
        ind++
    }
    ul.appendChild(li);
}

function addToCard(event){
    let id = event.target.id
    this.setAttribute('disabled',true)
    let prod = list.prod_list[id]
   list.addToShopingCard(prod)
    
    let ul = document.querySelector('.shopping-card');
    let li = document.createElement('li');
    li.style.listStyleType = 'none'
    
    li.innerHTML = `
        <h4>${prod.name}</h4>
        <p>${prod.price}</p>
`
    ul.appendChild(li)
    
    
    let total = document.querySelector('.total span')
    let tot_price = +total.innerText
    tot_price += +prod.price
    total.innerText = tot_price
}

let btn1 = document.querySelector('.bt1')
let btn2 = document.querySelector('.bt2')
let a = 0

btn2.onclick = function(event){
     a += 1
     let sp = document.querySelector('.span')
     let sp2 = document.querySelector('.span2')
     
    let nam = document.querySelector('.price').value
    nam *= a
     sp.innerText = a
     sp2.innerText = nam
}

btn1.onclick = function(){
    if(a!==0){
     a -= 1
    let sp = document.querySelector('.span')
    sp.innerHTML = a
    let sp2 = document.querySelector('.span2')
     
    let nam = document.querySelector('.price').value
    nam *= a
     sp.innerText = a
     sp2.innerText = nam
    }
}





