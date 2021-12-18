

const form = document.querySelector('.form')
const button = document.querySelector('#button')
const input1 = document.querySelector('#cx1')
const input2 = document.querySelector('#cx2')
const input3 = document.querySelector('#cx3')
const input4 = document.querySelector('#cx4')
const input5= document.querySelector('#cx5')
const input6 = document.querySelector('#cx6')
const input7 = document.querySelector('#cx7')
const input8 = document.querySelector('#cx8')
const input9 = document.querySelector('#cx9')
//const box = Array.from(form.children)[0].id
const box = Array.from(form.children)

input1.addEventListener('input', event => {
    const getValue = event.target.value.toLowerCase()
    
    if(getValue==="x"){
        input1.classList.remove('nullx')
        input1.classList.toggle('x')
        
    } else if (getValue==="o"){
        input1.classList.remove('nullo')
        input1.classList.toggle('o')
    }

})

input2.addEventListener('input', event => {
    const getValue = event.target.value.toLowerCase()
    
    if(getValue==="x"){
        input2.classList.remove('nullx')
        input2.classList.toggle('x')
        
    } else if (getValue==="o"){
        input2.classList.remove('nullo')
        input2.classList.toggle('o')
    }

})

input3.addEventListener('input', event => {
    const getValue = event.target.value.toLowerCase()
    
    if(getValue==="x"){
        input3.classList.remove('nullx')
        input3.classList.toggle('x')
        
    } else if (getValue==="o"){
        input3.classList.remove('nullo')
        input3.classList.toggle('o')
    }

})  

input4.addEventListener('input', event => {
    const getValue = event.target.value.toLowerCase()
    
    if(getValue==="x"){
        input4.classList.remove('nullx')
        input4.classList.toggle('x')
        
    } else if (getValue==="o"){
        input4.classList.remove('nullo')
        input4.classList.toggle('o')
    }

})  

input5.addEventListener('input', event => {
    const getValue = event.target.value.toLowerCase()
    
    if(getValue==="x"){
        input5.classList.remove('nullx')
        input5.classList.toggle('x')
        
    } else if (getValue==="o"){
        input5.classList.remove('nullo')
        input5.classList.toggle('o')
    }

})  

input6.addEventListener('input', event => {
    const getValue = event.target.value.toLowerCase()
    
    if(getValue==="x"){
        input6.classList.remove('nullx')
        input6.classList.toggle('x')
        
    } else if (getValue==="o"){
        input6.classList.remove('nullo')
        input6.classList.toggle('o')
    }

})  

input7.addEventListener('input', event => {
    const getValue = event.target.value.toLowerCase()
    
    if(getValue==="x"){
        input7.classList.remove('nullx')
        input7.classList.toggle('x')
        
    } else if (getValue==="o"){
        input7.classList.remove('nullo')
        input7.classList.toggle('o')
    }

}) 

input8.addEventListener('input', event => {
    const getValue = event.target.value.toLowerCase()
    
    if(getValue==="x"){
        input8.classList.remove('nullx')
        input8.classList.toggle('x')
        
    } else if (getValue==="o"){
        input8.classList.remove('nullo')
        input8.classList.toggle('o')
    }

}) 

input9.addEventListener('input', event => {
    const getValue = event.target.value.toLowerCase()
    
    if(getValue==="x"){
        input9.classList.remove('nullx')
        input9.classList.toggle('x')
        
    } else if (getValue==="o"){
        input9.classList.remove('nullo')
        input9.classList.toggle('o')
    }

}) 
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
     






























