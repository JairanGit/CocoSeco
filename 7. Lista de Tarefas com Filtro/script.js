let ids = 1
let tarefabtn = document.getElementById('tarefa')

tarefabtn.addEventListener('keydown', (function(event) {
    if(event.key === 'Enter') {
        add()
        tarefabtn.value = ''
        tarefabtn.focus()
    }
}))

function add() {

    let tarefa = document.getElementById('tarefa').value

    if (tarefa === '') {
        alert('Preencha o campo.')
        
    } else {
        let div = document.getElementById('check')
        let input = document.createElement('input')
        div.style.marginTop = '10px'
        input.id = `elemento-${ids}`
        input.type = "checkbox"
        input.value = tarefa

        let label = document.createElement('label')
        label.innerHTML = ` <strong>${tarefa}</strong>`
        label.style.marginLeft = "5px"

        let button = document.createElement('button')
        button.innerHTML = '🗑️'
        button.style.marginLeft = '20px'
        button.style.borderRadius = '10px'
        button.style.border = '1px solid gray'

        label.prepend(input)
        label.appendChild(button)
        div.appendChild(label)
        div.appendChild(document.createElement('br'))

        ids++

        input.addEventListener('change', function() {
            if(input.checked) {
                label.classList.add('riscar')
            } else {
                label.classList.remove('riscar')
            }
        })

        button.onclick = function() {
            removeCheckbox(input)
        }
    }
}

function filtro() {
    let div = document.getElementById('opt')
    div.style.display = 'flex'
    div.style.justifyContent = 'center'
    div.style.gap = '5px'
    div.style.marginTop = '8px'

    if (div.innerHTML === '') {
        let btn1 = document.createElement('button')
        let btn2 = document.createElement('button')
        let btn3 = document.createElement('button')

        div.appendChild(btn1)
        div.appendChild(btn2)
        div.appendChild(btn3)

        btn1.innerHTML = 'Marcados'
        btn2.innerHTML = 'Desmarcados'
        btn3.innerHTML = 'Todos'

        btn1.onclick = btni
        btn2.onclick = btnj
        btn3.onclick = btnk

        btn1.style.borderRadius = '8px'
        btn2.style.borderRadius = '8px'
        btn3.style.borderRadius = '8px'
        btn1.style.border = '1px solid gray'
        btn2.style.border = '1px solid gray'
        btn3.style.border = '1px solid gray'
    } else {
        div.innerHTML = ''
    }
}

function btni() {
    let div = document.getElementById('check')
    let checkboxes = div.querySelectorAll('input[type="checkbox"]')

    checkboxes.forEach(checkbox => {
        let label = checkbox.parentElement  //pai do checkbox
        let br = label.nextElementSibling  //próxima quebra de linha

        if (checkbox.checked) {
            label.style.display = 'inline-block'  //exibe marcados
            br.style.display = 'inline'  //exibe quebra de linha
        } else {
            label.style.display = 'none'  //oculta desmarcados
            br.style.display = 'none'  //oculta quebra de linha
        }
    });    
}

function btnj() {
    let div = document.getElementById('check')
    let checkboxes = div.querySelectorAll('input[type="checkbox"]')

    checkboxes.forEach(checkbox => {
        let label = checkbox.parentElement
        let br = label.nextElementSibling

        if (!checkbox.checked) {
            label.style.display = 'inline-block'  //exibe marcados
            br.style.display = 'inline'  //exibe quebra de linha
        } else {
            label.style.display = 'none'  //oculta desmarcados
            br.style.display = 'none'  //oculta quebra de linha
        }
    })
}

function btnk() {
    let div = document.getElementById('check')
    let checkboxes = div.querySelectorAll('input[type="checkbox"]')

    checkboxes.forEach(checkbox => {
        let label = checkbox.parentElement
        let br = label.nextElementSibling

        if (checkbox) {
            label.style.display = 'inline-block'
            br.style.display = 'inline'
        }
    })
}

function removeCheckbox(checkbox) {
    let label = checkbox.parentElement // O checkbox está dentro de um <label>
    let br = label.nextElementSibling

    label.remove()  // Remove o label inteiro (incluindo o checkbox e o botão)
    br.remove()
}