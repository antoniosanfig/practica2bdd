
$(document).ready(function () {

    var campo, tipo, valor;

    $('input[name=exampleRadios]').change(function () {

        $("#signos").prop("hidden", false);

        if ($('.esTexto').is(':checked')) {
            $("#inputText").prop("hidden", false);
            $('#inputNumber').prop("hidden", true);
        } else {
            $('#inputNumber').prop("hidden", false);

            $("#inputText").prop("hidden", true);
        }

    });

    $('input[name=radiosSignos]').change(function () {

        if ($('.esTexto').is(':checked')) {
            $("#inputText").prop("hidden", false);
            $('#inputNumber').prop("hidden", true);
        } else {
            $('#inputNumber').prop("hidden", false);

            $("#inputText").prop("hidden", true);
        }
        
    });

    $('#texto').on("keyup",function () {

        if ($('input[name=radiosSignos]:checked').val() != null || $("#texto").val() == "") {

         if ($("#texto").val() == null) {
                    $("#buscar").prop("hidden", true);
                } else {

                    $("#buscar").prop("hidden", false);
            }

        }

        switch ($('input[name=radiosSignos]:checked').val()) {
            case "<": tipo = "1"; break;
            case ">": tipo = "2"; break;
            case "<=": tipo = "3"; break;
            case ">=": tipo = "4"; break;
            case "=": tipo = "5"; break;
            case "<>": tipo = "6"; break;
        }

        campo = $('input[name=exampleRadios]:checked').val()
        valor = $('#texto').val()
        console.log("campo: " + campo);
        console.log("campo: " + tipo);
        console.log("campo: " + valor);

        $('#valor').val(valor);
        $('#campo').val(campo);
        $('#tipo').val(tipo);
    });

    $('#numero').on("keyup", function () {

        if ($('input[name=radiosSignos]:checked').val() != null) {

            if ($("#numero").val() == null || $("#numero").val() == "") {
                $("#buscar").prop("hidden", true);
            } else {

                $("#buscar").prop("hidden", false);
            }

        }

        switch ($('input[name=radiosSignos]:checked').val()) {
            case "<": tipo = "1"; break;
            case ">": tipo = "2"; break;
            case "<=": tipo = "3"; break;
            case ">=": tipo = "4"; break;
            case "=": tipo = "5"; break;
            case "<>": tipo = "6"; break;
        }

        campo = $('input[name=exampleRadios]:checked').val()
        valor = $('#numero').val()
        console.log("campo: " + campo);
        console.log("campo: " + tipo);
        console.log("campo: " + valor);

        $('#valor').val(valor);
        $('#campo').val(campo);
        $('#tipo').val(tipo);
    });

    $("#buscar").click(function () {

       // $(".modal-body").text($('input[name=exampleRadios]:checked').val() +" "+ $('input[name=radiosSignos]:checked').val() +" "+ $('#texto').val());

        switch ($('input[name=radiosSignos]:checked').val()) {
            case "<": tipo = "1"; break;
            case ">": tipo = "2"; break;
            case "<=": tipo = "3"; break;
            case ">=": tipo = "4"; break;
            case "=": tipo = "5"; break;
            case "<>": tipo = "6"; break;
        }

        campo = $('input[name=exampleRadios]:checked').val()
        valor = $('#texto').val()
        console.log("campo: " + campo);
        console.log("campo: " + tipo);
        console.log("campo: " + valor);

    });





});