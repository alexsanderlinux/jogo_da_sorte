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
    Decrementar o contador de tentativas. ok
    Exibir o número de tentativas restantes. ok
    Se o jogador atingir o número máximo de tentativas, o jogo termina com a mensagem "Você perdeu! O número secreto era X".


*/


document.addEventListener('DOMContentLoaded', function() {
    
    // Variaveis gerais do jogo

    let numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativasRestantes = 10;

    const palpiteInput = document.getElementById("palpite");
    const chutarBtn = document.getElementById("chutar-btn");
    const reiniciarBtn = document.getElementById("reiniciar-btn");
    const mensagem = document.getElementById("mensagem");
    const tentativasTexto = document.getElementById("tentativas");
    
    // Função para finalizar o jogo
    
    function finalizarJogo() {

        chutarBtn.disabled = true;
        palpiteInput.disabled = true;

        reiniciarBtn.disabled = false;
        reiniciarBtn.style.opacity = "1";
        reiniciarBtn.style.cursor = "pointer";
    }
    
    // Evento botão para chutar
    
    chutarBtn.addEventListener("click", () => {

        const palpite = Number(palpiteInput.value);

        if (!palpite || palpite < 1 || palpite > 100) {
            mensagem.textContent = "Digite um número válido entre 1 e 100!";
            return;
        }

        tentativasRestantes--;
        tentativasTexto.textContent = `Tentativas restantes: ${tentativasRestantes}`;

        if (palpite === numeroSecreto) {
            mensagem.textContent = "🎉 Você acertou!";
            finalizarJogo();
            return;
        }

        if (palpite > numeroSecreto) {
            mensagem.textContent = "🔽 Muito alto!";
        } else {
            mensagem.textContent = "🔼 Muito baixo!";
        }

        if (tentativasRestantes <= 0) {
            mensagem.textContent = `😢 Fim de jogo! O número era ${numeroSecreto}.`;
            finalizarJogo();
        }

        palpiteInput.value = "";

    });
    
    // Usar o enter para chutar
    
    palpiteInput.addEventListener("keydown", (e) => {

        if (e.key === "Enter") {
            e.preventDefault();
            chutarBtn.click();
        }
    });
    
    // Botão reiniciar
    
    reiniciarBtn.addEventListener("click", () => {
        location.reload();
    });

});
