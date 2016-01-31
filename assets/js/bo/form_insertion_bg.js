$("#background").on("submit", function(c){
    c.preventDefault();
    var data = new FormData();
    $.each($('form#background :input'), function(i, fileds){
       data.append($(fileds).attr('name'), $(fileds).val());
    });

    $('[name =bg]').css({ 'box-shadow': 'none'});
    if($('[name =bg]').val() == ''){
         $('[name =bg]').css({ 'box-shadow': '0 0 8px #399BFF'});
    } 

    $.ajax({
        url: 'css/form_insertion_bg',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        type: 'POST',
        success: function(jqXHR){
            if(jqXHR[0]){
                console.log(jqXHR[1]);
                return false;
            }
            else{
                swal({
                    title: "Erreur",
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