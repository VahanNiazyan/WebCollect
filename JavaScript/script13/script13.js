'use strict'

//async function f(){
//    let p = new Promise((resole,reject)=>{
//        setTimeout(()=>{
//            return resole('text')
//        },2000)
//    })
//    let r = await p
//    alert(r)
//}
//f()
//===================
//try {
//    let a = 8
//    console.log(a)
//   console.log('try') 
//    
//    if(a%4 == 0){
//        throw new Error('a : 4')
//    }
//    if(a%5 == 0){
//        throw new Error('a : 5')
//    }
//    throw new Error('error message')
//} catch (error){
//    console.error(error)
//}
//finally{
//    console.log('end')
//}

//===============

//let z = new Map()
//z.set('a',5)
//z.set('b',9)
//let s = z.size
//let keys = z.keys()
//let val = z.values()
//console.log(z.has('a'))
//
////===========
//
//let arr = [54,15,44]
//
//let arr1 = new Set(arr)
//arr.push(100)
//  console.log(arr1)

//==================
//
//let id = Symbol.for('id')
//let id2 = Symbol.for('id')
//console.log( id===id2)
//
//let user = {
//    name:'aram',
//    [Symbol.for('password')]:'2121'
//}
//console.log(user[Symbol.for('password')])
//
//


//let x = 5
//
//alert(eval('x+9'))












//
//fetch('https://jsonplaceholder.typicode.com/albums',creatAlbums)
//    .then(response => response.json())
//    .then(json => creatAlbums(json))
//
//
//
//function creatAlbums(arr) {
//    let albums = document.querySelector('.albums');
//    albums.innerHTML = ''
//
//    arr.forEach(elid => {
//        let alb = document.createElement('div')
//        alb.setAttribute('id', elid.id)
//        let title = document.createElement('h3')
//        title.innerHTML = elid.title
//
//        alb.appendChild(title)
//        albums.appendChild(alb)
//        alb.onclick = clickAlb
//    })
//}
//
//function clickAlb(event) {
//    let id = this.getAttribute('id');
//        this.style.background = 'darkseagreen';
//        let albums = document.querySelectorAll('.albums >div')
//        albums.forEach((alb,ind) => {
//        alb.style.background = id == ind + 1 ? 'darkseagreen' : 'none'//dsf
//        })
//
//        fetch('https://jsonplaceholder.typicode.com/photos?albumId='+id,creatPhotos)
//      .then(response => response.json())
//      .then(event => creatPhotos(event))
//}
//
//function creatPhotos(arr) {
//    console.log(arr)
//    let photos = document.querySelector('.photos')
//    photos.innerHTML = ''
//    arr.map(img => {
//        let phot = document.createElement('div')
//        phot.setAttribute('id', img.id)
//        let title = document.createElement('h3')
//        title.classList.add('title')
//        let im = document.createElement('img')
//        let thumbnailUrl = document.createElement('img')
//        thumbnailUrl.classList.add('marg')
//        thumbnailUrl.setAttribute('src',img.thumbnailUrl)
//        im.setAttribute('src', img.url)
//        title.innerHTML = img.title
//
//
//        phot.appendChild(title)
//        phot.appendChild(im)
//        phot.appendChild(thumbnailUrl)
//        photos.appendChild(phot)
//    })
//}
