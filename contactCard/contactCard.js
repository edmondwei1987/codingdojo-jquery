$(document).ready(function(){
    $('#description').on('click',function(){
        $(this).text("");
    });
    $('#adduser').on('click',function(){
        var contactCard='';
        var name=$('#firstName').val()+' '+$('#lastName').val();
        var description=$('#description').val();
        $('#contactCard').append('<div class="contactCard"><h2>'+name+'</h2><a href="#">click for description</a><p class="detailDesc">'+description+'</p></div>');
        $('#description').val("");
        $('#firstName').val("");
        $('#lastName').val("");
        $('.detailDesc').hide();
        $('.contactCard a').on('click',function(){
            $(this).hide();
            $(this).next().show();
        });
    });
});