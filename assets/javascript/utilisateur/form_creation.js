$("#new_user").on("submit", function(c){
    c.preventDefault();
    var data = new FormData();
   $.each($('form#new_user :input'), function(i, fileds){
       data.append($(fileds).attr('name'), $(fileds).val());
   });
    var champs = ["prenom","nom","email","mdp","confirm_mdp"];
    for(var i= 0; i < champs.length; i++)
    {
        $('[name ='+champs[i]+']').css({ 'box-shadow': 'none'});
        if($('[name ='+champs[i]+']').val() == ''){
             $('[name ='+champs[i]+']').css({ 'box-shadow': '0 0 8px #399BFF'});
        } 
    }

    $.ajax({
        url: 'form_insertion',
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
                    text: "Votre compte a été crée\nUn mail vous a été envoyé afin d'activer votre compte",
                    type: "success",
                    timer: 4000,
                    showConfirmButton: false
                });
            }else if(jqXHR[1] == "require"){
                swal({
                    title: "Erreur",
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
            }else if(jqXHR[1] == "email"){
                swal({
                    title: "Erreur",
                    text: "Cet email a déjà été enregistré",
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