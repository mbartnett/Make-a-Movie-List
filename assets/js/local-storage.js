$(document).ready (function () {

    updateSaveBtn()
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
        updateSaveBtn()
//        var savedButton = document.getElementById("list-name-button");
//        savedButton.setAttribute("id", "saved-button")
    })
    var tempArr = JSON.parse(localStorage.getItem("myMovies"))
    function updateSaveBtn(){
        let tempArr = JSON.parse(localStorage.getItem("myMovies"))
        for(var i=1;i<=tempArr.length;i++){
            currbtn = `save-button-${i}`;
            var savedButton = doc.getElementById(currbtn);
            if(tempArr[i]!==null) {
                savedButton.classList.add("green-button");
            } else{
                savedButton.classList.remove("green-button");
            }
        }
    }

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

