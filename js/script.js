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
        "Você acertou!" (e o jogo termina). ok
        "O número secreto é maior" (e o jogador continua tentando). ok
        "O número secreto é menor" (e o jogador continua tentando). ok
    Decrementar o contador de tentativas.
    Exibir o número de tentativas restantes.
    Se o jogador atingir o número máximo de tentativas, o jogo termina com a mensagem "Você perdeu! O número secreto era X".


*/



//define limite de tentativas
let tentativas = 0;
let limite = 10;
const numeroDaSorte = Math.floor(Math.random() * 3) + 1;





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

function dicaPalpites(obterValorDoPalpite, numeroDaSorte){

    if(obterValorDoPalpite < numeroDaSorte){
        console.log('Chute um numero mais alto!');
    }else if(obterValorDoPalpite > numeroDaSorte){
        console.log('Chute um numero mais baixo!');
    } else {
        console.log('O jogo acabou!');
    }
}



const acoesBotao = document.getElementById('chutar-btn');

acoesBotao.addEventListener('click', () => {
        
        if(tentativas < limite){

            tentativas++;

            console.log(`tente novamente você tentou ${tentativas} vezes de ${limite} tentativas.`);
            

            if(tentativas === limite){
                console.log('suas jogadas acabaram.');

                document.getElementById('chutar-btn').disabled = true;
            }
        }
    });  


acoesBotao.addEventListener('click', executaPrograma);


function executaPrograma(){

    //gera numero da sorte
    
    console.log(numeroDaSorte);

    //captura palpite
    const obterValorDoPalpite = parseFloat(document.getElementById('palpite').value);
    console.log(obterValorDoPalpite);
    

    validaPalpite(obterValorDoPalpite, numeroDaSorte);
    dicaPalpites(obterValorDoPalpite, numeroDaSorte);

    
}


    




