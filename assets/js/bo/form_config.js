$("#configuration").on("submit", function(c){
    c.preventDefault();
    var data = new FormData();
    $.each($('#configuration :input'), function(i, fileds){
       data.append($(fileds).attr('name'), $(fileds).val());
    });
    var champs = ["email","mdp","confirm_mdp"];
    for(var i= 0; i < champs.length; i++)
    {
        $('[name ='+champs[i]+']').css({ 'box-shadow': 'none'});
        if($('[name ='+champs[i]+']').val() == ''){
             $('[name ='+champs[i]+']').css({ 'box-shadow': '0 0 8px #399BFF'});
        } 
    }
    $.ajax({
        url: 'utilisateur/form_config',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        type: 'POST',
        success: function(jqXHR){
            if(jqXHR[0] == true){
                swal({
                    title: "Succès",
                    text: "Votre compte administrateur a été crée",
                    type: "success",
                    timer: 2000,
                    showConfirmButton: false
                });
            }else if(jqXHR[1] == "require"){
                    swal({
                        title: "",
                        text: "Veuillez renseigner les champs requis",
                        type: "warning",
                        showConfirmButton: true
                    });
            }else if(jqXHR[1] == "mdp"){
                swal({
                    title: "Erreur",
                    text: "Les mots de passe ne concordent pas",
                    type: "warning",
                    showConfirmButton: true
                });
            }else{
                swal({
                    title: "Format incorrect",
                    text: jqXHR[1],
                    type: "warning",
                    showConfirmButton: true
                });
            }
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
            alert("ERREUR : "+ textStatus);
        }
    });
    return false;
});

