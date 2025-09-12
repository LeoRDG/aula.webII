let imgs = [
    "https://pt.quizur.com/_image?href=https://img.quizur.com/f/img60b299675ec6e9.67762000.png?lastEdited=1622317420&w=600&h=600&f=webp",
    "https://www.ahnegao.com.br/wp-content/uploads/2025/02/imgaleat-6jx-3.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGrP3ccU-fj1xHGiAzbXXu3utOHjBOJ049fQ&s",
    "https://www.ahnegao.com.br/wp-content/uploads/2021/11/aleat-pic-1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbORlryxeO3H6_RqGXx2rjt_wBjA2TRe0tUw&s"
];
let atual = 0;

window.addEventListener("load", () => {
    let next = document.getElementById("proximo");
    let prev = document.getElementById("anterior");
    let add = document.getElementById("add");

    next.addEventListener("click", () => mudarImg(1));
    prev.addEventListener("click", () => mudarImg(-1));
    add.addEventListener("click", addDisciplina);
})

function mudarImg(step) {
    atual = (atual + step) % imgs.length;
    if (atual < 0) atual = imgs.length + atual;
    document.getElementById("img").src = imgs[atual];

    let cont = document.getElementById("contagem");
    cont.innerText = atual + 1 + "/" + imgs.length;
}

function addDisciplina() {
    let disc = document.getElementById("disc").value;
    let lista = document.getElementById("lista");
    let erro = document.getElementById("erro");

    if (disc.length > 0) {
        erro.style.display = "none";
        let li = document.createElement('li');
        li.innerText = disc;
        lista.appendChild(li);
    } else {
        erro.style.display = "block";
    }
}