$(document).ready(function(){
    $("#procurar-cep").click(function(){
        let cepValue = $("#cep").val().replace(/\D/g, '');  // Remove caracteres não numéricos

        if(cepValue.length !== 8) {
            alert("Por favor, insira um CEP válido com 8 dígitos.");
            return;  // Interrompe se o CEP for inválido
        }

        let servidor = `https://viacep.com.br/ws/${cepValue}/json/`;
        console.log("Requisitando o CEP:", servidor);

        $.getJSON(servidor, function(data){
            // Verifica se o CEP retornou erro
            if(data.erro) {
                alert("CEP não encontrado.");
                return;
            }

            // Preenche os campos com os dados retornados
            $("#end").val(data.logradouro);
            $("#comp").val(data.complemento);
            $("#bai").val(data.bairro);
            $("#cid").val(data.localidade);
            $("#est").val(data.uf);  // Preenche o estado com a sigla

            
        }).fail(function(){
            alert("Ocorreu um erro ao buscar o CEP. Tente novamente mais tarde.");
        });
    });
});
