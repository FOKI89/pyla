$("#creer_compte").on("click", function() { alert('in');
    $.ajax({
        url: 'backoffice/creer-compte',
        cache: false,
        contentType: false,
        processData: false,
        success: function(jqXHR){
            location.reload('backoffice');
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
            console.log("ERREUR : "+ textStatus);
        }
    });

});

$("#deconnexion").on("click", function() {
    $.ajax({
        url: 'backoffice/deconnexion',
        cache: false,
        contentType: false,
        processData: false,
        success: function(jqXHR){
            location.reload('backoffice');
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
            console.log("ERREUR : "+ textStatus);
        }
    });
});