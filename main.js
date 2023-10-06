const form = document.getElementById("form-contatos");
let linhas = '';
const contatos = [];
const telefone = [];

form.addEventListener("submit", function(e){
    e.preventDefault();
    adicionarLinha();
    atualizaTabela();
})


function adicionarLinha(){
    const inputNome = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('numero-telefone');

    if(contatos.includes(inputNome.value)){
        alert(`O contato :  ${inputNome.value} já foi inserido`);
    }else{
        contatos.push(inputNome.value);
        telefone.push(inputTelefone.value);

        let linha = '<tr>';
        linha += `<td> ${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';

        linhas += linha
    }
    inputNome.value= '';
    inputTelefone.value= '';

    console.log(inputNome)
    
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas; 
}