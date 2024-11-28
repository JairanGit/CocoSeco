let vetor = []

function adicionar() {
    let teste = document.getElementById('addaluno')

    if (teste.innerHTML === '') {
        teste.innerHTML = 
        `Nome: 
        <input id="inputaddnom"></input> <br>
        Nota:
        <input id="inputaddnot"></input>
        <button onclick="addnot()">Adicionar</button>`
    } else {
        teste.innerHTML = ''
    }
}

function addnot() {
    let inputnom = document.getElementById('inputaddnom')
    let inputnot = document.getElementById('inputaddnot').value.split(",")

    let notasconvert = inputnot.map(nota => parseFloat(nota.trim())).filter(nota => !isNaN(nota)) 

    vetor.push({nome: inputnom.value, nota: notasconvert})
}

function media() {
    let media = document.getElementById('media')
    media.innerHTML = ''

    vetor.forEach((obj) => {
        let mediaobj = calcularMedia(obj.nota)
        media.innerHTML += `Aluno(a): ${obj.nome}, Média: ${mediaobj.toFixed(1)}`

    })
}

function calcularMedia(notas) {
    let soma = notas.reduce((acc, curr) => acc + curr, 0)
    return soma / notas.length
}

function listar() {
    let lista = document.getElementById('lista')
    lista.innerHTML = ''

    vetor.forEach((obj) => {
        lista.innerHTML += `Nome: <b>${obj.nome}</b>, Nota: <b>${obj.nota}</b> <br>`
    })
}