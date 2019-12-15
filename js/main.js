$(document).ready(function() {
    alert("Welcome!");

    $('#button').click(function () {
        $('#tittle').addClass('hide');
        });

        setTimeout(function(){
            $('#tittle').addClass('red');
        }, 2000);

        $('#remove').click(function(){
            $('#tittle').removeClass('red');
        })







  })



  
