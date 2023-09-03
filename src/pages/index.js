import toggleTheme from "../utils/toggleTheme.js"
import sidenav from "../components/sidenav.js"
import accordion from "../components/accordions.js"
import statistics from "../components/statistics.js"
import carousel from "../components/carousel.js"
import { setLocalData } from "../utils/getLocalStorage.js"



window.addEventListener('DOMContentLoaded', () => {
  toggleTheme()
  sidenav()
  accordion()
  statistics()
  carousel()
})