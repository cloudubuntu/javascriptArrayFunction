const calcularTabla=(numero)=>{
    document.write("<table border>");
    document.write("<tr>");
    document.write("<td>");
    document.write("Tabla de multiplicar");
    for(let i=1; i<=10; i++){
        document.write("<tr>");
        document.write("<td>"+numBase+"</td>");
        document.write("<td>*</td>");
        document.write("<td>"+i+"</td>");
        document.write("<td>=</td>");
        document.write("<td>"+(i*numero)+"</td>");
        document.write("</tr>");
    }
    document.write("</td>");
    document.write("</tr>");
    document.write("</table>");
}

let numBase=parseInt(prompt("Ingrese el numero del cual desea conocer la tabla de multiplicar"));

calcularTabla(numBase);
