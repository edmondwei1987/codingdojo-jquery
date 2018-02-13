$(document).ready(function(){
    $('img').click(function(){
        var tempImg="";
        tempImg=$(this).attr("alt_img");
        $(this).attr('alt_img',$(this).attr('src'));
        //$(this).slideUp();
        tempImg=$(this).attr('src',tempImg);
        //$(this).slideDown();
    });
});