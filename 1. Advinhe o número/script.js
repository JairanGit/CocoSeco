let min = 1
let max = 30
var rando = Math.floor(Math.random() * (max - min + 1))+min
var life = 5
var input = document.getElementById('numb')

input.addEventListener('keypress', function(event){
    if (event.key === 'Enter') {
        verif()
        input.value = ''
        input.focus()
    }
})

function verif() {
    var res = document.getElementById('result')
    var nu = document.getElementById('numb')
    var num = Number(nu.value)
    var vidas = document.getElementById('vidas')
    
    if(num <= 0 || num > 30) {
        alert('Favor, digite um número válido.')
    } else if (num > rando) {
        res.innerHTML = `O número é menor que ${num}.`   
        while (life > 0) {
            life -= 1
            vidas.innerHTML = `Tentativas: ( ${life} )`
            break
        } 
    } else if (num < rando) {
        res.innerHTML = `O número é maior que ${num}.`
        while (life > 0) {
            life -= 1
            vidas.innerHTML = `Tentativas:( ${life} )`
            break
        } 
    } else if (num == rando) {
        res.innerHTML = `<strong> Parabéns, o número é ${rando}!</strong>`
    }
    if (life == 0) {
        alert(`Game over, o número era ${rando}.`)
        location.reload()
    }
}