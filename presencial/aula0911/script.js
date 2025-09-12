window.addEventListener("load", () => {
    document.getElementById("cadcli").addEventListener("submit", validaform)
    document.getElementById("nome").addEventListener("input", validanome)
    document.getElementById("end").addEventListener("input", validaend)
    document.getElementById("email").addEventListener("input", validaemail)
    document.getElementById("data").addEventListener("input", validadata)

});

function validaform(e){
    let nome = validanome();
    let end = validaend();
    let email = validaemail();
    if (!nome || !end || !email) e.preventDefault();
}

function validanome(){
    let nome=document.getElementById('nome');
    let helpnome=document.getElementById('helpnome');

    if (nome.value.length <= 5) {
        helpnome.setAttribute("class", "form-text text-muted ");
        nome.classList.add("is-invalid");
        nome.classList.remove("is-valid");
        return false;
    } else {
        helpnome.setAttribute("class", "form-text text-muted visually-hidden");
        nome.classList.remove("is-invalid");
        nome.classList.add("is-valid");
        return true;

    }
}

function validaend() {
    let end = document.getElementById('end');
    let helpend = document.getElementById('helpend');
    if (end.value.length <= 5) {
        helpend.setAttribute("class", "form-text text-muted ");
        end.classList.add("is-invalid");
        end.classList.remove("is-valid");
        return false;
    } else {
        helpend.setAttribute("class", "form-text text-muted visually-hidden");
        end.classList.remove("is-invalid");
        end.classList.add("is-valid");
        return true;

    }
}

function validaemail() {
    let email = document.getElementById('email');
    let helpemail = document.getElementById('helpemail');
    let valor = email.value.toString();
    if (valor.indexOf("@") < 0) {
        helpemail.setAttribute("class", "form-text text-muted ");
        email.classList.add("is-invalid");
        email.classList.remove("is-valid");
        return false;
    } else {
        helpemail.setAttribute("class", "form-text text-muted visually-hidden");
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
        return true;
    }
}

function validadata() {
    let data = document.getElementById('data');
    let helpdata = document.getElementById('helpdata');
    
    let dataObj = new Date(data.value);
    let hoje = new Date();
    console.log(dataObj > hoje);

    if (dataObj > hoje) {
        helpdata.setAttribute("class", "form-text text-muted ");
        data.classList.add("is-invalid");
        data.classList.remove("is-valid");
        return false;
    } else {
        helpdata.setAttribute("class", "form-text text-muted visually-hidden");
        data.classList.remove("is-invalid");
        data.classList.add("is-valid");
        return true;
    }
}