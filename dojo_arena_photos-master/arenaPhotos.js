$(document).ready(function(){
    $('#windows').hide();

    $('#arena button').hover(function(){
        var arena=$(this);
        $('body').css("background-image",function(){
            return "url('"+arena.text()+".jpg')";
        });
    },function(){
        $('body').css("background-image","none");
        $('body').css("background-color","black");
    });

    $('#arena button').click(function(){
        $('body').css("background-image","url('"+$(this).text()+".jpg')");
        $('#arena button').unbind('mouseenter');
        $('#arena button').unbind('mouseleave');
        $('#arena button').css('color','black');
        $(this).css('color','orange');
        $('#arena').slideUp();
        $('#windows').slideDown();
    });

    $('#leftPlayer').change(function(){
        $('#player1').attr("src",$('#leftPlayer').find('option:selected').text()+'.png');
    });
    $('#rightPlayer').change(function(){
        $('#player2').attr("src",$('#rightPlayer').find('option:selected').text()+'.png');
    });
    $('#player1').attr("src",$('#leftPlayer').find('option:selected').text()+'.png');
    $('#player2').attr("src",$('#rightPlayer').find('option:selected').text()+'.png');

    
});