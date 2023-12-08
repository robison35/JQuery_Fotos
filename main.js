$(document).ready(function() {

    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancela').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaimagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li></li>');
        $(`<img src="${enderecoDaNovaimagem}" />`).appendto(novoItem);
        $(`
            <div class="overlay-imagem-link" >
                <a href="${enderecoDaNovaimagem}" target="blank" title="Ver imagem tamanho real" />
                    Ver imagem tamanho real
                </a>
            </div>
        `).appendto(novoItem);
        $(novoItem).appendto('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('');
    })
})