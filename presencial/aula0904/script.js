let count = 0;

window.addEventListener('load', ()=>{
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let nome = document.getElementById("nome");
    
    btn2.addEventListener("click", bgChange);
    btn1.addEventListener("mouseenter", vermouse);

    nome.addEventListener('focus', () => { console.log("Executou focus") })
    nome.addEventListener('blur', () => { console.log("Executou blur") })
    nome.addEventListener('change', () => { console.log("Executou change") })
    nome.addEventListener('keyup', () => {
        console.log("Executou keyup") 
        let p = document.getElementById("char");
        nome.value = nome.value.toUpperCase().trim();
        let i = (nome.value.length<10) ? nome.setAttribute("class", "erro") : nome.setAttribute("class", "correto")
        p.innerText = "Caracteres digitados = " + nome.value.length
    })
});

function verclick() { alert("clicou");}
function vermouse() {console.log('mouse enter ' + count)}

function bgChange() {
    let p = document.getElementById("cont");
    p.innerText = "clicks restantes = " + (9 - count);
    if (count++ >= 9) btn2.removeEventListener('click', bgChange);
    var rndCol = `rgb(${Math.random() * 250},${Math.random() *250},${Math.random() * 255})`
    document.body.style.backgroundColor = rndCol;
}