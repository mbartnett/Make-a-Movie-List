for (var index = 1; 
    index < 11; 
    index++) {
      var saveButton = document.getElementById("movie-button-" + index)
      saveButton.addEventListener("click", fetchRuntime);
      saveButton.myParam = index
  }

  function fetchRuntime(event) {
    var apiKey2 = "151fd4610ef4afc0c93b050f47566952";
    var searchTitle = document.getElementById("text-area-" + index);
    var url2 = "https://api.themoviedb.org/3/search/movie?api_key=" + apiKey2 + "&query=" + searchTitle;

    fetch(url2) 
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.results[0].title);
        console.log(data.results[0].release_date);
      });
    }