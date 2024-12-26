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
  window.open('https://www.flaticon.com/br/autores/freepik', '_blank')
})

// animacao balao
const alien = document.querySelector('.icon-alien')
const balao = document.querySelector('.balao')
const txt = document.querySelector('.txt')

balao.classList.add('inativo')
txt.classList.add('inativo')

//cursor entra
alien.addEventListener('mouseover', () => {
  balao.classList.remove('inativo')
  txt.classList.remove('inativo')

  balao.classList.add('ativo')
  txt.classList.add('ativo')
})

//cursor sai
alien.addEventListener('mouseout', () => {
  balao.classList.remove('ativo')
  txt.classList.remove('ativo')

  balao.classList.add('inativo')
  txt.classList.add('inativo')
})