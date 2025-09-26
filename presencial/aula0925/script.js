$(document).ready(() => {
    $('#prodlista li').attr('class', 'produto');
    $('#prodlista').click(marca);
    $("#add").click(addprod);
    $("#prod").on("input click", mostracarc);
    $('#prodlista li').eq(1).css('color', 'red');
    $('#prodlista li').each(function (index, val) {
        console.log(index + ' - ' + $(this).text());
    });
    $(".cpf").mask('000.000.000-00', {clearIfNotMatch:true})
    $("#placa1").mask('SSS-0A00', {clearIfNotMatch:true})
    $(".vl").mask('#.##0,00', {reverse:true})
})

function mostracarc(){
    let tam_prod = $("#prod").val().length;
    $("#helpId").text(tam_prod);
    $('#add').prop('disabled', (tam_prod === 0));
    
    if (tam_prod == 0) {
        $('#prod').addClass('is-invalid');
        $('#prod').removeClass('is-valid');
    } else {
        $('#prod').removeClass('is-invalid');
        $('#prod').addClass('is-valid');
    }


}

function marca(event){
    // $(event.target).css('text-decoration', 'line-through');
    $(event.target).toggleClass('riscado');
    // $(event.target).remove();
}

function addprod(){
    let produto = $("#prod").val();

    produto ? $('#prodlista li:last').after('<li class="produto"> ' + produto + "</li>") : null

}
