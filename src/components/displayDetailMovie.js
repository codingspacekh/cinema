function displayDetailMovie(movie) {

  const main = document.querySelector('main')
  // console.log(movie)
  main.innerHTML = `
  <section class="detail-container" style="background-image: url(${movie.cover});">
    <div class="overlay">
      <div class="detail-header">
        <h1>${movie.title}</span></h1>
        <div class="tabbar">
          <button class="tab-btn active" data-id="detail">Detail</button>
          <button class="tab-btn" data-id="video">Video</button>
          <button class="tab-btn" data-id="reviews">Reviews</button>
        </div>
      </div>
      <div class="detail-body">
        <section class="tab detail-tab active-tab" id="detail">
          <p>
            <ion-icon name="information-circle"></ion-icon>
            <span class="text">OVERVIEW: ${movie.overview}</span>
          </p>
          <p>
            <ion-icon name="pricetags"></ion-icon>
            <span class="text">CATEGORY: ${movie.category.map((item) => item).join(" - ")}</span>
          </p>
          <p>
            <ion-icon name="alarm"></ion-icon>
            <span class="text">DURATION: ${movie.duration}</span>
          </p>
          <p>
            <ion-icon name="calendar-number"></ion-icon>
            <span class="text">RELEASED DATE: ${movie.releasedDate}</span>
          </p>
        </section>

        <section class="tab video-tab" id="video">
          <iframe src="${movie.trailerId}" allowfullscreen></iframe>
        </section>

        <section class="tab review-tab" id="reviews">
          ${getReviews(movie.cast)}
        </section>

      </div>
    </div>
  </section>
  
  `
}

function getReviews(reviews) {
  return reviews.map((review) => {
    return `
    <div class="review">
      <img src="./images/user.png" alt="">
      <p>
         Some comments by - ${review}
      </p>
    </div>
    `
  }).join("")
}

export default displayDetailMovie