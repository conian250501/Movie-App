const baseUrl =
  "https://api.themoviedb.org/3/discover/movie?api_key=2c69c84b4159667ebb100246f3b6df5f&language=en-US";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280/";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=2c69c84b4159667ebb100246f3b6df5f&language=en-US&query=";

const main = document.querySelector("#main");
const form = document.getElementById("form");
const search = document.getElementById("search");

showMovies(baseUrl);
function showMovies(url) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const listMovies = data.results;
      console.log(listMovies);

      listMovies.forEach((movie) => {
        // Create Elements
        const element = document.createElement("div");
        element.className = "movie__item";
        const content = document.createElement("div");
        content.className = "movie__content";
        const image = document.createElement("img");
        const title = document.createElement("h2");
        const description = document.createElement("p");

        // Add inner Element
        image.src = IMG_PATH + movie.poster_path;
        image.alt = "ERROR IMAGE";
        title.innerHTML = movie.title;
        description.innerHTML = movie.overview;
        element.appendChild(image);
        content.appendChild(title);
        content.appendChild(description);
        element.appendChild(content);

        main.appendChild(element);
      });
    });
}

const handleSearch = (e) => {
  e.preventDefault();
  main.innerHTML = "";

  const value = search.value;
  if (value) {
    showMovies(SEARCH_API + value);
  }
  return;
};

form.addEventListener("submit", handleSearch);
