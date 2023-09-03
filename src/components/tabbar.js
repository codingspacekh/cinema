function tabbar() {
  const tabBtns = document.querySelectorAll('.tab-btn')
  const tabs = document.querySelectorAll('.tab')
  const tabbar = document.querySelector('.tabbar')

  tabbar.addEventListener('click', (e) => {
    const index = e.target.dataset.id

    tabBtns.forEach((btn) => {
      btn.classList.remove('active')
    })

    e.target.classList.add('active')

    tabs.forEach((tab) => {
      tab.classList.remove('active-tab')
    })

    const targetTab = document.getElementById(index)
    targetTab.classList.add('active-tab')
  })

}

export default tabbar