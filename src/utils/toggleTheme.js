import { getLocalData, setLocalData } from "./getLocalStorage.js"  

// setLocalData("theme", "dark")
// setLocalData("icon", "sunny")
function toggleTheme() {
  const toggleThemeBtn = document.querySelector('.toggleTheme')
  const icon = toggleThemeBtn.firstElementChild
  // console.log(toggleTheme)

  let currentTheme = getLocalData("theme")
  let currentIcon = getLocalData("icon")
  
  if (currentTheme == "dark") {
    setLocalData("theme", "dark")
    setLocalData("icon", "sunny")
    document.documentElement.classList.remove('light-theme')
    icon.name = currentIcon
    console.log("Current Theme: "+ currentTheme)
    console.log("Current Icon: ", currentIcon)
  } else {
    setLocalData("theme", "light")
    setLocalData("icon", "moon")
    document.documentElement.classList.add('light-theme')
    icon.name = currentIcon
    console.log("Current Theme: "+ currentTheme)
    console.log("Current Icon: ", currentIcon)
  }


  toggleThemeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-theme')

    if (icon.name == "moon") {
      icon.name = "sunny"
      setLocalData("theme", "dark")
    } else {
      icon.name = "moon"
      setLocalData("theme", "light")
    }
  })
}

export default toggleTheme

/**
 * 
 * if (currentTheme == "light") {
    document.documentElement.classList.remove('light-theme')
    setLocalData("theme", "light")
  } else {
    document.documentElement.classList.add('light-theme')
    setLocalData("theme", "dark")
  }


  toggleTheme.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-theme')

    let icon = toggleTheme.firstElementChild
    if (icon.name == "moon") {
      icon.name = "sunny"
      
    } else {
      icon.name = "moon"
      // setLocalData("theme", "light")
    }
  })
 */