// animacao ovni
function seletor(item){ //seleciona element
    return item = document.querySelector(item)
}
function criar(item){ //cria elemento
    return item = document.createElement(item)
}
function sumir(item){
    item.style.display = 'none'
}

const ovni = seletor('.ovni') //div ovni
const sombra = seletor('.sombra')//div sombra
const et = seletor('.alien') //div alien
const luz = criar('div')//div luz

setTimeout(() => {
    ovni.appendChild(luz)//cria luz
    luz.classList.add('luz-ovni')//classe luz
    sombra.style.opacity = 1 //sombra alien

    //abducao
    setTimeout(() => {
        et.style.animation = 'abducao 1s 1 linear' //animacao alien
        sombra.style.animation = 'desSombra 1s 1 linear' //sombra alien
    }, 800)

    setTimeout(() => {
        et.style.display = 'none'
        luz.style.display = 'none'
    }, 1400)
}, 1400)

