let form = document.forms.submit
let inputs = form.querySelectorAll('input')
let needInputs = document.querySelectorAll('#need input')
let all = document.querySelector('#all')
let need = document.querySelector('#Need')
let success = document.querySelector('#Success')
let err = document.querySelector('#Error')

all.innerHTML = `All: ${inputs.length}`
need.innerHTML = `Need: ${needInputs.length}`

form.onsubmit = (event) => {
    event.preventDefault()
    let errors = ''
    let neeed = 0

    let error = inputs.length
    let suc = inputs.length

    inputs.forEach((inp) => {
        if (inp.value.length === 0) {
            suc--
            success.innerHTML = `Success: ${suc}/${inputs.length}`
        } else {
            error--
            err.innerHTML = `Error: ${error}/${inputs.length}`
        }
    })

    needInputs.forEach((inp) => {
        inp.style.border = '2px solid red'
        if (inp.value.length === 0) {
            neeed++
        } else {
            inp.style.border = '2px solid green'
            error++
        }
        need.innerHTML = `Need: ${neeed}/${needInputs.length}`
    })
    submit()
}

function submit() {
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })
}

inputs.forEach((inp) => {
    if (inp.value.length === 0) {
        success.innerHTML = `Success: ${inp.value.length}/${inputs.length}`
        err.innerHTML = `Success: ${inputs.length}/${inputs.length}`
    }
})