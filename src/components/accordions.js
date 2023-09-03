function accordion() {
  const accTitles = document.querySelectorAll('.accordion-title')

  accTitles.forEach((acc) => {
    acc.addEventListener('click', () => {
      const accBody = acc.nextElementSibling

      accBody.classList.toggle('show-accordion-body')

    })
  })
}

export default accordion