let input = document.getElementById('centvalor')

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        conf()
        input.focus()
    }
})


function conf() {
    let cent = document.getElementById('centvalor')
    let item = document.getElementById('p')
    let cent1 = Number(cent.value)
    let cent2 = cent1/100
    let cent3 = cent2.toLocaleString('pt-BR')
    let res = document.getElementById('res')
    let res1 = document.getElementById('res1')

    if(cent.value == 0 || cent.value > 99 || cent.value < 1) {
        alert('Por favor, informe a quantos centavos você recebe.')
    } else {
        item.innerHTML = `Você recebe a <strong>${cent3}</strong> centavos! O calculo será feito com base nesse valor.`
    }

    res.innerHTML = ''
    res1.innerHTML = ''
}

function ok() {
    let seg = document.getElementById('seg')
    let ter = document.getElementById('ter')
    let qua = document.getElementById('qua')
    let qui = document.getElementById('qui')
    let sex = document.getElementById('sex')
    let seg2 = document.getElementById('seg2')
    let ter2 = document.getElementById('ter2')
    let qua2 = document.getElementById('qua2')
    let qui2 = document.getElementById('qui2')
    let sex2 = document.getElementById('sex2')


    let dia1 = Number(seg.value)
    let dia2 = Number(ter.value)
    let dia3 = Number(qua.value)
    let dia4 = Number(qui.value)
    let dia5 = Number(sex.value)
    let dia6 = Number(seg2.value)
    let dia7 = Number(ter2.value)
    let dia8 = Number(qua2.value)
    let dia9 = Number(qui2.value)
    let dia10 = Number(sex2.value)

    

    let res = document.getElementById('res')
    let res1 = document.getElementById('res1')
    let cent = document.getElementById('centvalor')
    let cent1 = Number(cent.value)
    let cent2 = cent1/100 //USADO P MULTIPLICAR

    let soma = dia1+dia2+dia3+dia4+dia5+dia6+dia7+dia8+dia9+dia10
    let din = soma*cent2
    let din2 = new Intl.NumberFormat('pt-br', { style:'currency', currency: 'BRL'}).format(din)

    if (soma == 0) {
        alert('Preencha pelo menos um campo.')
    } else {
        res.innerHTML =`<p>Você descascou ao todo <strong>${soma}</strong> cocos!</p>`
        if (cent.value == 0) {
            res1.innerHTML = `Para calcularmos quanto você vai receber, <strong>preencha o campo dos centavos.</strong>`
        } else {
            res1.innerHTML = `Você vai receber <strong>${din2}</strong> nessa quinzena!`
        }
    }
}