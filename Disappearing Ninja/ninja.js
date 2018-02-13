$(document).ready(function(){
    var img="";
    for(var i=0;i<16;i++){
        img+='<img src="ninja.png" alt="" style="left:'+150*(i%4)+'px;top:'+150*(Math.trunc(i/4))+'px;">';
    }
    $('#restore').before(img);
    $('img').click(function(){
        $(this).slideUp();
    });
    $('#restore').click(function(){
        $('img').slideDown();
    });
});