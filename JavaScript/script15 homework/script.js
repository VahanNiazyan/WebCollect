'use strict'
$(document).ready(function () {
    //10 erord
    //
    //let arr = [54,98,-65,0,45,-78,32,1,12,8]
    //
    //let a= [];
    //for(let i = 0; i < arr.lengt; i++){
    ////    let v = Math.max(arr[i])
    ////    console.log(v)
    ////    a.push(v)
    //    for(let j = 0; j < arr[i].length; j++){
    //        if(arr[i] > arr[j]){
    //            let sum = arr[i];
    //            arr[i] = arr[j];
    //            arr[j] = sum
    //            a.push(sum)
    //            console.log(sum)
    //        }
    //    }
    //}
    ////console.log(a)
    //
    ////11 erord 
    //let rev = arr.reverse()
    //console.log(rev)
    //
    ////12 erord
    //
    //let b = [5,1,2,3,8,12,4,5,6,7,8,9,98]
    //let c = b.reduce((item,s)=> s += item)
    //console.log(c)

    //13 erord








    // function time(p){
    //     let date = new Date(); 
    //     let hours = date.getHours()
    //     let minutes = date.getMinutes()
    //     let sec = date.getSeconds()
    //     let a = hours + ' : ' + minutes + ' : ' + sec;
    //     let full = document.getElementById('clock')
    //      full.innerText = a
    //      
    // }
    //let a = setInterval(time,1000)
    // 
    // 
    //let but = document.querySelector('button')
    // but.onclick = function(){
    //     clearInterval(a); 
    //     
    // }


    //let sec = $('section')
    //    let sec = document.querySelector('section')
    //     let div = document.querySelector('div')
    //    div.style.color = 'green'
    //    div.style.fontSize = '40px'
    //    sec.appendChild(div)
    //     
    //function creatRand(){
    //     let a = Math.round(Math.random()*10)
    //    a++
    //    div.append(a)
    //
    //}
    //
    //setInterval(creatRand,1000)

    //let arr = [5,8,9,3,7,6,7,4]
    //let a = []
    //
    //for(let i = 0; i < arr.length; i++){
    //    for(let j = 0; j < arr[i].length; j++){
    //        let sum = arr[i]
    //        arr[i] = arr[j]
    //        sum = arr[j]
    //        a.push(sum)
    //    }
    //}
    //
    //console.log(a)

    //    let arr = [2, 2, 3, 4, 5, 5, 5, 1, 3]
    //    let a = []
    //
    //    for (let i = 0; i < arr.length; i++) {
    //
    //        let isContain = false
    //
    //        for (let j = 0; j < a.length; j++) {
    //
    //            if (a[j] === arr[i]) {
    //                isContain = true
    //                break
    //            }
    //        }
    //
    //        if (isContain === false) {
    //            a.push(arr[i])
    //            console.log(arr[i])
    //        }
    //    }
    //    console.log(a)

    //    $('#option1').click(function () {
    //        if ($('#p1').css('display') === 'block') {
    //            $('#p1').css('display', 'none')
    //        } else {
    //            $('#p1').css('display', 'block')
    //        }
    //            
    //        },2000)


    //        let main = [9, 7, 5, 10, 5, 1, 9, 2, 3, 8]
    //        let main = [-9, -7, -5, -10, -5, -1, -9, -2, -3, -8]
    //    let main = [17, 17, 17, 9, 9, 9, 9, 8, 6, 9, 9, 9, 9, 4, 6]
    //
    //    if(main.length < 2) {
    //        console.log("Error")
    //        return
    //    }
    //    
    //    let min1 = main[0]
    //    let min2 = main[0]
    //    
    //    for (let j = 1; j < main.length; j++) {
    //        
    //        if (main[j] > min1) {
    //            min2 = min1
    //            min1 = main[j]
    //        } else if(main[j] > min2 && main[j] != min1) {
    //            min2 = main[j]    
    //        } else if (min1 === min2 && main[j] !== min1) {
    //            min2 = main[j]
    //        }
    //    }
    //    console.log(min1)
    //    console.log(min2)
    //    console.log(main)



    //
    //    function man(event){
    //let sec = document.querySelector('.sec')
    //
    //        let x = event.offsetX
    //        let y = event.offsetY
    //        let div = document.querySelector('.div')
    //        sec.appendChild(div)
    //        let matx = Math.round(Math.random() * 250)
    //        let maty = Math.round(Math.random() * 250)
    //
    //        div.style.left = x + matx + 'px'
    //        div.style.top = y + maty + 'px'
    //        this.appendChild(div)
    //        
    //
    //        console.log(div)
    //    }
    //man()
    //setInterval(man,1000)
    //
    //

    let arr = [1]


    if (arr.length < 2) {
        console.log('error')
        return
    }
    
    let min1 = arr[0]
    let min2 = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min1) {
            min2 = min1
            min1 = arr[i]
        } else if (arr[i] > min1 && arr[i] < min2) {
            min2 = arr[i]
        } else if (min1 == min2) {
            min2 = arr[i]
        }
    }

    console.log(min1)
    console.log(min2)
})
