function analisisCadena(cadena){
    if(cadena===cadena.toUpperCase()){
        return "La palabra ingresada esta escrita toda en mayusculas";
    }else if(cadena===cadena.toLowerCase()){
        return "La palabra ingresada esta escrita toda en minusculas";
    }else{
        return "La palabra ingresasa esta escrita con mayusculas y minusculas";
    }
}


let texto=prompt("Ingrese el texto a analizar");

document.write(analisisCadena(texto));
