window.addEventListener('load', () => {
    let concordo = document.getElementById("concordo");
    let btn = document.getElementById("calcular");

    let els = document.getElementsByClassName('inp');

    [...els].forEach( (e) => {
        e.addEventListener("keyup", () => {document.getElementById("resultado").hidden = true});    
});
    concordo.addEventListener("click", () => btn.disabled = !btn.disabled);
    btn.addEventListener("click", calcular_imc);
});


function validaNumero(elemento){
    return elemento.value.match(/^[\d.]+$/) ? true : false;
}

function validaRadio(elemento){
    return elemento.checked;
}

function validaCampos(){
    let res = true;
    let altura = document.getElementById('altura');
    let peso = document.getElementById('peso');
    let generoF = document.getElementById("f");
    let generoM = document.getElementById("m");
    
    if (validaRadio(generoF) || validaRadio(generoM)) {
        generoF.classList.remove("is-invalid");
        generoM.classList.remove("is-invalid");
    } else {
        generoF.classList.add("is-invalid");
        generoM.classList.add("is-invalid");
        res = false;
    }

    if (validaNumero(altura)) {
        altura.classList.remove("is-invalid");
    } else {
        altura.classList.add("is-invalid"); 
        res = false; 
    }

    if (validaNumero(peso)) {
        peso.classList.remove("is-invalid");
    } else {
        peso.classList.add("is-invalid");
        res = false;
    }
    
    return res;
}

function calcular_imc(){
    if (validaCampos()) {
        let altura = document.getElementById('altura').value;
        let peso = document.getElementById('peso').value;

        let imc = peso / (altura * altura);
        
        mostrar_resultado(imc);
    }    
}

function mostrar_resultado(valor){
    let masc = validaRadio(document.getElementById('m'));
    let resultado = document.getElementById("resultado");
    let img = document.getElementById("img");
    let imc_desc = document.getElementById("imc_desc");

    
    if (valor > 28) {
        img.src = masc ? "imgs/m3.png" : "imgs/f3.png";
        imc_desc.innerText = "IMC = " + valor + " - Obesidade";
    } else if (valor >= 18) {
        img.src = masc ? "imgs/m2.png" : "imgs/f2.png";
        imc_desc.innerText = "IMC = " + valor + " - Sobrepeso";
    } else {
        img.src = masc ? "imgs/m1.png" : "imgs/f1.png";
        imc_desc.innerText = "IMC = " + valor + " - Normal";
    }

    resultado.hidden = false;


}