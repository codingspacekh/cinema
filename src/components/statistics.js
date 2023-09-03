
function statistics() {
  const stats = document.querySelectorAll('.stat')

  stats.forEach((stat) => {
    const value = parseInt(stat.dataset.stat)
    const increment = Math.ceil(value / 100)
    
    // console.log('counter', stat.dataset.stat, increment)
    let start = 0
    setInterval(() => {
      start += increment
      if (start > value) {
        stat.textContent = `${value}+`
        // clearInterval()
        return
      }

      stat.textContent = `${start}+`
    }, 10)
  })

}

export default statistics