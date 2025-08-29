function clean(node) {
    for (var n = 0; n < node.childNodes.length; n++) {
        var child = node.childNodes[n];
        //types 1: element, 8:comentário, 3:texto
        if (
            child.nodeType === 8 ||
            (child.nodeType === 3 && !/\S/.test(child.nodeValue))
        ) {
            node.removeChild(child);
            n--;
        } else if (child.nodeType === 1) {
            clean(child);
        }
    }
}

function addCarne(){
    let carne = document.getElementById("carne")
    let qtd = document.getElementById("qtd")
    
    let lista3 = document.getElementById("lista3");
    let li = document.createElement("li");

    let totalDOM = document.getElementById("total")
    let tot = totalDOM.innerText;
    let toval = parseFloat(tot) + parseFloat(qtd.value.trim());
    totalDOM.innerText = toval;

    string = carne.value + " - " + qtd.value;
    li.innerText = string;

    lista3.appendChild(li)

}


let lista1 = document.getElementById('lista1');

console.log(lista1);

let lista2 = document.getElementById("lista2");
let newitem = document.createElement('li');
let newtext = document.createTextNode('Água - 2');

newitem.appendChild(newtext);
lista2.appendChild(newitem);
clean(lista2);

for (let i = 0; i < lista2.childElementCount; i++) {
    console.log(lista2.childNodes[i].innerText)
}

let newp = document.createElement('p');
newp.innerText = "Novo parágrafo";
let l1 = document.getElementById('l1')

l1.before(newp)

let botao = document.getElementById("btn");
botao.onclick = addCarne; 










let itens = document.getElementsByTagName("li");
let totalDOM = document.getElementById("total")

let total = 0
for (let i = itens.length - 1; i >= 0; i--) {
    //itens[i].remove()//setAttribute("class", 'comprado')
    itens[i].style.color = 'red';

    string = itens[i].innerText;
    let n = string.match("[\\d]+")[0];
    total += parseFloat(n);
}



totalDOM.innerText = "Total da compra = " + total;