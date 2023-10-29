let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;
 
// contador de jogadas
 
let player1 = 0;
let player2 = 0;
 
//adicionando o envento de click aos boxes
for(let i = 0; i < boxes.length; i++) {
 
    //quando agluem clicar na caixa 
    boxes[i].addEventListener("click", function() {
 
        let el = checkEl(player1, player2);
 
        // verifica se já tem x ou 0
        if(this.childNodes.length == 0) {
 
            let cloneEL = el.cloneNode(true);
 
            this.appendChild(cloneEL);
 
            //computa jogada
            if(player1 == player2) {
                player1++;
 
                if(secondPlayer == 'ai-player') {
 
                    //funcao executar a joga
                    console.log('executar a jogada ai');
                    computerPlay();
                    player2++;
                }
 
            } else {
                player2++;
            }
 
            //checa quem venceu
            checkWinCondition();
            
        }
    });
}
 
//envento para saber se e 2 jagores ou contra a maquina
for(let i = 0; i < buttons.length; i++){
 
    buttons[i].addEventListener("click", function(){
 
        secondPlayer = this.getAttribute("id");
 
        for(let j = 0; j <buttons.length; j++){
            buttons[j].style.display = 'none';
        }
 
        setTimeout(function(){
 
            let container = document.querySelector("#container");
            container.classList.remove("hide");
 
        }, 500);
    })
}
 
// ve quem vai jogar 
 
function checkEl(player1,player2) {
    console.log('verifica quem vai jogar');
    if(player1 == player2){
        //x
        el = x;
    }else {
        //o
        el = o;
    }
    return el;
 
}
 
// checa quem vai ganhar
 
function checkWinCondition(){
console.log('verifica qual posição ganha');
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");
    
    // checar quem ganha na horizontal 
    
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){
        
        let b1child = b1.childNodes[0].className;
        let b2child = b2.childNodes[0].className;
        let b3child = b3.childNodes[0].className;
 
        if(b1child == 'x' && b2child == 'x' && b3child == 'x') {
            //x
            declareWinnner('x');
        } else if(b1child == 'o' && b2child == 'o' && b3child == 'o'){
            //o
            declareWinnner('o');
        }
    }
 
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){
        
        let b4child = b4.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b6child = b6.childNodes[0].className;
 
        if(b4child == 'x' && b5child == 'x' && b6child == 'x') {
            //x
            declareWinnner('x');
        } else if(b4child == 'o' && b5child == 'o' && b6child == 'o'){
            //o
            declareWinnner('o');
        }
    }
 
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){
        
        let b7child = b7.childNodes[0].className;
        let b8child = b8.childNodes[0].className;
        let b9child = b9.childNodes[0].className;
 
        if(b7child == 'x' && b8child == 'x' && b9child == 'x') {
            //x
            declareWinnner('x');
        } else if(b7child == 'o' && b8child == 'o' && b9child == 'o'){
            //o
            declareWinnner('o');
        }
    }
 
    //vertical
 
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){
        
        let b1child = b1.childNodes[0].className;
        let b4child = b4.childNodes[0].className;
        let b7child = b7.childNodes[0].className;
 
        if(b1child == 'x' && b4child == 'x' && b7child == 'x') {
            //x
            declareWinnner('x');
        } else if(b1child == 'o' && b4child == 'o' && b7child == 'o'){
            //o
            declareWinnner('o');
        }
    }
 
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){
        
        let b2child = b2.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b8child = b8.childNodes[0].className;
 
        if(b2child == 'x' && b5child == 'x' && b8child == 'x') {
            //x
            declareWinnner('x');
        } else if(b2child == 'o' && b5child == 'o' && b8child == 'o'){
            //o
            declareWinnner('o');
        }
 
        
    }
 
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){
        
        let b3child = b3.childNodes[0].className;
        let b6child = b6.childNodes[0].className;
        let b9child = b9.childNodes[0].className;
 
        if(b3child == 'x' && b6child == 'x' && b9child == 'x') {
            //x
            declareWinnner('x');
        } else if(b3child == 'o' && b6child == 'o' && b9child == 'o'){
            //o
            declareWinnner('o');
        }
 
        
    }
 
    // diagonal 
 
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){
        
        let b1child = b1.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b9child = b9.childNodes[0].className;
 
        if(b1child == 'x' && b5child == 'x' && b9child == 'x') {
            //x
            declareWinnner('x');
        } else if(b1child == 'o' && b5child == 'o' && b9child == 'o'){
            //o
            declareWinnner('o');
        }
 
        
    }
 
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){
        
        let b3child = b3.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b7child = b7.childNodes[0].className;
 
        if(b3child == 'x' && b5child == 'x' && b7child == 'x') {
            //x
            declareWinnner('x');
        } else if(b3child == 'o' && b5child == 'o' && b7child == 'o'){
            //o
            declareWinnner('o');
        }
 
        
    }
 
    // deu velha
    let counter = 0;
 
    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined) {
            counter++;
        }
    }
    
    if (counter == 9 ){
        declareWinnner('Deu velha');
    }
    
    
    // limpa o jogo, declara o vencedor atualiza o placar
    function declareWinnner(winner){
        console.log('limpa o jogo e decla o vencedor');
 
        let scoreboardX = document.querySelector("#scoreboard-1");
        let scoreboardO = document.querySelector("#scoreboard-2");
        let msg = '';
 
        if(winner == 'x') {
            scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
            msg = " O JOGADOR 1 VENCEU!";
        } else if (winner == 'o') {
            msg = " O JOGADOR 2 VENCEU!";
            scoreboardO.textContent = parseInt(scoreboardX.textContent) + 1;
        } else {
            msg = "DEU VELHA"
        }
 
        // exibe msg
 
        messageText.innerHTML = msg;
        messageContainer.classList.remove("hide");
 
        // esconde mgs
 
        setTimeout(function() {
            messageContainer.classList.add("hide");
        }, 3000);
 
        //zera as jogadas
        console.log('zera todas as jogadas');
        player1 = 0;
        player2 = 0;
 
        // remove x e 0
        console.log('limpa tudo');
        let boxesToRemove = document.querySelectorAll(".box div");
 
        for(let i = 0; i < boxesToRemove.length; i++) {
            boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
        }
 
    }   
 
}
 
 
 
function computerPlay() {
 
    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;
            
    for(let i = 0; i < boxes.length; i++) {
   
      let randomNumber = Math.floor(Math.random() * 5);
   
      // só se não tiver marcado anteriormente
      if(boxes[i].childNodes[0] == undefined) {  
        if(randomNumber <= 1) {
          boxes[i].appendChild(cloneO);
          counter++;
          break;
        }
      // checar quantas estão preenchidas        
      } else {
        filled++;
      }
   
    }
   
    if(counter == 0 && filled < 9) {
      computerPlay();
    }
 
}