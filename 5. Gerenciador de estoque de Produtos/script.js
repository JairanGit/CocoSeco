let vetor = []

let main = document.getElementById('opt')

main.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        enviar()
        let add = document.getElementById('entrada')
        add.value = ''
        
    }
})

function menu() {
    let menu = document.getElementById('opt')
    menu.innerHTML = `
    <label for="entrada"> Adicionar </label>: <input type="text" id="entrada" class="entrada" placeholder="Produto..."> <button class="entrada-btn" id="enviar" onclick="enviar()"> Enviar </button> </br>
    <label for="entrada"> Remover </label>: <input type="text" class="remover" id="remover" placeholder="Produto..."> <button class="remover-btn" id="remover" onclick="remover()"> Remover </button> </br>
    <button id="sair" class="sair" onclick="sair()"> Sair </button>
    `
}

function enviar() {
    let adicionar = document.getElementById('entrada').value
    let lista = document.getElementById('lista')
    let item = document.createElement('li')

    lista.appendChild(item)

    item.innerHTML = `${adicionar}`
    vetor.push(adicionar)
    
}

function remover() {
    let remover = String(document.getElementById('remover').value)

    for (var i = 0; i<vetor.length; i++) {
        if(vetor[i] == remover) {
            vetor.splice(i,1)
            
            let itens = lista.getElementsByTagName('li')
            for (var j = 0; j<itens.length; j++) {
                if (itens[j].innerText == remover) {
                    lista.removeChild(itens[j])
                }
            }break
        }
    }

}

function sair() {
    let menu = document.getElementById('opt')
    menu.innerHTML = ''
}