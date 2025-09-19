
$(document).ready(() => {
    // $("p").toggle();
    // $("p, h1").attr('class', 'dif')
    $("#botao").click(clickjQuery);
    // [...document.getElementsByTagName("p")].forEach(i => i.classList.add("dif"))
    [...document.querySelectorAll("p, h1")].forEach(i => i.classList.add("dif"))
});

function clickjQuery(e) {
    console.log(e.target.innerText);
    alert("click jquery")
}



