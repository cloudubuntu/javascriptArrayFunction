function esPar(numero){
    if(numero%2===0){
        return "El numero es Par";
    }else{
        return "El numero no es par";
    }
}

let num=parseInt(prompt("Ingrese un numero"));

document.write("<br>"+esPar(num));