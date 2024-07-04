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