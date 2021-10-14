const perimetroRectangulo=(lado1, lado2)=>{
    return 2*(lado1+lado2);
}

let lado1=parseFloat(prompt("Ingrese el lado menor del rectangulo en centimetros"));
let lado2=parseFloat(prompt("Ingrese el lado mayor del rectangulo en centimetros"));

document.write("El perimetro del rectangulo es: "+perimetroRectangulo(lado1, lado2)+" centimetros.");
