//Variáveis do Ator
let xAtor = 100;
let yAtor = 366;
let comprimentoAtor = 30;
let alturaAtor = 30;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, comprimentoAtor, alturaAtor);
}

function movimentoAtor(){
    if(keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
    if(keyIsDown(DOWN_ARROW)){
      if(podeSeMover()){
        yAtor += 3;
      }
    }
}

function verificaColisao(){
  for (let index = 0; index < imagemDosCarros.length; index++) {
    colisao = collideRectCircle(xCarros[index], yCarros[index], comprimentoCarro, alturaCarro, xAtor, yAtor, 20); 

    if (colisao){
      voltaAtorPosicaoInicial();
      somDaColisao.play();
      if (meusPontos > 0){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorPosicaoInicial(){
  yAtor = 366;
}

function incluirPontos(){
  text(meusPontos, 150, 25);
  fill(color(255, 240 , 60));
  textSize(20);
  textAlign(CENTER);
}

function marcaPontos(){
  if (yAtor < 15) {
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorPosicaoInicial();
  }
}

function podeSeMover(){
  return yAtor < 366;
}