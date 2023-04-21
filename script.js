let form = document.forms.submit
let inputs = form.querySelectorAll('input')
let all = document.querySelector('#all')
let need = document.querySelector('#Need')
let successs = document.querySelector('#Success')
let errorr = document.querySelector('#Error')
let needdiv = document.querySelectorAll('#need input')
let h4 = document.querySelectorAll('h4')

let success = 0

form.onsubmit = (event) => {
    event.preventDefault()

    let erors = ''
    let success = 0
    let error = needdiv.length

    inputs.forEach((input) => {
        if (input.value.length >= 1) {
            success++
            successs.innerHTML = `Success: ${success}/ ${inputs.length}`
        }
    })

    needdiv.forEach((input) => {
        input.style.border = '5px solid blue'
        h4.forEach(text => {
            text.style.color = 'black'
            text.innerHTML = ''
        })
        if (input.value.length === 0) {
            input.style.border = '5px solid red'
            erors += ` ${input.name}`
            h4.forEach(text => {
                if (input.value.length === 0) {
                    text.innerHTML = 'Please enter your email adress'
                    text.style.color = 'red'
                } else {
                    text.innerHTML = ''
                }
            })
        } else {
            error--
            errorr.innerHTML = `Error: ${error}/ ${needdiv.length}`
            h4.forEach(text => {
                text.innerHTML = ''
                text.style.color = 'black'
            })
        }
    })

    if (!erors) {
        submit()
    } else {
        alert(`У вас не заполнено поле${erors}`)
    }
}

function submit() {
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })
}

all.innerHTML = `All: ${inputs.length}`
need.innerHTML = `Need: ${needdiv.length}`
