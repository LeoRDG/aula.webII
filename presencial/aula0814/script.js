document.write("<p> Absoluto -10 = " + Math.abs(-10) + "</p>");
document.write("<p> Ceil de 5.001 = " + Math.ceil(5.001) + "</p>");
document.write("<p> Floor de 4.999 = " + Math.floor(4.999) + "</p>");
document.write("<p> Round de 4.999 = " + Math.round(4.999) + "</p>");

document.write("<p> Random = " + Math.ceil(Math.random() * 60) + "</p>");


let s = "     IFRS ERECHIM     ";
document.write("<pre><h1>String =" + s + "</h1></pre>");
document.write("<h2> Primeria letra = " + s.charAt(0) + "</h2>");
document.write("<h2> Localizar último E = " + s.lastIndexOf("E") + "</h2>");

document.write("<h2> Parte da string = " + s.substring(5,7) + "</h2>");
document.write("<h2> Minúsculas = " + s.toLowerCase() + "</h2>");

document.write("<h2> Número de caracteres = " + s.length + "</h2>");
document.write("<h2> Número de caracteres depois do trim = " + s.trim().length + "</h2>");

document.write("<p> Data internamente = " + Date.now()/1000/60/60/24/365 + "</p>");

let nascimento = new Date("1999-02-17 00:00:00");
let hoje = new Date();
hoje.setDate(hoje.getDate() + 28);

let idade = hoje - nascimento;
document.write("<p> Idade = " + Math.floor(idade/1000/60/60/24) + "</p>");

document.write("<p> Hora = " + hoje.getHours() + "</p>");
document.write("<p> Dia do mês = " + hoje.getDate() + "</p>");
document.write("<p> Dia da semana = " + hoje.getDay() + "</p>");
document.write("<p> Mês do ano = " + (hoje.getMonth()+1) + "</p>");
document.write("<p> Ano 4 digitos = " + hoje.getFullYear() + "</p>");
document.write("<p> Ano 2 digitos = " + hoje.getYear() + "</p>");
document.write("<p> Ano 2 digitos = " + hoje.toLocaleString() + "</p>");
