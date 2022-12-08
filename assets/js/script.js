var OMDb_API_key = "1181861f";
var TMDB_API_key = "151fd4610ef4afc0c93b050f47566952"
var Rapid_API_key = "2bea83b3a4mshd7df1ef3ac74d82p134909jsn7b4daf15a7c7"

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
if (tempArr[1]){
    $("#movie-button-1").attr('style', `background-color: #6699ff !important;opacity: 100%;`)
}
if (tempArr[2]){
    $("#movie-button-2").attr('style', `background-color: #6699ff !important;opacity: 100%;`)
}
if (tempArr[3]){
    $("#movie-button-3").attr('style', `background-color: #6699ff !important;opacity: 100%;`)
}
if (tempArr[4]){
    $("#movie-button-4").attr('style', `background-color: #6699ff !important;opacity: 100%;`)
}
if (tempArr[5]){
    $("#movie-button-5").attr('style', `background-color: #6699ff !important;opacity: 100%;`)
}
if (tempArr[6]){
    $("#movie-button-6").attr('style', `background-color: #6699ff !important;opacity: 100%;`)
}
if (tempArr[7]){
    $("#movie-button-7").attr('style', `background-color: #6699ff !important;opacity: 100%;`)
}
if (tempArr[8]){
    $("#movie-button-8").attr('style', `background-color: #6699ff !important;opacity: 100%;`)
}
if (tempArr[9]){
    $("#movie-button-9").attr('style', `background-color: #6699ff !important;opacity: 100%;`)
}
if (tempArr[10]){
    $("#movie-button-10").attr('style', `background-color: #6699ff !important;opacity: 100%;`)
}
