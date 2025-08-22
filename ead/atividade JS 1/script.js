function e1 () {
    let tempF = prompt("Informe a temperatura em Fº");

    if (tempF && !isNaN(tempF)) {
        tempC = (tempF - 32) * (5 / 9);
        document.write(`<h4> ${tempF}º Fahrenheit = ${tempC}º Celsius </h4>`);
    } else {
        document.write("<h4>" + tempF + " não é uma temperature válida</h212>");
    }

    document.write("<table>")
    
    document.write("<tr>")
    document.write("<td>Temperatura em Celsius</td>")
    document.write("<td>Mensagem</td>")
    document.write("</tr>")

    document.write("<tr>")
    document.write("<td>Até 12</td>")
    document.write("<td class='frio'>Frio</td>")
    document.write("</tr>")

    document.write("<tr>")
    document.write("<td>De 13 até 24</td>")
    document.write("<td class='agra'>Agradável</td>")
    document.write("</tr>")

    document.write("<tr>")
    document.write("<td>Acimda de 25</td>")
    document.write("<td class='quente'>Quente</td>")
    document.write("</tr>")


    document.write("</table>")



}

let e2 = function () {
    let arrayNotas = [];
    for (let i = 0; i <= 4; i++){
        arrayNotas[i] = prompt(`Informe a ${i}ª nota`);
    }

    return arrayNotas;
}

let e3 = () => {
    notas = e3();
}


e1();