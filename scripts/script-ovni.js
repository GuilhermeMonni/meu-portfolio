// animacao ovni
const ovni = document.querySelector('.ovni')
const luz = document.createElement('div')

setTimeout(() => {
    ovni.appendChild(luz)
    luz.classList.add('luz-ovni')
}, 2100)