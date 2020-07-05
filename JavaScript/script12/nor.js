//'use strict'

//function request(url,cb){
//let  xml = new XMLHttpRequest();//object
//let body = {a:5}
//xml.open('post',url,body)
//xml.setRequestHeader('Content_type','application/json')
//
//xml.onreadystatechange = function(){
//    console.log(body,this.responseText)
////    if(this.readyState === 4 && this.status === 200){//sa hatuk greladzev e
////        let data = this.responseText//json stringn e
////        data = JSON.parse(data)//sarqum e objekt
////        cb(data)//sa el sarqum enq data popoxakan@ poxancelu hamar funkcia 
////        console.log(data)
////    }
//}
//
//xml.send(JSON.stringify(body))
//
//}
//request('https://jsonplaceholder.typicode.com/users',createUsers);
//
//
//let p = new Promise((resolve,reject)=>{
//
//    let a = 6;
//    setTimeout(()=>{
//        a++
//         
//        a>0? resolve(a) : reject('error')
//        console.log(a)
//    },2000)
//})

//p.then((a)=>{
//    console.log(a)
//}).then(()=>{
//    console.log(9)
//}).catch((err)=>{
//    console.error(err)
//})
//.finally(()=>{
//    console.log('finish')
//})
//
//
//
//fetch('https://jsonplaceholder.typicode.com/todos/1')
//  .then(response => response.json())
//  .then(json => console.log(json))

//===============
//
function hi(age){
    console.log(this.name)
    console.log(this.age)
}
    
hi()
    
let ani = {
    name: 'Ani',
}

let ara = {
    name:'Ara',
    func:hi
}

//let p = obj.func.bind(obj1)
//p()
//
ara.func.call(ani)
//
//let arr1 = arr
