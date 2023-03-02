//Variável de Preload Sons e imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro1;
let imagemDoCarro2;
let imagemDoCarro3;
let imagemDosCarros;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
    imagemDaEstrada = loadImage('assets/imagens/estrada.png');
    imagemDoAtor = loadImage('assets/imagens/ator-1.png');
    imagemDoCarro1 = loadImage('assets/imagens/carro-1.png');
    imagemDoCarro2 = loadImage('assets/imagens/carro-2.png');
    imagemDoCarro3 = loadImage('assets/imagens/carro-3.png');
    imagemDosCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3, imagemDoCarro1, imagemDoCarro2, imagemDoCarro3];

    somDaTrilha = loadSound('assets/sons/trilha.mp3');
    somDaColisao = loadSound('assets/sons/colidiu.mp3');
    somDoPonto = loadSound('assets/sons/pontos.wav');
  }