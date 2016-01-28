$("#add_critere").click(function(){
    effacer("new_critere");
    $("#new_critere").show();
});

$("#new_critere").on("submit", function(c){
    c.preventDefault();
    var data = new FormData();
    $.each($('form#new_critere :input'), function(i, fileds){
       data.append($(fileds).attr('name'), $(fileds).val());
    });

    var champs = ["libelle", "reference", "marque", "image"];
    for(var i= 0; i < champs.length; i++)
    {
        $('[name ='+champs[i]+']').css({ 'box-shadow': 'none'});
        if($('[name ='+champs[i]+']').val() == ''){
             $('[name ='+champs[i]+']').css({ 'box-shadow': '0 0 8px #399BFF'});
        } 
    }

    $.ajax({
        url: 'critere/form_validation',
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
                    text: "Votre produit a été enregistré",
                    type: "success",
                    timer: 1500,
                    showConfirmButton: false
                });
            }else if(jqXHR[1] == "require"){
                swal({
                    title: "Erreur",
                    text: "Veuillez renseigner les champs requis",
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
            alert("ERROR : "+ textStatus);
        }
    });
    return false;
});

function effacer(id_formulaire){
  $(':input','#'+id_formulaire)
   .not(':button, :submit, :reset, :hidden')
   .val('')
   .removeAttr('checked')
   .removeAttr('selected');
}