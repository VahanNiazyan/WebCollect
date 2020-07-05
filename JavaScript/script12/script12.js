'use strict'

function createUsers(arr){
    console.log(arr)
    let userList = document.querySelector('.users')//divn e htm-i
    arr.forEach(elm =>{
        let user = document.createElement('div');
        let name = document.createElement('h3');//durs kberi elmi nam@. aysinqn i-ov kfrra
        let phone = document.createElement('p');
        
        user.setAttribute('id',elm.id) 
        
        name.innerText = elm.name;
        phone.innerText = elm.phone;
        
        user.appendChild(name)
        user.appendChild(phone)
        
        userList.appendChild(user)
        user.onclick = getPosts//kanchel enq funkcian nerqevi vor es gortsoxutyunneri jamanak onclick ani
    })
}

function getPosts(event){
    let id = this.getAttribute('id')
//    this.style.background = 'rgb(37,226,110)'
    let users = document.querySelectorAll('.users > div')
    users.forEach((user,ind)=>{
        user.style.background = id == ind + 1 ? 'rgb(37,226,110)' : 'none'
                  })
    request('https://jsonplaceholder.typicode.com/posts?userId='+id,createPosts); 
    }

function createPosts(arr){
     let postList = document.querySelector('.posts')//divn e htm-i
     postList.innerHTML = '';//sa naxord@ jnjum e
     arr.map(elm =>{ // kstananq nor zangvats vor@ kfrracni map-ov u durs khani title body
        let post = document.createElement('div');
        let title = document.createElement('h3');
        let body = document.createElement('p');
        title.innerText = elm.title;
        body.innerText = elm.body;
        post.setAttribute('id',elm.id)
        
        post.appendChild(title)
        post.appendChild(body)
        
        postList.appendChild(post)
        post.onclick = Coment

    })
}

function Coment(event){
    let id1 = this.getAttribute('id')//kanchum enq id-in
    this.style.background = 'darksalmon'
    request('https://jsonplaceholder.typicode.com/comments?postId='+id1,creatCom)//
}

function creatCom(arr){
    let comid = document.querySelector('.comment');
    comid.innerHTML = '';
    arr.map(com => {
        let main = document.createElement('div');
        let name = document.createElement('h3');
        let email = document.createElement('h4');
        let body = document.createElement('p');
        name.innerText = com.name;
        email.innerText = com.email;
        body.innerText = com.body;
        
        main.appendChild(name);
        main.appendChild(email);
        main.appendChild(body);
        comid.appendChild(main);

    })
}





