/*
Funcionalidades JavaScript:

    Ao carregar a página, o JavaScript deve:
        Gerar um número aleatório entre 1 e 100 e armazená-lo em uma variável. ok
        Definir o número máximo de tentativas (ex: 10). ok
        Inicializar o contador de tentativas. ok
    Ao clicar no botão "Chutar", o JavaScript deve:
        Capturar o valor inserido no input (palpite do jogador). ok
        Validar se o palpite é um número válido entre 1 e 100. ok
    Comparar o palpite com o número secreto e exibir uma mensagem:
        "Você acertou!" (e o jogo termina).
        "O número secreto é maior" (e o jogador continua tentando).
        "O número secreto é menor" (e o jogador continua tentando).
    Decrementar o contador de tentativas.
    Exibir o número de tentativas restantes.
    Se o jogador atingir o número máximo de tentativas, o jogo termina com a mensagem "Você perdeu! O número secreto era X".


*/



//define limite de tentativas
const tentativas = 0;

//console.log(numeroDaSorte);

//faz a contagem das tentativas
for(i=1; i<=10; i++){
    
    
    console.log(tentativas+i);
}


function validaPalpite(obterValorDoPalpite, numeroDaSorte){
    
    //valida palpite
    if(!(obterValorDoPalpite >= 1 && obterValorDoPalpite <= 3)){
        console.log('palpite invalido');

    }else if(obterValorDoPalpite === numeroDaSorte){
        
        console.log(numeroDaSorte);
        console.log(obterValorDoPalpite);
        console.log('voce acertou');
        
    }
}



function chute(){

    //gera numero da sorte
    const numeroDaSorte = Math.floor(Math.random() * (1-3+1)+3);
    console.log(numeroDaSorte);
    const obterValorDoPalpite = parseFloat(document.getElementById('palpite').value);
    console.log(obterValorDoPalpite);

    

    validaPalpite(obterValorDoPalpite, numeroDaSorte);

    //console.log(obterValorDoPalpite);

}



console.log(obterValorDoPalpite);