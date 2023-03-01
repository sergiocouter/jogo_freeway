//Variáveis dos carros
let xCarros = [600, 600, 600];
let yCarros = [40, 95, 150];
let velocidadeCarros = [2, 2.5, 3.2];

//Variáveis das dimensões dos carros
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
    for (let index = 0; index < imagemDosCarros.length; index++) {
        image(imagemDosCarros[index], xCarros[index], yCarros[index], comprimentoCarro, alturaCarro);
    }
}
  
function movimentoCarro(){
    xCarros[0] -= velocidadeCarros[0];
    xCarros[1] -= velocidadeCarros[1];
    xCarros[2] -= velocidadeCarros[2];
}

function loopCarro(){
    if(xCarros[0] < -50){
        xCarros[0] = 600;
    }
    if(xCarros[1] < -50){
        xCarros[1] = 600;
    }
    if(xCarros[2] < -50){
        xCarros[2] = 600;
    }
}
  