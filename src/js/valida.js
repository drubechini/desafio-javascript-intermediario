
/* Quando pessoa clicar em ENVIAR sem preencher, os campos input ficam com borda vermelha
Ao enviar o formulário, se o campo obrigatório não for preenchido a borda do input deve ficar vermelha e uma mensagem "campo obrigatório" também em vermelho deve aparecer embaixo do campo.
*/

const form = document.getElementById('form');
const campos = document.querySelectorAll('.obrigatorio');
const span = document.querySelectorAll('.mensagem-erro');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validaNome();
    validaEmail();
    validaTelefone();
    validaMensagem();

});



function mostraErro(index) {
    campos[index].style.border = '2px solid #ff0000';
    span[index].style.display = 'block';
}

function mostraValido(index) {
    campos[index].style.border = '2px solid #00ff00';
    span[index].style.display = '';
}

function validaNome() {
    if (campos[0].value.length < 3) {
        mostraErro(0);
    } else {
        mostraValido(0);
    }
}

function validaEmail() {
    if (campos[1].value.length < 3) {
        mostraErro(1);
    } else {
        mostraValido(1);

    }
}

function validaTelefone() {
    if (campos[2].value.length < 9) {
        mostraErro(2);
    } else {
        mostraValido(2);
    }
}

function validaMensagem() {
    if (campos[3].value.length < 3) {
        mostraErro(3);
    } else {
        mostraValido(3);
    }
}



