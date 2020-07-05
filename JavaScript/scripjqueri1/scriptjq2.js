'use strict'

$(document).ready(function () {

//   $('li').clone().appendTo('ul')
//    
//    
//   $('li').hover(function(){
//       $('li').css('background','none')
//       $(this).css('background','green')
//   }) 
    
    let canvas = document.querySelector('canvas')
    let ctx = canvas.getContext('2d')
    
//    ctx.beginPath()
//    ctx.moveTo(20,20)//x,y
//    ctx.lineTo(50,70)
//    ctx.lineTo(100,40)
//    ctx.lineTo(20,20)
//    ctx.closePath()
//    
//    ctx.strokeStyle = 'red'
//    ctx.stroke()
    
//    ctx.fillStyle = 'yellow'
//    ctx.fillRect(10,10,50,30)//x,y,w,h
//    
//    ctx.rect(100,100,30,40)
//    ctx.strokeStyle = 'red'
//    ctx.stroke()
    
    
//  ctx.beginPath()
//    ctx.arc(150,30,10,0,45) //x,y,r,deg,deg
//    ctx.stroke()
//    ctx.stroke()

//ctx.font = '30px Arial'
//    ctx.fillStyle = 'pink'
//    ctx.fillText('JQuari',20,30)
//    ctx.fill()
//    
//  ctx.font = '30px Arial'
//    ctx.strokeStyle = 'purple'
//    ctx.strokeText('JQuari',150,30)
//    ctx.stroke()  
//    
//    ctx.beginPath()
//    ctx.rect(20,80,200,50) //x,y,r,deg,deg
//    ctx.fill()
//    ctx.closePath()
//
//    ctx.clearRect(60,50,100,50)


//ctx.font = '30px Arial'
//    ctx.fillStyle = 'pink'
//    ctx.fillText('JQuari',20,30)
//    ctx.fill()
//})
//
//setInterval(()=>{
//    x+=Math.random()*5
//})






//    $(window).scroll(function () {
//        let s = $(this).scrollTop()
//        if (s > 350) {
//            $('ul').css({
//                right: 0
//            })
//            $('button').fadeOut(5000)
//        }
//        if (s < 350) {
//            $('ul').css({
//                right: '-100px'
//            })
//        }
//$('li').hover(function () {
////  $('li').animate({
////          background:'red',
////          marginRight:'200px'
////      },4000) 
//    
//      })
        
        
//        $('li').hover(function () {
//             
////            $('.span').css.right = '100px' //({display:'block'})
////            $('.span').css({
////                display: 'block'
////            })
//            $(this).innerText = 'fsdgjskdfksfd fsdioj'
//
//        })

//    })





    //==================================================
//        $('.button').click(function () {
//            $('.modal').fadeIn(1000)
    
            //$('.but').click(function () {
            //    
            //    let inputText = $('#text1')
            //    let spanText = $('#text2')
            //    
            //    console.log("inputText.value" + inputText.value)
            //
            //    if (inputText.value === "") {
            //         spanText.innerText = "Error"
            //    } else {
            //        spanText.innerText = ""
            //    }
            //})
    
//    
//            let but = document.querySelector('.but')
//                
//            let inputText = document.getElementById('text1')
//            let spanText = document.getElementById('text2')
//            
//            let email = document.getElementById('email')
//            let emSpan = document.getElementById('emspan')
//            
//            let inputPassword = document.getElementById('password')
//            let pasSpan = document.getElementById('passpan')
//            
//            let conPassword = document.getElementById('conpassword')
//            let conSpan = document.getElementById('conspan')
//            
//            let isError = false
//            
//            but.onclick = function () {
//    
//                isError = false
//                
//                if (inputText.value === '') {
//                    spanText.innerText = 'Error Empti'
//                    isError = true
//                } else if (!isNaN(inputText.value)) {
//                    spanText.innerText = 'Error Number'
//                    isError = true
//                } else {
//                    spanText.innerHTML = ''
//                }
//    
//                if (!email.value.includes('@')) {
//                    emSpan.innerText = 'Email empti simvol'
//                    isError = true
//                } else {
//                    emSpan.innerText = ''
//                }
//    
//                if (inputPassword.value.length < 6) {
//                    pasSpan.innerText = 'Length none Error'
//                    isError = true
//                } else if (inputPassword.value.length > 13) {
//                    pasSpan.innerText = 'Error big Length'
//                    isError = true
//                } else {
//                    pasSpan.innerText = ''
//                }
//    
//                if (conPassword.value !== inputPassword.value) {
//                    conSpan.innerText = 'Confirm Password mistack'
//                    isError = true
//                } else {
//                    conspan.innerText = ''
//                }
//                
//                if(!isError) {
//                    inputText.value = ''
//                    email.value = ''
//                    inputPassword.value = ''
//                    conPassword.value = ''
//                }
//                
//            }
//            
//            $('#nan').click(function () {
//                $('.modal').css('display', 'none')
//            })
//        })





// $(window).scroll(function () {
//        let s = $(this).scrollTop()
//        if (s > 350) {
//            $('ul').css({
//                right: 0
//            })
//            $('button').fadeOut(5000)
//        }
//        if (s < 350) {
//            $('ul').css({
//                right: '-100px'
//            })
//        }
//$('li').hover(function () {
//    
//  $('li').animate({
//          background:'red',
//          marginRight:'200px'
//      },4000) 
//    
//      })
//        
//        
////        $('li').hover(function () {
////             
//////            $('.span').css.right = '100px' //({display:'block'})
//////            $('.span').css({
//////                display: 'block'
//////            })
////            $(this).innerText = 'fsdgjskdfksfd fsdioj'
////
////        })
//
//    })


