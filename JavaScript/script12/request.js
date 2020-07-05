'use strict'

function request(url,cb){
let  xml = new XMLHttpRequest();//object

xml.open('get',url)//method, url
xml.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){//sa hatuk greladzev e
        let data = this.responseText//json stringn e
        data = JSON.parse(data)//sarqum e objekt
        cb(data)//sa el sarqum enq data popoxakan@ poxancelu hamar funkcia 
        console.log(data)
    }
}

xml.send()

}
request('https://jsonplaceholder.typicode.com/users',createUsers);


