 'use strict';


//let div = document.querySelector('body')
//
//div.onkeydown = function(event){
//    console.log(event.keyCode)
//    if(code === 39){
//        div.style.marginLeft = '50px'
//    }
//}

//let obj = {}    let obj = new Object()

//let obj = {
//    name : 'Ani',
//    lastname:'Karapetyan',
//    age: 25,
//    f:function(){
//    alert(`i am ${this.name},i am ${this.age}`)
//}
//}
//
//console.log(obj.name, obj['lastname'])
//console.log(obj['age'])
//obj.name = 'anna'
//console.log(obj.name, obj['lastname'])
//obj.f()

//let book = {
//    title:'Bor',
//    autor:'voinich',
//    genre:'patmakan',
//    img:'bor.jpg'
//} 
//let sec = document.querySelector('section')
//let div = document.createElement('div')
//let img = document.createElement('img')
//img.setAttribute('src',book.img)
//div.appendChild(img)
//
//let title = document.createElement('h2')
//title.innerText = book.title
//div.appendChild(title)
//
//let autor = document.createElement('h4')
//autor.innerHTML = book.autor + `<q>${book.genre}</q>`
//div.appendChild(autor)
//sec.appendChild(div)

//let obj = {
//    name: 'Ani',
//    'use-name': 'karapetyan'
//}
//
//console.log(obj['use-name'])

////
//let books = [
//    {
//    title:'Բոռ',
//    autor:'էթել Վոյնիչ',
//    genre:'Պատմական',
//    img:'bor.jpg'
//} ,
//    {
//    title:'100 բիզնես գաղտնիքներ',
//    autor:'Վահագն Դիլբարյանի',
//    genre:'Պատմական',
//    img:'100b.jpg'
//},
//    {
//    title:'Ֆարենհայթ 451°',
//    autor:'Ռեյ Բրեդբըրիի',
//    genre:'Պատմական',
//    img:'far.jpg'
//},
//    {
//    title:'Մեծն Գեթսբի',
//    autor:'Ֆրենսիս Սքոթ',
//    genre:'Պատմական',
//    img:'mets.jpg'
//}  
//]
//
//let sec = document.querySelector('section')
//sec.style.display = 'flex'
//sec.style.justifyContent = 'space-around';
//
//function lib(obj){
//        let div = document.createElement('div')
//        let img = document.createElement('img')
//        img.setAttribute('src',obj.img)
//        img.style.width = '200px'
//        img.style.height = '250px'
//        div.style.border = '1px solid green'
//        div.style.width = '300px'
//        div.style.height = '400px'
//        div.style.textAlign = 'center'
//        div.style.paddingTop = '20px'
//        div.appendChild(img)
//        
//        let title = document.createElement('h2')
//        title.innerText = obj.title
//        title.style.borderBottom = '1px solid blue'
//        title.style.paddingBottom = '15px'
//        div.appendChild(title)
//        
//        let autor = document.createElement('h4')
//        autor.innerHTML = obj.autor + `<q>${obj.genre}</q>`
//        div.appendChild(autor)
//        sec.appendChild(div)
//    }
//
//books.forEach(item => lib(item))
//              
//function CreateBook(t,a,g,i){
//    this.title = t;
//    this.autor = a;
//    this.gener = g;
//    this.img = i;
//}
//
//let btn = document.querySelector('button');
//
//btn.onclick = function(){
//    let title = document.querySelector('.title').value;
//    let autor = document.querySelector('.autor').value;
//    let gener = document.querySelector('.gener').value;
//    let img = document.querySelector('.img').value;
//
//    let img_arr = img.split('\\')
//    let img_name = img_arr[img_arr.length-1]
//    
//    let book = new CreateBook(title,autor,gener,img_name)
//    books.push(book)
//    
//    lib(book)
//    }


//let rating = [16,18,15,17,19,17,15];
//let r = rating.length
//
//let sum = rating.reduce((item,s) => {
//     return s += item
//})
//sum = sum/r
//
//console.log(sum)



