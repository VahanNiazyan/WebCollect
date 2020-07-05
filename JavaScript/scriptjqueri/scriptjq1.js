'use strict'
$(document).ready(function () {

    // let div = $('div')
    //  let btn1 = $('button:first-of-type')
    //  let btn2 = $('button:last-of-type')
    //  let btn3 = $('button:nth-of-type(2)')

    //  btn1.click(function () {
    //     div.hide(2000)// w,h
    //     div.slideUp(1000) // height
    //    div.fadeOut(2000)


    //
    //  btn2.click(function () {
    //    // div.show(2000)
    //    // div.slideDown(1000)
    //    div.fadeIn(2000)
    //  })
    //
    //  btn3.click(function () {
    //    // div.slideToggle(1000)
    //    div.fadeToggle(2000)
    //      
    //  div.css('background','green').css('width','300px')

    //  div.css({background:'red',width:'300px'})



    //  $('li').click(function(){
    //      $('li').css('color','black')
    //      $(this).css('color','red')
    //      $(this).remove()
    //      $(this).empty()


    //  $('button').click(function(){
    //      let text = $('h1').text()
    //      let text = $('h1').html()
    //      $('h1').text('jquery')

    //      $('h1').attr('title','lorem')

    //      alert(event.target.id)
    //      let id = $('h1').attr('id')
    //      alert(id)

    //      $('h1').attr('class','active')
    //      $('h1').addClass('active')
    //      $('h1').removeClass('text-uppercase')

    //      $('h1').addClass('active')
    //    $('span').text($('input[type="range"]').val())
    //    $('input[type="range"]').on('input',function(event){
    //        let v = event.target.value
    //        $('span').text(v)
    //    })
    //    
    //      $('button').click(()=>{
    //          let li = $('<li>dsf</li>')
    //          li.css('list-style-type','none')
    //          let value = $('input[type="text"]').val()
    //          li.text(value)
    //          $('ul').prepend(li)
    //          
    //          let fs = $('input[type="range"]').val()
    //          let col =$('input[type="color"]').val()
    //          let fw = $('select').val()
    //          
    //          li.css({
    //              'font-size':fs+'px',
    //              color:col,
    //              fontWeight:fw
    //          })
    //          
    //          
    //          $('ul').append(li)
    //          $('input').val('')
    //      })





    //    let div = $('div')
    //    console.log(div.width())
    //    console.log(div.height())
    //    
    //    console.log(div.innerWidthidth())
    //    console.log(div.innerHeight())
    //    
    //    console.log(div.outarWidthidth())
    //    console.log(div.outarHeight())

    //    $('li').parent().css('border','2px solid red')
    //  $('li').parents().css('border','2px solid red')
    //    $('li').parentsUntil('div').css('border','2px solid red')

    //$('div').children().css('border','2px solid red')
    //    $('div').find().css('border','2px solid blue')
    //    

    //    $('li').click(function () {
    //     $(this).next().css('background','pink')
    //     $(this).nextAll().css('background','pink')
    //     $(this).prev().css('background','pink')
    //     $(this).prevAll().css('background','pink')

    //        $(this).siblings().css('background', 'pink')



    //    $('li').first().css('border','3px solid')
    //    $('li').last().css('border','3px solid green')
    //    
    //    $('li').eq(2).css('border','3px solid red')
    //    $('li').filter('#li').css('border','3px solid')
    //
    //    $('li').not('#id').css('border','3px solid red')

    //  $('div').animate({
    //      background:'red',
    //      marginLeft:'300px'
    //  },4000)  

    //    let t = $('div').offset().top
    //    let l = $('div').offset().left
    //console.log(t,l)
    //    
    $(window).scroll(function () {
        let s = $(this).scrollTop()
        if (s > 350) {
            $('ul').css({
                right: 0
            })
            $('button').fadeOut(5000)
        }
        if (s < 350) {
            $('ul').css({
                right: '-100px'
            })
        }
$('li').hover(function () {
    
  $('li').animate({
          background:'red',
          marginRight:'200px'
      },4000) 
    
      })
        
        
//        $('li').hover(function () {
//             
////            $('.span').css.right = '100px' //({display:'block'})
////            $('.span').css({
////                display: 'block'
////            })
//            $(this).innerText = 'fsdgjskdfksfd fsdioj'
//
//        })

    })





    //==================================================
    //    $('.button').click(function () {
    //        $('.modal').fadeIn(1000)
    //
    //        //$('.but').click(function () {
    //        //    
    //        //    let inputText = $('#text1')
    //        //    let spanText = $('#text2')
    //        //    
    //        //    console.log("inputText.value" + inputText.value)
    //        //
    //        //    if (inputText.value === "") {
    //        //         spanText.innerText = "Error"
    //        //    } else {
    //        //        spanText.innerText = ""
    //        //    }
    //        //})
    //
    //
    //        let but = document.querySelector('.but')
    //
    //        but.onclick = function () {
    //            let inputText = document.getElementById('text1')
    //            let spanText = document.getElementById('text2')
    //
    //            if (inputText.value === '') {
    //                spanText.innerText = 'Error Empti'
    //            } else if (!isNaN(inputText.value)) {
    //                spanText.innerText = 'Error Number'
    //            } else {
    //                spanText.innerHTML = ''
    //            }
    //
    //            let email = document.getElementById('email')
    //            let emSpan = document.getElementById('emspan')
    //
    //            if (!email.value.includes('@')) {
    //                emSpan.innerText = 'Email empti simvol'
    //            } else {
    //                emSpan.innerText = ''
    //            }
    //
    //
    //            let inputPassword = document.getElementById('password')
    //            let pasSpan = document.getElementById('passpan')
    //
    //            if (inputPassword.value.length < 6) {
    //                pasSpan.innerText = 'Length none Error'
    //            } else if (inputPassword.value.length > 13) {
    //                pasSpan.innerText = 'Error big Length'
    //            } else {
    //                pasSpan.innerText = ''
    //            }
    //
    //            let conPassword = document.getElementById('conpassword')
    //            let conSpan = document.getElementById('conspan')
    //
    //            if (conPassword.value !== inputPassword.value) {
    //                conSpan.innerText = 'Cconfirm Password mistack'
    //            } else {
    //                conspan.innerText = ''
    //            }
    //            
    //
    //        }
    //        $('#nan').click(function () {
    //            $('.modal').css('display', 'none')
    //        })
    //    })
})
