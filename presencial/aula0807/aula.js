let nome = "asd"//prompt("Digite seu nome");
let idade = 123//parseInt(prompt("Digite sua idade"));

let alunos = [
    'Paula',
    'Maria',
    'Júlia',
];

let notas = [
    2,
    8,
    3,
];

let alunos2 = new Array("Junior", "André", 'Pedro', 'Luis');


document.write("<h1> nome " + nome + "</h1>" );
console.log("Valor de idade " + idade);
document.write("<p class='idade'> idade " + idade + " Anos </p>" );

document.write("<table>");
document.write("<tr>");
document.write("<th>Nomes</th>");
document.write("<th>Notas</th>");
document.write("</tr>");

for (let i = 0; i<alunos.length; i++){
    color = notas[i] < 7 ? "vermelho" : "verde";
    
    if (notas[i] < 7){
        document.write("<tr class=vermelho>")
    } else {
        document.write("<tr class=verde>")
    }

    document.write(`<td>${alunos[i]}</td>`)
    document.write(`<td>${notas[i]}</td>`)
    document.write("</tr>")
}

document.write("</table>");


