//Variável de Preload
let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro1;
let imagemDoCarro2;
let imagemDoCarro3;
let imagemDosCarros;

function preload(){
    imagemDaEstrada = loadImage('assets/imagens/estrada.png');
    imagemDoAtor = loadImage('assets/imagens/ator-1.png');
    imagemDoCarro1 = loadImage('assets/imagens/carro-1.png');
    imagemDoCarro2 = loadImage('assets/imagens/carro-2.png');
    imagemDoCarro3 = loadImage('assets/imagens/carro-3.png');
    imagemDosCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3];
  }