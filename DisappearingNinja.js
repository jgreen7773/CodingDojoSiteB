function addPictures(){
    for(i=1;i<9;i++){
        $('body').append('<img src="./DisappNinja.jpg">');
    }
}
addPictures();

$('img').click(function(){
    $(this).hide();
})

$('button').click(function(){
    $('img').show();
})
