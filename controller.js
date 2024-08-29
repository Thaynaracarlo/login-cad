// VALIDAR ACESSO EM TELA DE LOGIN
function acessar() { // CRIA UMA FUNÇÃO  QUE VALIDA O QUE FOI ESCRITO NOS CAMPOS DE LOGIN
    let loginSenha = document.getElementById("loginSenha").value;
   
    if (document.forms[0].email.value == "" ||
        document.forms[0].email.value.indexOf('@') == -1 ||
        document.forms[0].email.value.indexOf('.') == -1) {
       // Mostra mensagem dentro da div 'span" caso usuário não preencha corretamente os campos de Login.
        document.getElementById("span").innerHTML = "Por favor preencha seu email. Ex: @dominio.com";
    }else if(!loginSenha){
        document.getElementById("span").innerHTML = "Por favor preencha sua senha.";
    } else {
        window.location.href = "cadastro.html"
 
    }
}

 
var userLista = []; //Array Usuarios
var emaillista = [];// Array email
var alert = document.getElementById("alert"); // Mensagem de Span, variavel utilizada nas funcões salvarUser e editar
var h6 = document.getElementById("text");
// FUNÇÃO QUE ARMAZENA EM ARRAY NOME NA TELA DE CADASTRO
function salvarUser() {
    let nomeUser = document.getElementById("nomeUser").value; // Pega valor do input digitado pelo usuário
    let emailUser = document.getElementById("emailUser").value; // Pega valor do input digitado pelo usuário
    if (nomeUser) { //Se existe valor digitado pelo user
 
        userLista.push(nomeUser); // Adiciona valor ao array
        emaillista.push(emailUser);
        criaLista(); // Inicia a funcão cria lista
        document.getElementById("nomeUser").value = ""; // Após envio do campo de Login, o input fica vazio
        document.getElementById("emailUser").value = ""; // Após envio do campo de Login, o input fica vazio
        alert.innerHTML = ""; //Div onde fica mensagem de aviso fica vazia
        h6.style.display = "none";
 
 
    } else if(emailUser){
        userLista.push(nomeUser); // Adiciona valor ao array
        emaillista.push(emailUser);
        criaLista(); // Inicia a funcão cria lista
        document.getElementById("nomeUser").value = ""; // Após envio do campo de Login, o input fica vazio
        document.getElementById("emailUser").value = ""; // Após envio do campo de Login, o input fica vazio
        alert.innerHTML = ""; //Div onde fica mensagem de aviso fica vazia
        h6.style.display = "none";
    }
        else {
        // alert("Favor informar o nome para cadastro"); // Caso o usuário não preencha o campo ele aparecera um Pop-up para preenchimento completo do cadastro.
        alert.style.color = "red";
        alert.innerHTML = "Preencha o formulário de cadastro";
 
 
 
    }
 
}
 
 
// FUNÇÃO QUE CRIA LISTA DE USUÁRIOS
 
// <td> = criar a coluna | <tr> = criar a linha |<th> = cabeçalho da tabela| += = oque estiver dentro da tabela fica, mais adiciona mais algum item há tabela.
 
function criaLista() {
    let tabelaDesign = document.getElementById("tabela"); //Variável para personalização da tabela
    // Estrutura da tabela que receberá dados dos usuários
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome Usuário</th><th>Email</th><th>Ações</th></tr>";
    for (let i = 0; i <= (userLista.length - 1); i++) {
        tabelaDesign.style.backgroundColor = "#ffff";
        tabela += "<tr><td>" + userLista[i] + "</td><td>" + emaillista[i] + "</td><td><button type='button' onclick='editar(parentNode.parentNode.rowIndex)'>Editar</button><button type='button' onclick='excluir(parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById("tabela").innerHTML = tabela;
 
    }
   
}
 
// FUNÇÃO PARA EDITAR NOMES DE LISTA
function editar(i) {
 
    document.getElementById("nomeUser").value = userLista[(i - 1)]; userLista.splice(userLista[(i - 1)], 1);
    document.getElementById("emailUser").value = emaillista[(i - 1)]; emaillista.splice(emaillista[(i - 1)], 1);
    alert.innerHTML = "";
 
}
 
// FUNÇÃO QUE EXCLUI NOME DA LISTA
function excluir(i) {
    userLista.splice((i - 1), 1);
    emaillista.splice((i - 1), 1);
    document.getElementById('tabela').deleteRow(i);
   
}
 