for (var index = 1; index < 11; index++) {
  var saveButton = document.getElementById("movie-button-" + index);
  saveButton.addEventListener("click", fetchRelease);
  saveButton.myParam = index;
}

function fetchRelease(event) {
  // console.log("calling fetchRelease");
  // console.log(event);
  // console.log(event.target.myParam);
  var index = event.target.myParam;
  var apiKey2 = "151fd4610ef4afc0c93b050f47566952";
  //   var url = `http://www.omdbapi.com/?i=tt3896198&apikey=1181861f&s=batman`
  var searchTitle = document.getElementById("text-area-" + index).value;
  var url2 =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    apiKey2 +
    "&query=" +
    searchTitle;

  // console.log("input: " + JSON.stringify(searchTitle));
  console.log("url: " + url2);

  fetch(url2, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log("data: " + JSON.stringify(data));
      // console.log("data.Search: " + JSON.stringify(data.Search));
      // console.log("data.Search[0].Title: " + data.Search[0].Title);

      var html = "";

      // for (let i = 0; i < data.Search.length; i++) {
      for (let i = 0; i < 1; i++) {
        // Year
        html += `<h3>${data.results[i].release_date}</h3>`;
      }

      document.getElementById("data-modal").innerHTML = html;
    })

    .catch((error) => {
      //handle error

      console.log("error: " + error);
    });
}