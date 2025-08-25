function e1 () {
    let tempF = prompt("Informe a temperatura em Fº");

    if (tempF && !isNaN(tempF)) {
        tempC = (tempF - 32) * (5 / 9);
        document.write(`<h4> ${tempF}º Fahrenheit = ${tempC}º Celsius </h4>`);
    } else {
        document.write("<h4>" + tempF + " não é uma temperature válida</h212>");
    }

    document.write("<table class='temp'>")
    
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
    for (let i = 0; i < 4; i++){
        arrayNotas[i] = prompt(`Informe a ${1+i}ª nota.`);
    }

    return arrayNotas;
}

let e3 = () => {
    let notas = e2();
    let somaNotas = 0;    

    document.write("<table class='notas'>");
    document.write("<tr>");
    document.write("<th>Nota1</th>");
    document.write("<th>Nota2</th>");
    document.write("<th>Nota3</th>");
    document.write("<th>Nota4</th>");
    document.write("<th>Média</th>");
    document.write("<th>Resultado</th>");
    document.write("<th>Imagem</th>");
    document.write("</tr>");
    
    document.write("<tr>");
    notas.forEach (i => {
        somaNotas += parseFloat(i);
        document.write(`<td>${i}</td>`);
    })
    let media = somaNotas / notas.length;
    document.write(`<td>${media}</td>`);
    
    if (media >= 7) {
        res = "Aprovado";
        img = "https://cdn-icons-png.flaticon.com/512/4157/4157080.png";
    } else if (media >= 1.8 ) {
        res = "Em Exame";
        img = "https://cdn-icons-png.flaticon.com/512/2299/2299283.png";
    } else {
        res = "Reprovado";
        img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFcgQrsfeYiodqNrrLGtTpaVEkNnfswjh1oQ&s";
    }
    
    document.write(`<td>${res}</td>`);
    document.write(`<td><img src="${img}"></img></td>`);
    
    document.write("</tr>");
    document.write("</table>");
}


e1();
e3();