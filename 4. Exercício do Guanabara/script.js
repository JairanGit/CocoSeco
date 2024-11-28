let vetor = []
let input = document.getElementById('input')

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionar()
        input.value = ''
        input.focus()
    }
}) 

function adicionar() {
    let input1 = Number(input.value)
    let num = input1

    if (input.value == '' || input.value == 0 || vetor.includes(num) || input.value > 100 || input.value < 1) {
        alert('Por favor, adicione um valor válido ou que ainda não tenha na lista.')
    } else {
        let select = document.getElementById('select')
        let option = document.createElement('option')
        select.appendChild(option)
        option.innerHTML = `Valor ${num} adicionado.`
        vetor.push(input1)
        option.id = 'optionid'

        div1.innerHTML = ''
        div2.innerHTML = ''
        div3.innerHTML = ''
        div4.innerHTML = ''
        div5.innerHTML = ''
    }   
} 

function finalizar() {

    if (vetor == 0) {
        alert('Digite valores antes de finalizar.')
    } else {
        
    let div1 = document.getElementById('div1')
    let div2 = document.getElementById('div2')
    let div3 = document.getElementById('div3')
    let div4 = document.getElementById('div4')
    let div5 = document.getElementById('div5')

    let num = vetor.length

    let mavalor = vetor.sort((a,b) => b-a)
    let mavalor1 = mavalor[0]

    let mevalor = vetor.sort((a,b) => a-b)
    let mevalor1 = mevalor[0]

    let soma = aLoop(0)

    let media = soma/vetor.length
    let media1 = media.toFixed(2)
    
    div1.innerHTML = `Ao todo, temos ${num} números cadastrados.`
    div2.innerHTML = `O maior valor informado foi ${mavalor1}.`
    div3.innerHTML = `O menor valor informado foi ${mevalor1}.`
    div4.innerHTML = `A soma de todos os valores é ${soma}.`
    div5.innerHTML = `A media dos valores é ${media1}.`

    }
}

function aLoop(n) {
    let soma = n
    for (var i = soma; i<vetor.length; i++) {
        soma += vetor[i]
    } return soma
}

function clean() {
    let opt = document.getElementById('select')

    if (vetor == 0) {
        alert('Adicione itens antes de limpar a lista.')
    } else {
    opt.innerHTML = ''
    div1.innerHTML = ''
    div2.innerHTML = ''
    div3.innerHTML = ''
    div4.innerHTML = ''
    div5.innerHTML = ''
    }
}