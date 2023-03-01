//Variáveis do Ator
let xAtor = 100;
let yAtor = 366;
let comprimentoAtor = 30;
let alturaAtor = 30;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, comprimentoAtor, alturaAtor);
}

function movimentoAtor(){
    if(keyIsDown(UP_ARROW)){
      yAtor -= 4;
    }
    if(keyIsDown(DOWN_ARROW)){
      yAtor += 4;
    }
}