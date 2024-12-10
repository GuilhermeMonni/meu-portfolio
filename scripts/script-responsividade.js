const smallWindow = window.matchMedia('(max-width: 1500px)')

// Animação scroll
if(smallWindow.matches){
  window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.scroll')
    const windowWid = window.innerWidth * 1.8

    cards.forEach((item) => {
      const cardTop = item.getBoundingClientRect().top - windowWid

      if(cardTop < 0){
        item.classList.add('scrollOn')
        item.classList.remove('scroll')
      } else{
        item.classList.remove('scrollOn')
      }
    })
  })
}else{
  const cards = document.querySelectorAll('.scroll')

  cards.classList.remove('scroll')
}
