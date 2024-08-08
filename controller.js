// FUNÇÃO PARA VALIDAÇÃO DE ACESSO 

function acessar(){
    let loginEmail = document.getElementById 
    ('loginEmail').value;
    let loginSenha = document.getElementById
    ('loginSenha').value;

    if(!loginEmail || !loginSenha){
        alert("Favor preencher todos os campos");
    }else{
        alert("campos preenchidos com sucesso");
        // alert("campos preenchidos com sucesso");
        window.location.href = 'cadastro.html';
    
    }

}

//FUNÇÃO PARA ARMAZENAMENTO DE NOMES EM ARRAY
var dadosLista = [];
function salvarUser(){
    let nomeUser = document.getElementById ('nomeUser').value;

    if(nomeUser){
        dadosLista.push(nomeUser);
        //console.log(dadosLista);
        criaLista()
        document.getElementById('nomeUser').value = "";

    }else{
       alert("Favor informe um nome para cadastro");
    }
}
// FUNÇÃO QUE CRIA LISTA DE USUÁRIOS
function criaLista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usúario</th><th>Ações</th></tr>";
    for(let i=0;i <= (dadosLista.length - 1);i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button type='button' onclick='editar(parentNode.parentNode.rowIndex)'>Editar</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }

}

//FUNÇÃO PARA EDITAR NOMES DE LISTA
function editar(i){
    document.getElementById('nomeUser').value = dadosLista
    [(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)], 1);

}