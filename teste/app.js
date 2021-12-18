const button = document.querySelector('button')
const div = document.querySelector('div')
const b2 = document.querySelector('.b2')
const paragraph = document.createElement('p')


button.addEventListener('click', event => {
    paragraph.textContent = 'Achou'
    div.insertAdjacentElement('afterbegin', paragraph)

})


b2.addEventListener('click', event => {
    paragraph.remove()

})