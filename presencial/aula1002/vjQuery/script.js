$(document).ready(() => {
    let btn = $("#calcular");
    $("#concordo").on("click", () => btn.prop("disabled", !btn.prop("disabled")));
    
    $('#resultado').hide();
    $(".inp").on("keyup change", () => $("#resultado").hide() );

    $("#calcular").click(calcular_imc);
});

function validaNumero(elemento) {
    return $(elemento).val().match(/^[\d.]+$/) ? true : false;
}

function validaCampos() {
    let res = true;

    let camposNum = $("input[type=number]");
    let generos = $("input[name='genero']");
    
    temGenero = generos.is(":checked");
    generos.toggleClass("is-invalid", !temGenero);
    
    camposNum.each(function () {
        let valido = validaNumero(this);
        $(this).toggleClass('is-invalid', !valido);
        res = res & valido;
    })

    return res && temGenero;
}

function calcular_imc() {
    if (validaCampos()) {
        let altura = $("#altura").val();
        let peso = $("#peso").val();

        let imc = peso / (altura * altura);
        mostrar_resultado(imc);
    }
}

function mostrar_resultado(valor) {
    let masc = $('#m').prop("checked");
    let img = $("#img");
    let imc_desc = $("#imc_desc");

    if (valor > 28) {
        img.attr( "src", masc ? "imgs/m3.png" : "imgs/f3.png");
        imc_desc.text("IMC = " + valor + " - Obesidade");
    } else if (valor >= 18) {
        img.attr( "src", masc ? "imgs/m2.png" : "imgs/f2.png");
        imc_desc.text("IMC = " + valor + " - Sobrepeso");
    } else {
        img.attr( "src", masc ? "imgs/m1.png" : "imgs/f1.png");
        imc_desc.text("IMC = " + valor + " - Normal");
    }

    $("#resultado").show();
}