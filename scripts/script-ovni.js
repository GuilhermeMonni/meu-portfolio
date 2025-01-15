// animacao ovni
function seletor(item){ //seleciona element
    return item = document.querySelector(item)
}
function criar(item){ //cria elemento
    return item = document.createElement(item)
}

const ovni = seletor('.ovni') //div ovni
const sombra = seletor('.sombra')//div sombra
const luz = criar('div')//div luz

setTimeout(() => {
    ovni.appendChild(luz)//cria luz
    luz.classList.add('luz-ovni')//classe luz

    sombra.style.opacity = 1
}, 1400)