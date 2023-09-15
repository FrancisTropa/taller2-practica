//creo la constante de teclado para poder usar question para recibir el nombre por teclado
const teclado = require('readline-sync');

class character{
    constructor(clase, ataque1, ataque2){
        this.nombre = teclado.question("¿nombre de personaje?");
        this.clase = clase;
        this.ataque1 = ataque1;
        this.ataque2 = ataque2;
        this.vida = generarVida();
        this.velocidad = generarVelocidad();
    }
}

function generarVelocidad() {
    return generarAleatorio(10)+1;
}

function generarVida() {
    return generarAleatorio(100)+100;
}

function generarAleatorio(numero) {
    return Math.floor(Math.random()*numero);
}