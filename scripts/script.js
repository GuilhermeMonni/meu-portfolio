// Quantidade de estrelas
const numStars = 400;

// Função para gerar as estrelas
function generateStars() {
  const stars = document.querySelector('.stars');
  let sombra = '';

  for (let i = 0; i < numStars; i++) {
    // Gera posições aleatórias para cada estrela
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    
    //define a posicao do box-shadow
    sombra += `${x}px ${y}px #FFF${i < numStars - 1 ? ',' : ''}`;
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

function clickLogin(){
  window.open('https://github.com/GuilhermeMonni/sistema-de-login', '_blank')
}

function clickCrud(){
  window.open('https://github.com/GuilhermeMonni/bloco-de-tarefas', '_blank')
}

function clickJokenpo(){
  window.open('https://guilhermemonni.github.io/jokenpo/', '_blank')
}