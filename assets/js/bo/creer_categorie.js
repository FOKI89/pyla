$("#creer_categorie").on("submit", function(c){
    c.preventDefault();
    var data = new FormData();
    $.each($('form#creer_categorie :input'), function(i, fileds){
       data.append($(fileds).attr('name'), $(fileds).val());
    });

    var champs = ["libelle"];
    for(var i= 0; i < champs.length; i++)
    {
        $('[name ='+champs[i]+']').css({ 'box-shadow': 'none'});
        if($('[name ='+champs[i]+']').val() == ''){
             $('[name ='+champs[i]+']').css({ 'box-shadow': '0 0 8px #399BFF'});
        } 
    }
	if($('#select_parent').val() == null){
		$('.select-damous').css({ 'box-shadow': '0 0 8px #399BFF'});
	}else{
		$('.select-damous').css({ 'box-shadow': 'none'});
	}

    $.ajax({
        url: '../backoffice/form_insertion_categorie',
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
                    text: "Catégorie ajoutée",
                    type: "success",
                    timer: 2000,
                    showConfirmButton: false
                });
            }else if(jqXHR[1] == "require"){
                swal({
                    title: "Erreur",
                    text: "Veuillez renseigner le champ libellé",
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

$("#top").on("click", function(){
    if($(this).prop('checked')){
        $(this).val('on');
    }else{
        $(this).val('off');
    }

});
$("#home").on("click", function(){
    if($(this).prop('checked')){
        $(this).val('on');
    }else{
        $(this).val('off');
    }

});