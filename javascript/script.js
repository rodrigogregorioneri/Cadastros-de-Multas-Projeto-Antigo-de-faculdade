$(document).ready(function () {
    var cnh = "";
    var placa = "";
    var proprietario = "";
    var infracao = "";
    var gravidade = "";
    var pontos = "";
    var valor = "";
    var datainfracao = "";
    var pesquisa1 = "";
    var pesquisa2 = "";
    var pesquisa3 = "";
    var usuario;
    var verifica = false;
    var cont = 0;
    cont = sessionStorage.getItem('contador');




    $("#eventoClique").click(function () {
        cont++;
        cnh = $("#cnh").val();
        placa = $("#placa").val();
        proprietario = $("#proprietario").val();
        infracao = $("#infracao").val();
        gravidade = $("#gravidade").val();
        pontos = $("#pontos").val();
        valor = $("#valor").val();
        datainfracao = $("#datainfracao").val();
        var cadastro = {
            ocnh: cnh,
            oplaca: placa,
            oproprietario: proprietario,
            oinfracao: infracao,
            ogravidade: gravidade,
            opontos: pontos,
            ovalor: valor,
            odatainfracao: datainfracao
        };
        sessionStorage.setItem('cadastro' + cont, JSON.stringify(cadastro));
        sessionStorage.setItem('contador', cont);
    });



    for (i = 1; i < sessionStorage.length; i++) {
        usuario = JSON.parse(sessionStorage.getItem('cadastro' + i));
        var imprime = "";
        
        imprime += "<tr class='row'><td class='col'>" + usuario.ocnh + "</td>" +
            "<td class='col'>" + usuario.oplaca + "</td>" +
            "<td class='col'>" + usuario.oproprietario + "</td>" +
            "<td class='col'>" + usuario.oinfracao + "</td>" +
            "<td class='col'>" + usuario.ogravidade + "</td>" +
            "<td class='col'>" + usuario.opontos + "</td>" +
            "<td class='col'>" + usuario.ovalor + "</td>" +
            "<td class='col'>" + usuario.odatainfracao + "</td>";
        imprime += "</tr>";
        $(".tbListagem").append(imprime);
    }







    $("#eventoCliquePesquisa").click(function () {
        pesquisa1 = $('#cnhp').val();
        pesquisa2 = $('#placap').val();
        pesquisa3 = $('#infrap').val();





        for (i = 1; i < sessionStorage.length; i++) {

                
            usuario = JSON.parse(sessionStorage.getItem('cadastro' + i));

            if (usuario.ocnh == pesquisa1 || usuario.oplaca == pesquisa2 || usuario.oinfracao == pesquisa3) {
                var imprime = '<table class="tbConsulta"><tr class="row"><td class="col">CNH</td><td class="col">placa</td><td class="col">proprietario</td><td class="col">infracao</td><td class="col">gravidade</td><td class="col">pontos</td><td class="col">valor</td><td class="col">data da infracao</td></tr>';
                verifica = true;
                imprime += "<tr class='row'><td class='col'>" + usuario.ocnh + "</td>" +
                    "<td class='col'>" + usuario.oplaca + "</td>" +
                    "<td class='col'>" + usuario.oproprietario + "</td>" +
                    "<td class='col'>" + usuario.oinfracao + "</td>" +
                    "<td class='col'>" + usuario.ogravidade + "</td>" +
                    "<td class='col'>" + usuario.opontos + "</td>" +
                    "<td class='col'>" + usuario.ovalor + "</td>" +
                    "<td class='col'>" + usuario.odatainfracao + "</td>";
                imprime += "</tr></table>";
                $(".tbConsulta").html(imprime);

                
            }
        }
            if(verifica == false){
                alert("Não encontrado!!");
            }
            
    });









});