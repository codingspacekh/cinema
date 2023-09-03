
function sidenav() {
  const menuBtn = document.querySelector("#menuBtn")

  menuBtn.addEventListener('click', () => {
    document.querySelector('.sidenav').classList.toggle('showSidenav')
  })
}


export default sidenav