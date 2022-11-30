const form = document.getElementById('form');
const nomeContato = document.getElementById('nome-contato');
const telContato = document.getElementById('tel-contato');
const telefones = [];
const contatos = [];
let genero = '';

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    limpaForm(genero);
});

function adicionaLinha() {
    if(validaTelefone(telContato.value)){
        contatos.push(nomeContato.value);
        telefones.push(telContato.value);

        let linha = '<tr>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${telContato.value}</td>`;
        linha += `<td><img src="./images/${genero}.png"/></td>`;
        linha += '</tr>';

        linhas += linha;
    }
}

//TODO: adicionar máscara ao campo de telefone.
function validaTelefone(telefone) {
    console.log('entrei');
    if (telefones.includes(telefone)) {
        alert(`O telefone informado já está cadastrado para o contato: ${contatos[telefones.indexOf(telefone)]}`);
    } else { 
        return true;
    }
}

function limpaForm(elemGenero) {
    nomeContato.value = '';
    telContato.value = '';
    document.getElementById(elemGenero).classList.remove('selected');
}

function selecionarGenero(generoId) {
    if (genero === '') {
        genero = generoId;
        document.getElementById(genero).classList.add('selected');
    } else {
        document.getElementById(genero).classList.remove('selected');
        genero = generoId;
        document.getElementById(genero).classList.add('selected');
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}