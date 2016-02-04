$("[name=ajout_panier]").on("click", function(c){
	c.preventDefault();
	id = $(this).attr("data-panier");
	var data = new FormData();
	data.append("id_produit", id);

	$.ajax({
		url: '../produit/ajout-panier',
		data: data,
		cache: false,
		contentType: false,
		processData: false,
		dataType: "json",
		type: 'POST',
		success: function(jqXHR){
			if(jqXHR[0] != true){
				if(jqXHR[1]){
					swal({
						title: jqXHR[1],
						text: "",
						type: "warning",
						timer: 1000,
						showConfirmButton: false
					});
				}
			}else{
				swal({
					title: "Article ajouté",
					text: "",
					type: "success",
					timer: 1200,
					showConfirmButton: false
				});
			}
		},
		error: function(jqXHR, textStatus, errorThrown)
		{
			alert("ERREUR : "+ errorThrown);
		}
	});
	return false;
});