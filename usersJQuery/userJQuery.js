$(document).ready(function () {
    $('#formSheet').submit(function () {
        return false;
    });
    $('#adduser').click(function () {
        if($('#form input').val()!=""){
            $('#info').append(
                '<tr><td>' + $('#form #firstName').val() + '</td><td>' + $('#form #lastName').val() + '</td><td>' + $('#form #emailAddress').val() + '</td><td>' + $('#form #contactNo').val() + '</td></tr>'
            );
            $('#form input').val("");
        }else{
            alert('please compelte the information, then click add user again.');
        }
    });
});