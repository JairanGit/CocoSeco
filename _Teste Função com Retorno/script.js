// Obtém o elemento com o ID "div" do HTML e armazena na variável "div"
// Esse elemento será usado para exibir o resultado
let div = document.getElementById('div'); 

// Obtém o elemento com o ID "num" do HTML e armazena na variável "num"
// Esse elemento é o campo de entrada onde o usuário digita um número
let num = document.getElementById('num'); 

// Função chamada quando o usuário interagir (ex.: clicar em um botão)
function teste() {
    // Converte o valor digitado no campo de entrada para um número
    // "num.value" é uma string, e "Number()" transforma em número
    let num1 = Number(num.value); 

    // Chama a função "teste1", passando dois argumentos: 
    // o número digitado (num1) e o número 9. Armazena o resultado em "res"
    let res = teste1(num1, 2); 

    // Atualiza o conteúdo do elemento "div" com o resultado calculado
    div.innerHTML = res; 
}

// Função que realiza a subtração entre dois números
// "n" é o primeiro número e "nu" é o segundo número
function teste1(n, nu) {
    
    // Subtrai o valor de "nu" do valor de "n" e armazena o resultado em "resul"
    let resul = n - nu; 

    // Retorna o valor calculado (resul) para onde a função foi chamada
    return resul; 
}