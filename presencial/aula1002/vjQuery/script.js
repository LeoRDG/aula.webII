$(document).ready(() => {
    let btn = $("#calcular");
    $("#concordo").click( () => btn.prop("disabled", !btn.prop("disabled")) );

    $('#resultado').hide();
    $(".inp").on("keyup change", () => $("#resultado").hide());

    btn.click((calcular_imc));
});

function validaCampos() {
    let tudoValido = true;

    let camposNum = $("input[type=number]");
    let generos = $("input[name='genero']");

    temGenero = generos.is(":checked");
    generos.toggleClass("is-invalid", !temGenero);

    camposNum.each(function () {
        let numValido = /^[\d.]+$/.test( $(this).val() );
        $(this).toggleClass('is-invalid', !numValido);
        tudoValido = tudoValido && numValido;
    });

    return tudoValido && temGenero;
}

function calcular_imc() {
    if (!validaCampos()) return;
    let imc = $("#peso").val() / ($("#altura").val() ** 2);
    mostrar_resultado(imc);
}

function mostrar_resultado(valor) {
    let genero = $('#m').prop("checked") ? "m" : "f";
    let resultado;

    if      (valor > 28) resultado = "Obesidade";
    else if (valor > 18) resultado = "Sobrepeso";
    else                 resultado = "Normal";

    $("#imc_desc").text(`IMC = ${valor} - ${resultado}`);
    $("#img").attr("src", `imgs/${genero}_${resultado}.png`);
    $("#resultado").show();
}