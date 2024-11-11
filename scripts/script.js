// Quantidade de estrelas
const numStars = 500;

// Função para gerar as estrelas
function generateStars() {
  const stars = document.querySelector('.stars');
  let sombra = '';

  for (let i = 0; i < numStars; i++) {
    // Gera posições aleatórias para cada estrela
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * 1300);
    
    //define a posicao do box-shadow
    sombra += `${x}px ${y}px #CCC${i < numStars - 1 ? ',' : ''}`;
  }

  // Aplica o box-shadow gerado ao elemento .stars
  stars.style.boxShadow = sombra;
}

// Gera as estrelas ao carregar a página
window.onload = generateStars;

// cards dos projetos
let login = document.querySelector('#login')
let crud = document.querySelector('#crud')
let jokenpo = document.querySelector('#jokenpo')
let galeria = document.querySelector('#galeria')

function clickLogin(){
  window.open('https://github.com/GuilhermeMonni/sistema-de-login', '_blank')
}

function clickCrud(){
  window.open('https://github.com/GuilhermeMonni/bloco-de-tarefas', '_blank')
}

function clickJokenpo(){
  window.open('https://guilhermemonni.github.io/jokenpo/', '_blank')
}

function clickGaleria(){
  window.open('https://guilhermemonni.github.io/galeria-de-fotos/', '_blank')
}

function github(){
  window.open('https://github.com/GuilhermeMonni', '_blank')
}

function inst(){
  window.open('https://www.instagram.com/monni.05/', '_blank')
}

function linkedin(){
  window.open('https://www.linkedin.com/in/guilherme-monni-a542a9244/', '_blank')
}