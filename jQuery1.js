$(document).ready(function(){
    // alert("working")
    $('.navtext').hover(function(){
        $(this).fadeOut(100);$(this).fadeIn(6000);});
    $('.logo').click(function(){
    
    $('.logo').css('margin', '50px 0px 0px 50px')});

    $('.side_menu_list_wrapper').click(function(){
        $('navlinks2').hide()
    })

    $('button').click(function(){
        $('.below').hide()
    })
    
    $('button').click(function(){
        $('.side_menu_list_wrapper a').show()
    })

    $('.navlinks2').addClass('bg-primary');

    $('.getting_started').toggle();

    // $('.text_size_and_box p large').on("click", function(){
    //     $('body').addclass('.textbodybig');
    // })

    // $('.text_size_and_box p normal').on("click", function(){
    //     $('body').addclass('.textbodynormal');
    // })

    $('.applications').click(function(){
        $('.applications p').slideToggle(4000)
    })

    $('.text_size_and_box p').before(function(){
        $('.text_size_and_box p').text('hello!')
    })

    $('.navbox li a').html(function(){
        $('.navbox li a').text('Whats up')
    })

    $('input').keyup(function(){
        var value = $(this).val();
        $("p").text(value);
        alert(value);
    })
    .keyup();




})
    
    
    
    
    
    
    
    
    
    // $('.getting_started h3').on(function(){text("We're getting started")});