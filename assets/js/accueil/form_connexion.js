$("#connection").on("submit", function(c){
    c.preventDefault();
    var data = new FormData();
   $.each($('form#connection :input'), function(i, fileds){
       data.append($(fileds).attr('name'), $(fileds).val());
   });
    var champs = ["email","mdp"];
    for(var i= 0; i < champs.length; i++)
    {
        $('[name ='+champs[i]+']').css({ 'box-shadow': 'none'});
        if($('[name ='+champs[i]+']').val() == ''){
             $('[name ='+champs[i]+']').css({ 'box-shadow': '0 0 8px #399BFF'});
        }
    }

    $.ajax({
        url: 'utilisateur/form_connexion',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        type: 'POST',
        success: function(jqXHR){
            if(jqXHR[0] != true){
                if(jqXHR[1] == "require"){
                    swal({
                        title: "",
                        text: "Veuillez renseigner les champs requis",
                        type: "warning",
                        showConfirmButton: true
                    });
                }else if(jqXHR[1] == "Activation"){
                    swal({
                        html:true,
                        title: jqXHR[1],
                        text: jqXHR[2],
                        type: "warning",
                        showConfirmButton: true
                    });
                }else if(jqXHR[1] == "Compte bloqué"){
                    swal({
                        html:true,
                        title: jqXHR[1],
                        text: jqXHR[2],
                        type: "warning",
                        showConfirmButton: true
                    });
                }else if(jqXHR[1] == "Erreur"){
                    swal({
                        html:true,
                        title: jqXHR[1],
                        text: jqXHR[2],
                        type: "error",
                        showConfirmButton: true
                    });
                }else{
                    swal({
                        html:true,
                        title: "Erreur",
                        text: jqXHR[1],
                        type: "warning",
                        showConfirmButton: true
                    });
                }
            }else{
                location.href = './';
            }
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
            alert("ERREUR : "+ textStatus);
        }
    });
    return false;
});
