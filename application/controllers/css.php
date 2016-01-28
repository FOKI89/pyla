<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Css extends CI_Controller
{   
    private $id;
    private $libelle;

    public function __construct()
    {
        parent::__construct();

        $this->load->model("utilisateur_model", "utilisateur");
        $this->load->model("pays_model", "pays");
        $this->load->model("token_model", "token");
        $this->load->model("statut_model", "stat");
        $this->output->enable_profiler(true);
    }

    public function form_bg(){
        $this->layout->set_titre("Backoffice - Background");
        $this->layout->ajouter_css("sweetalert/sweetalert");
        $this->layout->ajouter_js("jquery-1.11.3.min");
        $this->layout->ajouter_js("sweetalert/sweetalert.min");
        $this->layout->ajouter_js("sweetalert/sweetalert-dev");
        $this->layout->ajouter_js("backoffice/form_insertion_bg");
        $this->layout->view("backoffice/form_bg");
    }

    public function form_insertion_bg(){
        $return = array();
        $return[0] = false;
        $require = array("bg");

        foreach($require as $item){
            if(empty($this->input->post($item))){
                $return[1] = "require";
                die(json_encode($return));
            }
        }

        // Création du fichier 
        $fichier = fopen("/Users/Damien/Sites/Pyla/assets/css/monstyle.css","w+"); 
        // Vérification de l'écriture 
        if (fwrite($fichier,$this->input->post('bg'))) { 
        echo "Le fichier à été créé avec succès"; 
        } else { 
        // Erreur 
        echo "Impossible de créer le fichier"; 
        } 
        fclose($fichier); 
    }
}