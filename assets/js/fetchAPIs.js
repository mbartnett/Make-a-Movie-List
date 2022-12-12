// Event listener for save button
for (var index = 1;
  index < 11;
  index++) {
  var saveButton = document.getElementById("movie-button-" + index)
  saveButton.addEventListener("click", fetchMovies);
  saveButton.myParam = index
}

// Function to call api for movies
function fetchMovies(event) {
  console.log("calling fetchMovies");
  console.log(event)
  console.log(event.target.myParam)
  var index = event.target.myParam
  var apiKey = "1181861f";
  //   var url = `http://www.omdbapi.com/?i=tt3896198&apikey=1181861f&s=batman`
  var searchTitle = document.getElementById("text-area-" + index).value;
  var url = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${searchTitle}`;

  console.log("input: " + JSON.stringify(searchTitle));
  console.log("url: " + url);

  fetch(url, {
    method: "GET"
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("data: " + JSON.stringify(data));
      console.log("data.Search: " + JSON.stringify(data.Search));
      console.log("data.Search[0].Title: " + data.Search[0].Title);

      var html = "";

      // for (let i = 0; i < data.Search.length; i++) {
      for (let i = 0; i < 1; i++) {
        // Image
        html += `<img class="movie-image" src="${data.Search[i].Poster}" alt="${data.Search[i].Title} image">`;

        // Year
        html += `<h4>${data.Search[i].Year}</h4>`;
      }

      document.getElementById("api1").innerHTML = html;
    })
    .catch((error) => {
      //handle error

      console.log("error: " + error);
    });
}


// Event listener for save button
for (var index =  1;
  index < 11; 
  index++) {
    var saveButton = document.getElementById("movie-button-" + index)
    saveButton.addEventListener("click", fetchRuntime);
    saveButton.myParam = index
}
// Function to call second api for movies
function fetchRuntime(event) {
  console.log(event.target.myParam)
  var index = event.target.myParam
  var apiKey2 = "151fd4610ef4afc0c93b050f47566952";
  var searchTitle = document.getElementById("text-area-" + index).value;
  console.log(searchTitle)
  var url2 = "https://api.themoviedb.org/3/search/movie?api_key=" + apiKey2 + "&query=" + searchTitle;

  fetch(url2) 
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var html = "";

      console.log(data.results)
    console.log(data.results[0].title);
    console.log(data.results[0].release_date);

    //adding title and release date to html
    html += `<h3>${data.results[0].title}</h3>`;
    html += `<p>${data.results[0].overview}</p>`;
    // Add a space after the image
    html += `<br><br>Press ESC to close`;

    document.getElementById("api2").innerHTML = html;
    });
  }