$('#liste_articles').Tabledit({
	editButton: false,
	deleteButton: false,
	saveButton: true,
	restoreButton: false,
    columns: {
		identifier: [1, 'id'],
		editable: [[2, 'Libellé'],[3, 'Référence'],[4, 'Marque'],[7, 'Statut', '{"0": "Inactif", "1": "Actif"}']]
	},
	url: '../produit/form_modification_bo',
	onSuccess:function(data){
		if(!data[0]){
			if(data[1] == "require"){
				swal({
	                title: "Erreur",
	                text: "Veuillez renseigner le champ " + data[2],
	                type: "error",
	                showConfirmButton: true
	            });
			}else{
                swal({
                    title: "Format incorrect",
                    text: data[1],
                    type: "error",
                    showConfirmButton: true
                });
            }
        }
		return; 
	}
});