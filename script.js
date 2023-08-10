let button = document.querySelector('#enviar')

button.addEventListener('click', function (){
    let numeroCartao = document.querySelector('#numero_cartao').value;
    let textoResultado = document.querySelector('#resultado');

    if (numeroCartao >= 1000 && numeroCartao < 2000){
        textoResultado.innerHTML = 'Parabens você tem acesso a area restrita'
        textoResultado.style.color = 'green'
    }

    else if(numeroCartao >= 2000 && numeroCartao < 3000){
        textoResultado.innerHTML = 'Acesso apenas a algumas areas restritas'
        textoResultado.style.color = 'white'
    }

    else if(numeroCartao == 0){
        textoResultado.innerHTML = 'Por favor informe o número do cartão'
        textoResultado.style.color = 'gray'
    }

    else{
        textoResultado.innerHTML = 'Sem acesso'
        textoResultado.style.color = 'red'
    }


})



