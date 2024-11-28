let vetor = []
let input = document.getElementById('notas')

input.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        notas()
        input.focus()
    }
})

function notas() {

    let res2 = document.getElementById('res2')

    if(input.value > 5 || input.value <= 0) {
        alert('Erro, o mínimo de notas é 1 e o máximo 5.')
    } else {
        calculos(input.value)
        res2.innerHTML = `<button onclick="calcularmedia()"> Calcular Média </button>`
    }
}

function calculos(n) {
    let div = document.getElementById('res1')
    let num = n
    let res2 = document.getElementById('res2')
    let res3 = document.getElementById('res3')

    div.innerHTML=''
    res2.innerHTML=''
    res3.innerHTML=''

    for (var i = 0; i<num; i++)  {
        let soma = i
        div.innerHTML += `Nota ${soma+1}: <input id="inp${soma+1}" type="number" > <br>`
    }
    return num
}

function idsNum(n) {
    let nu = n
    for (let i = 0; i<nu; i++) {
        soma = i
        let valor = document.getElementById(`inp${soma+1}`).value
        vetor.push(Number(valor))
    }

}

function calcularmedia() {
    idsNum(input.value)
    let res3 = document.getElementById('res3')

    if (vetor.length === 0) {
        return 0
    } else {
        let soma = vetor.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
        let media = soma / vetor.length
        let media1 = media.toFixed(1)

        if (media < 0 || media > 10) {
            res3.innerHTML = 'Erro: A média calculada é inválida. Verifique os valores das notas e tente novamente.'
        } else {
            if (media < 5 && media >= 0) {
                res3.innerHTML=`A média das notas é: ${media1},  Conceito: D.`
            } else if (media < 6.9 && media >= 5) {
                res3.innerHTML=`A média das notas é: ${media1},  Conceito: C.`
            } else if (media < 8.9 && media >= 7) {
                res3.innerHTML=`A média das notas é: ${media1},  Conceito: B.`
            } else if (media >= 9) {
                res3.innerHTML=`A média das notas é: ${media1},  Conceito: A.`
            }
        }       
    }
    vetor = []
} 
