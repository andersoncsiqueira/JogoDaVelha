
const form  = document.querySelector('.form')
const button = document.querySelector('#button')
const input1 = document.querySelector('#cx1')
const input2 = document.querySelector('#cx2')
const input3 = document.querySelector('#cx3')
const input4 = document.querySelector('#cx4')
const input5 = document.querySelector('#cx5')
const input6 = document.querySelector('#cx6')
const input7 = document.querySelector('#cx7')
const input8 = document.querySelector('#cx8')
const input9 = document.querySelector('#cx9')

const buttonX1 = document.querySelector("#x1")
const buttonO1 = document.querySelector("#o1")
const buttonX2 = document.querySelector("#x2") 
const buttonO2 = document.querySelector("#o2") 
const buttonX3 = document.querySelector("#x3")
const buttonO3 = document.querySelector("#o3")
const buttonX4 = document.querySelector("#x4")
const buttonO4 = document.querySelector("#o4")
const buttonX5 = document.querySelector("#x5")
const buttonO5 = document.querySelector("#o5")
const buttonX6 = document.querySelector("#x6")
const buttonO6 = document.querySelector("#o6")
const buttonX7 = document.querySelector("#x7")
const buttonO7 = document.querySelector("#o7")
const buttonX8 = document.querySelector("#x8")
const buttonO8 = document.querySelector("#o8")
const buttonX9 = document.querySelector("#x9")
const buttonO9 = document.querySelector("#o9")

const inputs = [input1,input2,input3,input4,input5,input6,input7,input8,input9]
const arrayX = [buttonX1,buttonX2,buttonX3,buttonX4,buttonX5,buttonX6,buttonX7,buttonX8,buttonX9]
const arrayO = [buttonO1,buttonO2,buttonO3,buttonO4,buttonO5,buttonO6,buttonO7,buttonO8,buttonO9]

const refrsh = document.querySelector('#refresh')
refrsh.addEventListener('click', event => {
    console.log('oi')
    document.location.reload()
})

const putX = (buttan, index )=> buttan.addEventListener('click', event => {
    event.preventDefault()
    
    inputs[index].value = event.target.value
    inputs[index].classList.remove('nullx')
    inputs[index].classList.toggle('x')
    
    arrayX[index].classList.add('off')
    arrayO[index].classList.add('off')
})

const putO  = (buttan, index ) => buttan.addEventListener('click', event => {
    event.preventDefault()
 
    inputs[index].value = event.target.value
    inputs[index].classList.remove('nullo')
    inputs[index].classList.toggle('o')
    
    arrayX[index].classList.add('off')
    arrayO[index].classList.add('off')
})

arrayX.forEach(putX)
arrayO.forEach(putO)


//                           setInterval

const line1 = setInterval(()=> {
    if(!input1.classList.contains('nullx') && !input2.classList.contains('nullx') && !input3.classList.contains('nullx')){
       input1.classList.add('lh1')
       input2.classList.add('lh1')
       input3.classList.add('lh1')
       
       
       
    } else if (!input1.classList.contains('nullo') && !input2.classList.contains('nullo') && !input3.classList.contains('nullo')){
        input1.classList.add('lh1')
       input2.classList.add('lh1')
       input3.classList.add('lh1')
       
    }
    
}, 1)

const line2 = setInterval(()=> {
    if(!input4.classList.contains('nullx') && !input5.classList.contains('nullx') && !input6.classList.contains('nullx')){
       input4.classList.add('lh1')
       input5.classList.add('lh1')
       input6.classList.add('lh1')

    } else if (!input4.classList.contains('nullo') && !input5.classList.contains('nullo') && !input6.classList.contains('nullo')){
        input4.classList.add('lh1')
       input5.classList.add('lh1')
       input6.classList.add('lh1')
    }
}, 1)

const line3 = setInterval(()=> {
    if(!input7.classList.contains('nullx') && !input8.classList.contains('nullx') && !input9.classList.contains('nullx')){
       input7.classList.add('lh1')
       input8.classList.add('lh1')
       input9.classList.add('lh1')

    } else if (!input7.classList.contains('nullo') && !input8.classList.contains('nullo') && !input9.classList.contains('nullo')){
        input7.classList.add('lh1')
       input8.classList.add('lh1')
       input9.classList.add('lh1')
    }
}, 1)

const col1 = setInterval(()=> {
    if(!input1.classList.contains('nullx') && !input4.classList.contains('nullx') && !input7.classList.contains('nullx')){
       input1.classList.add('lv1')
       input4.classList.add('lv1')
       input7.classList.add('lv1')
       
       
    } else if (!input1.classList.contains('nullo') && !input4.classList.contains('nullo') && !input7.classList.contains('nullo')){
        input1.classList.add('lv1')
       input4.classList.add('lv1')
       input7.classList.add('lv1')
       
    }

    
}, 1)

const col2 = setInterval(()=> {
    if(!input2.classList.contains('nullx') && !input5.classList.contains('nullx') && !input8.classList.contains('nullx')){
       input2.classList.add('lv1')
       input5.classList.add('lv1')
       input8.classList.add('lv1')

    } else if (!input2.classList.contains('nullo') && !input5.classList.contains('nullo') && !input8.classList.contains('nullo')){
        input2.classList.add('lv1')
       input5.classList.add('lv1')
       input8.classList.add('lv1')
    }
}, 1)

const col3 = setInterval(()=> {
    if(!input3.classList.contains('nullx') && !input6.classList.contains('nullx') && !input9.classList.contains('nullx')){
       input3.classList.add('lv1')
       input6.classList.add('lv1')
       input9.classList.add('lv1')

    } else if (!input3.classList.contains('nullo') && !input6.classList.contains('nullo') && !input9.classList.contains('nullo')){
        input3.classList.add('lv1')
       input6.classList.add('lv1')
       input9.classList.add('lv1')
    }
}, 1)

const ltv1 = setInterval(()=> {
    if(!input1.classList.contains('nullx') && !input5.classList.contains('nullx') && !input9.classList.contains('nullx')){
       input1.classList.add('ltv1')
       input5.classList.add('ltv1')
       input9.classList.add('ltv1')

    } else if (!input1.classList.contains('nullo') && !input5.classList.contains('nullo') && !input9.classList.contains('nullo')){
        input1.classList.add('ltv1')
       input5.classList.add('ltv1')
       input9.classList.add('ltv1')
    }
}, 1)

const ltv2 = setInterval(()=> {
    if(!input3.classList.contains('nullx') && !input5.classList.contains('nullx') && !input7.classList.contains('nullx')){
       input3.classList.add('ltv2')
       input5.classList.add('ltv2')
       input7.classList.add('ltv2')

    } else if (!input3.classList.contains('nullo') && !input5.classList.contains('nullo') && !input7.classList.contains('nullo')){
        input3.classList.add('ltv2')
       input5.classList.add('ltv2')
       input7.classList.add('ltv2')
    }
}, 1)

button.addEventListener('click', event => {
    location.reload()
})
     






























