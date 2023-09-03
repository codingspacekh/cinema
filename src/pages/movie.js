import sidenav from "../components/sidenav.js"
import accordion from "../components/accordions.js"
import carousel from "../components/carousel.js"
import displayMovies from "../components/displayMovies.js"
import toggleTheme from "../utils/toggleTheme.js"


window.addEventListener('DOMContentLoaded', () => {
  toggleTheme()
  sidenav()
  accordion()
  carousel()

  displayMovies()
})