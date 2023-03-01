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
    for (let index = 0; index < imagemDosCarros.length; index++) {
        xCarros[index] -= velocidadeCarros[index];
    }
}

function loopCarro(){
    for (let index = 0; index < imagemDosCarros.length; index++) {

        if(xCarros[index] < -50){
            xCarros[index] = 600;
        }
    }
}
  