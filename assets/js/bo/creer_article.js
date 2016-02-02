$("#creer_article").on("submit", function(c){
    c.preventDefault();
    var data = new FormData();
    $.each($('form#creer_article :input'), function(i, fileds){
       data.append($(fileds).attr('name'), $(fileds).val());
    });

    var champs = ["recherche"];
    for(var i= 0; i < champs.length; i++)
    {
        $('[name ='+champs[i]+']').css({ 'box-shadow': 'none'});
        if($('[name ='+champs[i]+']').val() == ''){
             $('[name ='+champs[i]+']').css({ 'box-shadow': '0 0 8px #399BFF'});
        } 
    }
	if($('#select_utilisateur').val() == null){
		$('.select-wrapper').css({ 'box-shadow': '0 0 8px #399BFF'});
	}else{
		$('#.select-wrapper').css({ 'box-shadow': 'none'});
	}
	
    $.ajax({
        url: '../utilisateur/form_validation',
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
                    text: "Votre compte a été crée\nUn mail vous a été envoyé afin de l'activer",
                    type: "success",
                    timer: 4000,
                    showConfirmButton: false
                });
            }else if(jqXHR[1] == "require"){
                swal({
                    title: "Erreur",
                    text: "Veuillez renseigner les champs requis",
                    type: "error",
                    showConfirmButton: true
                });
            }else if(jqXHR[1] == "mdp"){
                swal({
                    title: "Erreur",
                    text: "Les mots de passe ne concordent pas",
                    type: "error",
                    showConfirmButton: true
                });
            }else{
                swal({
                    title: "Format incorrect",
                    text: jqXHR[1],
                    type: "error",
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