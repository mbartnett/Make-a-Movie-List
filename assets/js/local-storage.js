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
        var savedButton = document.getElementById("list-name-button");
        savedButton.setAttribute("id", "saved-button")
    })

})

