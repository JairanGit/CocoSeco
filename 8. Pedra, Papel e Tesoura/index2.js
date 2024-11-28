var contador1 = 0
var contador2 = 0

function pd(){
    let res = document.getElementById('resultado')
    let pc = document.getElementById('pc')
    let win = document.getElementById('vencedor')
    
    let escolha = ' Pedra'

    let cpu = [' Pedra',' Papel',' Tesoura']
    let sorteio = Math.floor(Math.random() * cpu.length)
    let sorteado = cpu[sorteio]

    let placar1 = document.getElementById('placar1')
    let placar2 = document.getElementById('placar2')

    res.innerHTML = `Você escolheu ${escolha} !`
    pc.innerHTML = `<b>></b> A CPU escolheu ${sorteado} !`

    if (sorteio == 0) {
        win.innerHTML = `<b>Empate.</b>`

    } else if (sorteio == 1) {
        win.innerHTML = `<b>Você perdeu, papel ganha de pedra.</b>`
        while (contador1 < 10) {
            contador1 += 1
            placar1.innerHTML = contador1
            if (contador1 == 10) {
                alert('CPU venceu!')
                location.reload()
            }
            break
        }

    }else if (sorteio == 2) {
        win.innerHTML = `<b>Você ganhou, pedra ganha de tesoura.</b>`
        while (contador2 < 10) {
            contador2 += 1
            placar2.innerHTML = contador2
            if (contador2 == 10) {
                alert('VOCÊ venceu!')
                location.reload()
            }
            break
        }
    }
}

function pp(){
    let res = document.getElementById('resultado')
    let pc = document.getElementById('pc')
    let win = document.getElementById('vencedor')
    
    let escolha = ' Papel'

    let cpu = [' Pedra',' Papel',' Tesoura']
    let sorteio = Math.floor(Math.random() * cpu.length)
    let sorteado = cpu[sorteio]

    let placar1 = document.getElementById('placar1')
    let placar2 = document.getElementById('placar2')

    res.innerHTML = `Você escolheu ${escolha} !`
    pc.innerHTML = `<b>></b> A CPU escolheu ${sorteado} !`

    if (sorteio == 1) {
        win.innerHTML = `<b>Empate.</b>`

    } else if (sorteio == 2) {
        win.innerHTML = `<b>Você perdeu, tesoura corta papel.</b>`
        while (contador1 < 10) {
            contador1 += 1
            placar1.innerHTML = contador1
            if (contador1 == 10) {
                alert('CPU venceu!')
                location.reload()
            }
            break
        }

    }else if (sorteio == 0) {
        win.innerHTML = `<b>Você ganhou, papel ganha de pedra.</b>`
        while (contador2 < 10) {
            contador2 += 1
            placar2.innerHTML = contador2
            if (contador2 == 10) {
                alert('VOCÊ venceu!')
                location.reload()
            }
            break
        }
    }
    
}

function ts(){
    let res = document.getElementById('resultado')
    let pc = document.getElementById('pc')
    let win = document.getElementById('vencedor')
    
    let escolha = ' Tesoura'

    let cpu = [' Pedra',' Papel',' Tesoura']
    let sorteio = Math.floor(Math.random() * cpu.length)
    let sorteado = cpu[sorteio]

    let placar1 = document.getElementById('placar1')
    let placar2 = document.getElementById('placar2')

    res.innerHTML = `Você escolheu ${escolha} !`
    pc.innerHTML = `<b>></b> A CPU escolheu ${sorteado} !`

    if (sorteio == 2) {
        win.innerHTML = `<b>Empate.</b>`

    } else if (sorteio == 0) {
        win.innerHTML = `<b>Você perdeu, pedra quebra a tesoura.</b>`
        while (contador1 < 10) {
            contador1 += 1
            placar1.innerHTML = contador1
            if (contador1 == 10) {
                alert('CPU venceu!')
                location.reload()
            }
            break
        }

    }else if (sorteio == 1) {
        win.innerHTML = `<b>Você ganhou, tesoura corta papel.</b>`
        while (contador2 < 10) {
            contador2 += 1
            placar2.innerHTML = contador2
            if (contador2 == 10) {
                alert('VOCÊ venceu!')
                location.reload()
            }
            break
        }
    }

}