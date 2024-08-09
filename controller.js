//  FUNÇÃO INICIAL DE VALIDAÇÃO DE ACESSO 
function acessar(){
    // OBTÉM O VALOR DO CAMPO DE E-MAIL
    let loginEmail = document.getElementById 
    ('loginEmail').value;
    //  OBTÉM O VALOR DO CAMPO DE SENHA 
    let loginSenha = document.getElementById
    ('loginSenha').value;

    // VERIFICA SE ALGUM DOS CAMPOS ESTÁ VAZIO 
    if(!loginEmail || !loginSenha){
        alert("Favor preencher todos os campos");
    }else{
        // EXIBE UM ALERTA DE SUCESSO SE AMBOS OS CAMPOS ESTIVEREM PRENCHIDOS
        alert("campos preenchidos com sucesso");
        // alert("campos preenchidos com sucesso");
        window.location.href = 'cadastro.html';
    
    }

}

// FUNÇÃO PARA ADICIONAR NOMES A UM ARRAY E EXIBIR  O ARRAY ATUALIZADO
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

// FUNÇÃO PARA GERAR UMA TABELA DE USUÁRIOS COM OPÇÕES DE EDIÇÃO E EXCLUSÃO 
function criaLista(){
    // INICIALIZA A TABELA COM CABEÇALHOS
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usúario</th><th>Ações</th></tr>";
    for(let i=0;i <= (dadosLista.length - 1);i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button type='button' onclick='editar(parentNode.parentNode.rowIndex)'>Editar</button><button type='button' onclick='excluir(parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }

}

//FUNÇÃO PARA EDITAR NOMES NA LISTA DE US
function editar(i){
    // DEFINE O VALOR DO CAMPO 'nomeUser' COM O NOME SELECIONADO 
    document.getElementById('nomeUser').value = dadosLista [(i - 1)];
    // REMOVE O NOME SELECIONADO  DA LISTA  DE DADOS
    dadosLista.splice(dadosLista[(i - 1)], 1);

}

/// FUNÇÃO PARA EXCLUIR UM NOME DA LISTA
function excluir(i){
    // REMOVE O NOME DO ARRAY DADOSLISTA NO ÍNDICE QUE É FORNECIDO
    dadosLista.splice((i -1), 1);
    // ATUALIZA A TABELA PARA REFLETIR A REMOÇÃO
    document.getElementById('tabela').deleteRow(i)
}