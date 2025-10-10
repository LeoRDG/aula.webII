$(window).ready(() => {
    // Query dos elementos com jQuery
    let img = $('#img');
    let msg = $("#msg");
    let qtd = $("#qtd");
    let valor = $("#valor");
    let previsao = $("#previsao");
    let btn_comprar = $("#comprar");
    let cor_select = $('#cor-select');

    // Pega a data de hoje, calcula 12 dias no futuro e mostra
    let hoje = new Date();
    let entrega = new Date(hoje.getTime() + 86400000*12);
    previsao.text(`Previsão de Entrega: ${entrega.getDate()}/${entrega.getMonth() + 1}/${entrega.getFullYear()}`)

    // Esconde a mensagem que aparece quando clica em Comprar
    msg.hide();

    // Muda a imagem quando a cor é selecionada
    cor_select.change(() => img.attr("src", "imgs/" + cor_select.val() + ".webp"));

    // Muda o valor de um input com base em outro input
    // A quantidade é convertida um inteiro
    // O valor total só aparece se o numero for valido
    qtd.on("keyup change", () => {
        let valor_total = Math.max( parseInt(qtd.val()) * 1109, 0);
        let formatado = Intl.NumberFormat("pt-br").format(valor_total);
        if (valor_total && valor_total > 0) valor.val("R$ " + formatado);
        else valor.val("");
    }
    );

    // Chama a funcao comprar quando o botao é clickado
    btn_comprar.click(comprar);

    function comprar() {
        // se a quantidade for valida
        if (qtd.val() > 0) {
            msg.text("Compra efetuada com sucesso! ");
            msg.css("color", "green");
        }
        // Se nao for valida
        else { 
            msg.text("Informe a quantidade!");
            msg.css("color", "red");
        };
        // mostra a mesnsagem no final e esconde depois de alguns segundos
        msg.slideDown(10);
        setTimeout(() => {msg.fadeOut(300)}, 2000)
    }
});
