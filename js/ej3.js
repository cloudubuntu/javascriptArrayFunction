
let dado1;
let dado2;
let contador=1;
let suma;
let arraySuma=[];
let sumaGral=0;

for(let i=0; i<50; i++){

    dado1=parseInt((Math.random()*6)+1);
    console.log("dado 1: "+dado1);
    dado2=parseInt((Math.random()*6)+1);
    console.log("dado 2: "+dado2);
    suma=dado1+dado2;
    arraySuma.push(suma);   
    document.write("<br>La posicion "+contador+" del arreglo de sumas de los dados es: "+arraySuma[i]);
    contador++;
    sumaGral+=arraySuma[i];
}

document.write("<br>"+arraySuma.length);

document.write("<br> la suma gral de todo el array es: "+sumaGral);

