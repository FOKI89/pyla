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
        url: 'utilisateur/form_connect',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        type: 'POST',
        success: function(jqXHR){
            if(jqXHR[0] != true){
                if(typeof jqXHR[2] != "undefined"){
                    swal({
                    title: jqXHR[1],
                    text: jqXHR[2],
                    type: "error",
                    showConfirmButton: true
                });
                }
                swal({
                    title: "Erreur",
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