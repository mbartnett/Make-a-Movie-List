// Event listener
document.getElementById("search-button").addEventListener("click", fetchMovies);

// Function to call api for movies
function fetchMovies() {
  console.log("calling fetchMovies");
  var apiKey = "1181861f";
  //   var url = `http://www.omdbapi.com/?i=tt3896198&apikey=1181861f&s=batman`
  var searchTitle = document.getElementById("text-area-1").value;
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
      console.log("data.Search: " + JSON.stringify(data.Title));
      console.log("data.Search[0].Title: " + data.Search[0].Title);

      var html = "";

      for (let i = 0; i < data.Search.length; i++) {
        // Title
        html += `<h3>${data.Search[i].Title}</h3>`;
        // html += '<h3>' + data.Search[i].Title + '</h3>'

        // Year
        html += `<h4>${data.Search[i].Year}</h4>`;

        // Type
        html += `<h5>${data.Search[i].Type}</h5>`;

        // Image
        html += `<img class="movie-image" src="${data.Search[i].Poster}" alt="${data.Search[i].Title} image">`;

        // Add a space after the image
        html += `<br><br>`;
      }

      document.getElementById("movies").innerHTML = html;
    })
    .catch((error) => {
      //handle error

      console.log("error: " + error);
    });
}
