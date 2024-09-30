
/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

document.getElementById('formularioIMC').addEventListener('submit', function(){
    event.preventDefault();//impede o envio do formulario
    
    const Numero_Conta = document.formularioIMC.Numero_Conta.value;
    var CPF = document.formularioIMC.CPF.value;
    const senha = document.formularioIMC.senha.value;
    const Frase_secreta = document.formularioIMC.Frase_secreta.value;
    var situacao;
    

document.getElementById('mensagemSaida').innerHTML =
        "Obrigado pelo seus dados, \n\
        Número da conta:" + Numero_Conta + "\n\
        CPF:" + CPF + "\n\
        Senha:" + senha + "\n\
        Frase Secreta:" + Frase_secreta + "\n\
        Em breve enviaremos uma resposta!";
        
     
//mostra a saida
document.getElementById('mensagem').style.display = 'block';

});