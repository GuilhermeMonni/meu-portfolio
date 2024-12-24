// cards dos projetos
const login = document.querySelector('#login')
const crud = document.querySelector('#crud')
const jokenpo = document.querySelector('#jokenpo')
const galeria = document.querySelector('#galeria')
const iconAlien = document.querySelector('.icon-alien')

//funcoes de click
function clickLogin(){ //link login
  window.open('https://github.com/GuilhermeMonni/sistema-de-login', '_blank')
}

function clickCrud(){ //link sistema crud
  window.open('https://github.com/GuilhermeMonni/bloco-de-tarefas', '_blank')
}

function clickJokenpo(){ //link jokenpo
  window.open('https://guilhermemonni.github.io/jokenpo/', '_blank')
}

function clickGaleria(){//link galeria 
  window.open('https://guilhermemonni.github.io/galeria-de-fotos/', '_blank')
}

function github(){ //link github
  window.open('https://github.com/GuilhermeMonni', '_blank')
}

function inst(){//link instagram
  window.open('https://www.instagram.com/monni.05/', '_blank')
}

function linkedin(){//link linkedin
  window.open('https://www.linkedin.com/in/guilherme-monni-a542a9244/', '_blank')
}

//link icone alien
iconAlien.addEventListener('click', () => {
  window.open('https://www.flaticon.com/br/icone-gratis/outer-space-alien_71298?related_id=71298&origin=search', '_blank')
})

