$(document).ready (function () {


    $('.button').on('click', function() {
        var input = $(this).siblings('textarea').val();   
        var index = $(this).attr('data-index');
        if(localStorage.getItem("myMovies") == null){
            moviesArr = []
        }else{
            moviesArr = JSON.parse(localStorage.getItem("myMovies"))
        }
        moviesArr[index] = input;
        localStorage.setItem("myMovies", JSON.stringify(moviesArr))
    })

    var tempArr = JSON.parse(localStorage.getItem("myMovies"))
    $('#text-area-list-name').val(tempArr[0]);
    $('#text-area-1').val(tempArr[1]);
    $('#text-area-2').val(tempArr[2]);
    $('#text-area-3').val(tempArr[3]);
    $('#text-area-4').val(tempArr[4]);
    $('#text-area-5').val(tempArr[5]);
    $('#text-area-6').val(tempArr[6]);
    $('#text-area-7').val(tempArr[7]);
    $('#text-area-8').val(tempArr[8]);
    $('#text-area-9').val(tempArr[9]);
    $('#text-area-10').val(tempArr[10]);

})

