$("#new_user").on("submit", function(c){
    c.preventDefault();
    var data = new FormData();
    $.each($('form#new_user :input'), function(i, fileds){
       data.append($(fileds).attr('name'), $(fileds).val());
    });

    if($("#old_mdp").val() != "" || $("#new_mdp").val() != "" || $("#confirm_mdp").val() != ""){
        var champs = ["prenom","nom","email","old_mdp","new_mdp","confirm_mdp"];
    }else{
        var champs = ["prenom","nom","email"];
    }
    for(var i= 0; i < champs.length; i++)
    {
        $('[name ='+champs[i]+']').css({ 'box-shadow': 'none'});
        if($('[name ='+champs[i]+']').val() == ''){
             $('[name ='+champs[i]+']').css({ 'box-shadow': '0 0 8px #399BFF'});
        } 
    }

    $.ajax({
        url: 'form_modification',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        type: 'POST',
        success: function(jqXHR){
            if(jqXHR[0] == "lien"){
                console.log(jqXHR[1]);
                return false;
            }
            if(jqXHR[0] == true){
                swal({
                    title: "Succès",
                    text: "Vos modifications ont été enregistrées",
                    type: "success",
                    timer: 1700,
                    showConfirmButton: false
                });
            }else if(jqXHR[1] == "require"){
                swal({
                    title: "Erreur",
                    text: "Veuillez renseigner les champs requis",
                    type: "warning",
                    showConfirmButton: true
                });
            }else if(jqXHR[1] == "old_mdp"){
                swal({
                    title: "Erreur",
                    text: "Le mot de passe saisi ne correspond pas à l'actuel",
                    type: "warning",
                    showConfirmButton: true
                });
            }else if(jqXHR[1] == "new_mdp"){
                swal({
                    title: "Erreur",
                    text: "Les mots de passe ne concordent pas",
                    type: "warning",
                    showConfirmButton: true
                });
            }else if(jqXHR[1] == "email"){
                swal({
                    title: "Erreur",
                    text: "Cet email a déjà été enregistré",
                    type: "warning",
                    showConfirmButton: true
                });
            }else if(jqXHR[1] == "session"){
                swal({
                    title: "Erreur",
                    text: "Une erreur est survenue, veuillez vous identifier",
                    type: "warning",
                    showConfirmButton: true
                    },
                    function(){
                        window.location.href = 'accueil/connexion';
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