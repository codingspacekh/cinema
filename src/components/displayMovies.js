import MOVIES from "../db/data.js"


function movieCard(movie) {
  return `
  <div class="movie">
        <div class="movie-thumbnail">
          <img src="${movie.cover}" alt="">
        </div>
        <div class="movie-detail">
          <h4>${movie.title}</h4>
          <div class="movie-info">
            <p>
              <ion-icon name="calendar-number"></ion-icon>
              ${movie.releasedDate}
            </p>
            <p>
              <ion-icon name="alarm"></ion-icon>
              ${movie.duration}
            </p>
            <p>
              <ion-icon name="pricetag"></ion-icon>
              ${movie.category.map((item) => item).join(" - ")}
            </p>
          </div>
  
          <div class="btn-group">
            <a role="button" class="btn btn-main" id="showDetailBtn" href="detail.html?id=${movie.id}">SHOW DETAIL</a>
          </div>
  
        </div>
  </div>
  `
}



function displayMovies() {
  const totalMovies = document.querySelector("#totalMovies")
  totalMovies.textContent = MOVIES.length

  const moviesWrapper = document.querySelector(".movies-wrapper")
  
  moviesWrapper.innerHTML = ``
  MOVIES.forEach((movie) => {
    moviesWrapper.innerHTML += movieCard(movie)
  })

}

export default displayMovies