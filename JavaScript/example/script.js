'use strict'
//let rating = document.createElement('h4')
//    rating.style.color = 'brown'
//    let a = studi.rating
//     let r = a.length
//    
//  let sum = a.reduce((item,s) => {
//     return s += item
//})
//    sum = sum/r
//    rating.innerHTML = sum
//    div.appendChild(rating)

let Student = [
    {
        name: 'Karen',
        usename: 'Asatryan',
        age: 18,
        group: 'ac_24',
        countri: 'Hayastan',
        living_place: 'Erevan',
        rating: [12,9,14,8,11,15,16],
        img: 'stt1.jpg',
    },
    {
        name: 'Ani',
        usename: 'Petrosyan',
        age: 19,
        group: 'hd_42',
        countri: 'Hayastan',
        living_place: 'Hrazdan',
        rating: [16,18,15,17,19,19,18],
        img: 'sta3.jpg'
    },
    {
        name: 'Mane',
        usename: 'Minasyan',
        age: 20,
        group: 'ac_28',
        countri: 'Hayastan',
        living_place: 'Abovyan',
        rating: [16,18,15,17,19,17,14],
        img: 'sta2.jpg'
    }
]

let sec = document.querySelector('section')
sec.style.display = 'flex';
sec.style.justifyContent = 'space-around';
sec.style.flexWrap = 'wrap'

function data(studi){
    let div = document.createElement('div')
    div.style.width = '300px'
    div.style.height = '550px'
    div.style.border = '1px solid blue'
    div.style.textAlign = 'center'
    div.style.marginTop = '50px'
    div.style.borderRadius = '50px'
    
    let name = document.createElement('h3')
    name.style.color = 'green'
    name.innerHTML = studi.name
    div.appendChild(name)
    
    let usename = document.createElement('h3')
    usename.style.color = 'green'
    usename.innerHTML = studi.usename
    div.appendChild(usename)
    
    let age = document.createElement('h4')
    age.style.color = 'red'
    age.innerHTML = studi.age
    div.appendChild(age)
    
    let countri = document.createElement('h4')
    countri.style.color = 'orange'
    countri.innerHTML = studi.countri
    div.appendChild(countri)
    
    let living_place = document.createElement('h4')
    living_place.style.color = 'Gray'
    living_place.innerHTML = studi.living_place
    div.appendChild(living_place)
    
    let rating = document.createElement('h4')
    rating.style.color = 'brown'
    let a = studi.rating
    
     let r = 0
    for(let i = 0; i < a.length; i++){
        r = r + a[i]
    }
    let as = r / a.length
    
    rating.innerHTML = as
    div.appendChild(rating)
    
    let img = document.createElement('img')
    img.setAttribute('src',studi.img)
    img.style.width = '200px'
    img.style.height = '250px'
    div.appendChild(img)
    
    sec.appendChild(div)
}


Student.forEach(item => data(item))

function Collect(n,u,a,c,l,r,i){
    this.name = n;
    this.usename = u;
    this.age = a;
    this.countri = c;
    this.living_place = l;
    this.rating = r;
    this.img = i;
}

let btn = document.querySelector('button')


btn.onclick = function(){
    let name1 = document.querySelector('.name').value;
    let usename1 = document.querySelector('.usename').value;
    let age1 = document.querySelector('.agen').value;
    let countri1 = document.querySelector('.countri').value;
    let living_place1 = document.querySelector('.living_place').value;
    let rating1 = document.querySelector('.rating').value;
    let arr = Array
    arr = rating1.split(',')
    console.log(arr)
    
    let img1 = document.querySelector('.img').value;
    
    let slesh = img1.split('\\')
    let slesh1 = slesh[slesh.length-1]
    
    let stud = new Collect(name1,usename1,age1,countri1,living_place1,arr,slesh1)
    Student.push(stud)
    data(stud)
    console.log(stud)
}





