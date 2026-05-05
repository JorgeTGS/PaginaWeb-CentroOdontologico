/* =========================================================
   FUNÇÃO: Trocar conteúdo da tela (imagem, título e descrição)
   ========================================================= */

function TrocaDeConteudo(botao) {

    // Seleciona os elementos do HTML que serão alterados
    var imgDragao = document.getElementById("ImgDragao");
    var titulo = document.getElementById("Titulo");
    var descricao = document.getElementById("Descricao");
    var margem = document.getElementById("AlterarMargem");

    // Estrutura que verifica qual botão foi clicado
    switch (botao) {

        case "B1":
            imgDragao.src = "Imagens/Balerion.png";

            // Define o posicionamento da imagem dentro do container
            imgDragao.style.objectPosition = "75%";

            // Altera a margem superior dinamicamente
            margem.style.marginTop = "340px";

            // Altera o título
            titulo.innerHTML = "Balerion the Black Dread";

            // Altera a descrição
            descricao.innerHTML = "O maior e mais veterano dos dragões Targaryen, Balerion, foi montado por Aegon the Conqueror e mais tarde, ainda que durante um espaço de tempo muito curto, pelo Rei Viserys I. O dragão negro e vermelho morreu antes do início de House of the Dragon, mas a sua gigantesca caveira pode ser apreciada em exposição no Red Keep.";
            break;


        case "B2":
            imgDragao.src = "Imagens/Vhagar.png";

            // Ajusta o enquadramento da imagem
            imgDragao.style.objectPosition = "35%";

            margem.style.marginTop = "90px";

            titulo.innerHTML = "Vhagar";

            descricao.innerHTML = "O segundo maior dragão dos Targaryens é Vhagar, uma fêmea ancestral e a última que voou durante a conquista de Aegon, quando serviu a Rainha Visenya Targaryen. Juntos, destruíram toda a armada Arryn nas águas de Gulltown. Vhagar foi batizada em homenagem a um Deus de Old Valyria, e será protagonista de um capítulo posterior de House of the Dragon.";
            break;


        case "B3":
            imgDragao.src = "Imagens/Syrax.png";

            imgDragao.style.objectPosition = "70%";

            margem.style.marginTop = "90px";

            titulo.innerHTML = "Syrax";

            descricao.innerHTML = "Syrax é a enorme e formidável fêmea da Princesa Rhaenyra (interpretada por Milly Alcock como jovem e Emma D’Arcy como adulta em House of the Dragon).";
            break;


        case "B4":
            imgDragao.src = "Imagens/Caraxes.jpg";

            imgDragao.style.objectPosition = "55%";

            margem.style.marginTop = "90px";

            titulo.innerHTML = "Caraxes";

            descricao.innerHTML = "Conhecido como Blood Wyrm, este enorme dragão vermelho é o companheiro do Príncipe Daemon Targaryen (interpretado por Matt Smith) e, tal como ele, é poderoso e admiravelmente feroz.";
            break;


        case "B5":
            imgDragao.src = "Imagens/Sunfyre.jpg";

            imgDragao.style.objectPosition = "60%";

            margem.style.marginTop = "400px";

            titulo.innerHTML = "Sunfyre";

            descricao.innerHTML = "Com as suas chamas e escamas douradas, não é de admirar que este enorme e formidável dragão seja conhecido como 'Sunfyre the Golden'. É ele quem acompanha Aegon II Targaryen (interpretado por Tom Glynn-Carney como adulto e Ty Tennant enquanto jovem em House of the Dragon).";
            break;


        case "B6":
            imgDragao.src = "Imagens/Vermithor.jpg";

            imgDragao.style.objectPosition = "65%";

            margem.style.marginTop = "90px";

            titulo.innerHTML = "Vermithor";

            descricao.innerHTML = "O terceiro maior dragão é descrito como 'velho e grisalho' em 'The World of Ice & Fire'. Em tempos, foi o dragão de Jaehaerys I Targaryen, também conhecido como Old King.";
            break;


        // Caso nenhum botão seja reconhecido
        default:
            imgDragao.src = "Imagens/Balerion.png";

            imgDragao.style.objectPosition = "75%";

            margem.style.marginTop = "340px";

            titulo.innerHTML = "Balerion the Black Dread";

            descricao.innerHTML = "O maior e mais veterano dos dragões Targaryen, Balerion, foi montado por Aegon the Conqueror e mais tarde, ainda que durante um espaço de tempo muito curto, pelo Rei Viserys I. O dragão negro e vermelho morreu antes do início de House of the Dragon, mas a sua gigantesca caveira pode ser apreciada em exposição no Red Keep.";
            break;
    }
}


/* =========================================================
   FUNÇÃO: Manter apenas um botão como ativo
   ========================================================= */

function ModoAtivo(button) {

    // Seleciona TODOS os botões com a classe "Botao"
    const buttons = document.querySelectorAll('.Botao');

    /* 
       Percorre todos os botões encontrados e remove a classe "Ativado"
       Isso garante que apenas um botão fique ativo por vez
    */
    buttons.forEach(btn => btn.classList.remove('Ativado'));

    // Adiciona a classe "Ativado" somente no botão clicado
    button.classList.add('Ativado');
}