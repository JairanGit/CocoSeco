let input1 = document.getElementById('input')
let contador = 0 
let contadords = document.getElementById('contador')

input1.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        add();
        input1.value = '';
        input1.focus();
    }
});

function add() {
    let input2 = input1.value.trim()

    if (input2 === '') {
        alert('Por favor, adicione uma tarefa.');
    } else {
        let novatarefa = document.createElement('li')
        novatarefa.innerHTML = `${input2}`
        let lista = document.getElementById('lista')

        let excluir = document.createElement('button')
        excluir.innerHTML = 'Deletar'
        excluir.style.marginLeft = '50px'
        excluir.style.marginTop = '3px'

        excluir.addEventListener('click', function() {
            lista.removeChild(novatarefa)
            atualizarContador(-1) 
        })

        novatarefa.appendChild(excluir)
        lista.appendChild(novatarefa)
        atualizarContador(1)
    }
}

function clean() {
    let lista = document.getElementById('lista')
    lista.innerHTML = ''

    contador=0
    contadords.innerHTML = `Itens da lista ${contador}`
}

function atualizarContador(n) {
    contador += n
    contadords.innerHTML = `Itens da lista ${contador}`
}