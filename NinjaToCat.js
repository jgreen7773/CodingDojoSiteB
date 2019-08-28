



$('img').click(function(){
    console.log('data-alt-src value is'), $(this).attr('data-alt-src');
})


$('img').on('click', function(){
    $(this).attr('src', $(this).attr('data-alt-src'));
})





// Tried to make it turn back, but it didn't work.

// $('container2', 'img').on('click', function(){
//     $(this).attr('data-alt-src', $(this).attr('src'));
// })