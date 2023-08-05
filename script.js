let button = document.querySelector('#enviar')

button.addEventListener('click', function (){
    let numeroCartao = document.querySelector('#numero_cartao').value
    let textoResultado = document.querySelector('#resultado')
    console.log(numeroCartao)

    if (numeroCartao >= 1000 && numeroCartao < 2000){
        textoResultado.innerHTML = 'parabens voce tem acesso a area restrita'
        textoResultado.style.color = 'green'
    }
    else if(numeroCartao >= 2000 && numeroCartao < 3000){
        textoResultado.innerHTML = 'acesso apenas a algumas areas restritas'
        textoResultado.style.color = 'white'
    }
    else if(numeroCartao == 0){
        textoResultado.innerHTML = 'informe o numero do cartao por favor'
    }
    else{
        textoResultado.innerHTML = 'voce nao tem acesso'
        textoResultado.style.color = 'red'
    }


})



