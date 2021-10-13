let ciudades=[];
let ingreso;

    do{
        ingreso=prompt("Ingrese una ciudad o 0 para salir")
        if(ingreso!=="0"){
            ciudades.push(ingreso);
        }
        
    }while(confirm("Desea Ingresar una nueva ciudad?")&&ingreso!=="0")


document.write("<br>El array generado es: ")
document.write("<br>["+ciudades.toString()+"]");
document.write("<hr>");
document.write("<br>La longitud del arreglo es: "+ciudades.length);
document.write("<hr>");
if(ciudades.length>0){
    document.write("<br>La primera posicion es: "+ciudades[0]);
}

if(ciudades.length>=3){
    document.write("<br>La tercera posicion es: "+ciudades[2]);
    
}

if(ciudades.length>0){
    document.write("<br>La ultima posicion es: "+ciudades[ciudades.length-1]);
}

document.write("<hr>");

ciudades.push("Paris");
document.write(ciudades.toString());

document.write("<hr>");

if(ciudades.length>=2){
    document.write("<br>La segunda posicion es: "+ciudades[1]);
    
}

document.write("<hr>");

ciudades.splice(1, 1, "Barcelona");
document.write(ciudades.toString());



