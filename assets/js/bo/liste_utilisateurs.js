$('#liste_utilisateurs').Tabledit({
	editButton: false,
	deleteButton: false,
	saveButton: true,
	restoreButton: false,
    columns: {
		identifier: [1, 'id'],
		editable: [[2, 'Nom'],[3, 'Prénom'],[4, 'Email'],[5, 'Adresse'],[6, 'Ville'],[7, 'Pays', '{"76": "France", "61": "Denmark"}'],[8, 'Téléphone'],[9, 'Entrée'],[10, 'Statut', '{"1": "Administrateur", "2": "Client", "3": "Vendeur", "4": "Vendeur malhonnête", "5": "Payeur malhonnête", "6": "Bloqué"}']]
	},
	url: '../utilisateur/form_modification_bo',
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