// 1 ================================================================
let textDOM = document.getElementById("text");
let imgDOM = document.getElementById("img");
let hora = new Date().getHours();
if (hora >= 6 && hora < 12) {
    textDOM.innerText = "Bom Dia";
    imgDOM.src = "https://www.momentodivino.com.br/img/webp/imagens8/que-deus-abencoe-nosso-dia-5054q8LHJXqfDO.webp";
} else if (hora >= 12 && hora < 18) {
    textDOM.innerText = "Boa Tarde";
    imgDOM.src = "https://www.momentodivino.com.br/img/webp/imagens10/linda-e-abencoada-tarde-6425HacKZRcxWu.webp";
} else {
    textDOM.innerText = "Boa Noite";
    imgDOM.src = "https://i.pinimg.com/236x/83/10/a0/8310a0268d0fe89ffed24b316d3e3fb0.jpg"
}



// 2 ================================================================
let lista = document.getElementById("lista");
let item = document.createElement("li")
item.innerText = "Banco de dados";
lista.appendChild(item)



// 3 ================================================================
let inputsDOM = document.getElementsByTagName('input');
inputsDOM[0].value = lista.children[0].innerText;
inputsDOM[1].value = lista.lastChild.innerText;



// 4 ================================================================
item = document.createElement("li");
item.innerText = prompt("Nome da disciplina: ");
lista.appendChild(item);
