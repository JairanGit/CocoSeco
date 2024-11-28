let produtos = [ 
    {nome: "Camiseta", preco: 50},
    {nome: "Calça", preco: 100},
    {nome: "Tênis", preco: 150}
]

let prod = document.getElementById('prod')
prod.innerHTML = `Produtos disponíveis: <strong>${produtos.length}</strong>. <button style="border-radius: 8px; border: 1px solid gray;" onclick="mostrar()">Mostrar</button>`

let prod2 = document.getElementById('prod2')

let total = document.getElementById('res')
let total1 = 0

let camisa = 0
let calca = 0
let tenis = 0

function mostrar() {
    let tshirt = produtos[0].preco
    let calca = produtos[1].preco
    let tenis = produtos[2].preco

    let preco50 = tshirt.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    let preco100 = calca.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    let preco150 = tenis.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

    prod2.innerHTML = `<br>
    1. ${produtos[0].nome}: <strong>${preco50}</strong>
    <button onclick="add1()" style="border-radius: 10px; border: 1px solid gray;">+</button>
    <button onclick="remove1()" style="border-radius: 10px; border: 1px solid gray; width: 23px;">-</button><br>

    2. ${produtos[1].nome}: <strong>${preco100}</strong>
    <button onclick="add2()" style="border-radius: 10px; border: 1px solid gray;">+</button>
    <button onclick="remove2()" style="border-radius: 10px; border: 1px solid gray; width: 23px;">-</button><br>

    3. ${produtos[2].nome}: <strong>${preco150}</strong>
    <button onclick="add3()" style="border-radius: 10px; border: 1px solid gray;">+</button>
    <button onclick="remove3()" style="border-radius: 10px; border: 1px solid gray; width: 23px;">-</button><br>`
}

function add1() {
    let res = document.getElementById('res2')
    let xx = document.getElementById('camisaqtd')

    camisa += 1
    xx.innerHTML = `${camisa}x (Camisas)`

    total1 += produtos[0].preco
    let total2 = total1.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    
    res.innerHTML = `<br>Camiseta adicionada ao carrinho!<br><br>`
    total.innerHTML = `<br><strong> Total: ${total2} </strong> <br><br> <button onclick="finalizar()" style="border-radius: 8px; border: 1px solid gray;">Finalizar Compra</button>`
}

function add2() {
    let res = document.getElementById('res2')
    let xx = document.getElementById('calcaqtd')

    calca += 1
    xx.innerHTML = `${calca}x (Calças)`

    total1 += produtos[1].preco
    let total2 = total1.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

    res.innerHTML = `<br>Calça adicionada ao carrinho!<br><br>`
    total.innerHTML = `<br><strong> Total: ${total2} </strong> <br><br> <button onclick="finalizar()"  style="border-radius: 8px; border: 1px solid gray;">Finalizar Compra</button>`
}

function add3() {
    let res = document.getElementById('res2')
    let xx = document.getElementById('tenisqtd')

    tenis += 1
    xx.innerHTML = `${tenis}x (Tênis)`

    total1 += produtos[2].preco
    let total2 = total1.toLocaleString('pt-br', {style:'currency', currency: 'BRL'})

    res.innerHTML = `<br>Tênis adicionado ao carrinho!<br><br>`
    total.innerHTML = `<br><strong> Total: ${total2}</strong> <br><br> <button onclick="finalizar()"  style="border-radius: 8px; border: 1px solid gray;">Finalizar Compra</button>`
}

function remove1() {
    let xx = document.getElementById('camisaqtd')

    if (camisa > 0) {
        camisa -= 1
        xx.innerHTML = `${camisa}x (Camisas)`

        total1 -= produtos[0].preco
        let total2 = total1.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

        total.innerHTML = `<br><strong> Total: ${total2}</strong> <br><br> <button onclick="finalizar()" style="border-radius: 8px; border: 1px solid gray;">Finalizar Compra</button>`
    } else {

        alert('A quantidade do produto não pode ser menor que zero.')
    }
}

function remove2() {
    let xx = document.getElementById('calcaqtd')

    if (calca > 0) {
        calca -= 1
        xx.innerHTML = `${calca}x (Calças)`

        total1 -= produtos[1].preco
        let total2 = total1.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

        total.innerHTML = `<br><strong> Total: ${total2}</strong> <br><br> <button onclick="finalizar()" style="border-radius: 8px; border: 1px solid gray;">Finalizar Compra</button>`

    } else {

        alert('A quantidade do produto não pode ser menor que zero.')       
    }
}

function remove3() {
    let xx = document.getElementById('tenisqtd')

    if (tenis > 0) {
        tenis -= 1
        xx.innerHTML = `${tenis}x (Tênis)`

        total1 -= produtos[2].preco
        let total2 = total1.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

        total.innerHTML = `<br><strong> Total: ${total2}</strong> <br><br> <button onclick="finalizar()" style="border-radius: 8px; border: 1px solid gray;">Finalizar Compra</button>`
    } else {
        alert('A quantidade do produto não pode ser menor que zero.')
    }
}

function finalizar() {
    let fin = document.getElementById('fin')
    let div = document.createElement('div')
    let total = produtos[0].preco*camisa
    let total2 = produtos[1].preco*calca
    let total3 = produtos[2].preco*tenis

    let soma = total+total2+total3

    fin.innerHTML = ''

    fin.appendChild(div)

    let soma1 = soma.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

    div.innerHTML = `
    Camisa: <b>${camisa}x</b> <br>
    Calça: <b>${calca}x</b> <br>
    Tênis: <b>${tenis}x</b> <br>
    <br> O valor total da sua compra é: <strong>${soma1}</strong> ! <br><br>
    <b>Muito Obrigado !</b>`
}