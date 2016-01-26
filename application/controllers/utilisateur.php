<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Utilisateur extends CI_Controller
{   
    private $id;
    private $prenom;
    private $nom;
    private $adresse;
    private $telephone;
    private $cp;
    private $ville;
    private $id_pays;
    private $mail;
    private $mdp;
    private $date_naissance;
    private $statut;
    private $date_entree;
    private $id_token;
    private $num_token;

    public function __construct()
    {
        parent::__construct();

        $this->load->model("utilisateur_model", "utilisateur");
        $this->load->model("pays_model", "pays");
        $this->load->model("token_model", "token");
        $this->output->enable_profiler(true);
    }

    public function form_create(){
        $fields = array(
                  "id",
                  "libelle",
                  );
        $pays = $this->pays->read($fields);

        $select = [];
        $select [''] = "Veuillez sélectionner un pays";
        foreach($pays as $item)
        {
            foreach($item as $key => $value)
            {
                if($key == "id"){
                    $cle = $value;
                }
                else{
                    $select[$cle] = $value;
                }
            }
        }
        $data = array();
        $data["pays"] = $select;
        $this->layout->set_titre("Inscription");
        $this->layout->ajouter_css("sweetalert/sweetalert");
        $this->layout->ajouter_js("jquery-1.11.3.min");
        $this->layout->ajouter_js("sweetalert/sweetalert.min");
        $this->layout->ajouter_js("sweetalert/sweetalert-dev");
        $this->layout->ajouter_js("utilisateur/form_submit");
        $this->layout->view("utilisateur/form_create",$data);
    }

    public function form_validate(){
        $return = array();
        $return[0] = false;
        $require = array("prenom","nom","email","mdp","confirm_mdp");
        $format = array("prenom","nom","email","telephone","adresse","ville","cp","id_pays","date_naissance","mdp");

        foreach($require as $item){
            if(empty($this->input->post($item))){
                $return[1] = "require";
                die(json_encode($return));
            }
        }
        foreach($format as $item){
            if($item == "prenom" && filter_var($this->input->post($item), FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^[a-zA-Z\p{Cyrillic}\p{Han}ÂÄÀÉÈÊËÔÖÛÜÙâäàéèêëôöûüù. .-]{3,50}$/"))) === false){
                $return[1] = "Prénom";
                die(json_encode($return));
            }
            elseif($item == "nom" && filter_var($this->input->post($item), FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^[a-zA-Z\p{Cyrillic}\p{Han}ÂÄÀÉÈÊËÔÖÛÜÙâäàéèêëôöûüù.-]{3,50}$/"))) === false){
                $return[1] = "Nom";
                die(json_encode($return));
            }
            elseif($item == "email" && (filter_var($this->input->post($item), FILTER_VALIDATE_EMAIL) === false || filter_var($this->input->post($item), FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/(yopmail\.com|trash-mail\.com|thrma\.com|mailinator\.com)/"))) !== false)){
                $return[1] = "Email";
                die(json_encode($return));
            }
            elseif($item == "telephone" && !empty($this->input->post($item)) && filter_var($this->input->post($item), FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^\+?([0-9](.|-|\s)*){5,20}$/"))) === false){
                $return[1] = "Téléphone".$this->input->post($item);
                die(json_encode($return));
            }
            elseif($item == "adresse" && !empty($this->input->post($item))  && filter_var($this->input->post($item), FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^[0-9a-zA-Z\p{Cyrillic}\p{Han}ÂÄÀÉÈÊËÔÖÛÜÙâäàéèêëôöûüù. .-]{3,50}$/"))) === false){
                $return[1] = "Adresse";
                die(json_encode($return));
            }
            elseif($item == "ville" && !empty($this->input->post($item))  && filter_var($this->input->post($item), FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^[[0-9a-zA-Z\p{Cyrillic}\p{Han}ÂÄÀÉÈÊËÔÖÛÜÙâäàéèêëôöûüù. .-]{3,50}$/"))) === false){
                $return[1] = "Ville";
                die(json_encode($return));
            }
            elseif($item == "cp" && !empty($this->input->post($item))  && filter_var($this->input->post($item), FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^[0-9a-zA-Z\p{Cyrillic}\p{Han} .-]{3,50}$/"))) === false){
                $return[1] = "Code Postal";
                die(json_encode($return));
            }
            elseif($item == "id_pays" && !empty($this->input->post($item))  && (filter_var($this->input->post($item), FILTER_VALIDATE_INT) === false || filter_var($this->input->post($item), FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^[0-9]{1,3}$/"))) === false)){
                $return[1] = "Id Pays";
                die(json_encode($return));
            }
            elseif($item == "date_naissance"  && !empty($this->input->post($item)) && filter_var($this->input->post($item), FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/"))) === false){
                $return[1] = "Date de naissance";
                die(json_encode($return));
            }
            elseif($item == "mdp"){
                $erreur = false;
                $return[1] = "Votre mot de passe doit contenir :\n";
                if(filter_var($this->input->post($item), FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^(.){8,15}$/"))) === false){
                    $return[1] .= "- entre 8 et 15 caractères\n";
                    $erreur = true;
                }
                if(filter_var($this->input->post($item), FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/[A-Z]/"))) === false){
                    $return[1] .= "- 1 majuscule\n";
                    $erreur = true;
                }
                if(filter_var($this->input->post($item), FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/[a-z]/"))) === false){
                    $return[1] .= "- 1 minuscule\n";
                    $erreur = true;
                }
                if(filter_var($this->input->post($item), FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/[0-9]/"))) === false){
                    $return[1] .= "- 1 chiffre\n";
                    $erreur = true;
                }
                if(filter_var($this->input->post($item), FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/[~!@\#€£%\^\*()=_{}\[\]\|:;,?-]/"))) === false){
                    $return[1] .= '- 1 caractère spécial (~!@#€£%^*()=_{}[]|:;,?-)';
                    $erreur = true;
                }
                if($erreur){
                    die(json_encode($return));
                }
                else{
                    $return[1] = NULL;
                }
            }
        }
        if($this->input->post("mdp") != $this->input->post("confirm_mdp")){
            $return[1] = "mdp";
            die(json_encode($return));
        }
        $this->user->setPrenom($this->input->post("prenom"));
        $this->user->setNom($this->input->post("nom"));
        $this->user->setEmail($this->input->post("email"));
        $this->user->setTelephone($this->input->post("telephone"));
        $this->user->setAdresse($this->input->post("adresse"));
        $this->user->setVille($this->input->post("ville"));
        $this->user->setCp($this->input->post("cp"));
        $this->user->setIdPays($this->input->post("country"));
        $this->user->setDateNaissance($this->input->post("date_naissance"));
        $this->user->setMdp($this->input->post("mdp"));

        $this->_insertion();
        $this->_setToken();
        $this->_mailInscription();

        $return[0] = true;
        die(json_encode($return));
    }

    private function _insertion(){
        $options_echappees = array();
        $options_non_echappees = array();
        $options_echappees["prenom"] = $this->user->getPrenom();
        $options_echappees["nom"] = $this->user->getNom();
        $options_echappees["email"] = $this->user->getEmail();
        $options_echappees["telephone"] = $this->user->getTelephone();
        $options_echappees["adresse"] = $this->user->getAdresse();
        $options_echappees["ville"] = $this->user->getVille();
        $options_echappees["cp"] = $this->user->getCp();
        $options_echappees["mdp"] = $this->user->getMdp();
        $options_echappees["id_pays"] = $this->user->getIdPays();
        $options_echappees["date_naissance"] = $this->user->getDateNaissance();
        $options_non_echappees = array();
        $options_non_echappees["date_entree"] = "NOW()";

        if(!$this->utilisateur->create($options_echappees, $options_non_echappees)){
            show_error("Insert utilisateur","error_db");
            return false;
        }
        $this->user->setId((int) $this->db->insert_id());
    }

    private function _setToken(){
        do{ 
            $this->num_token = '';
            $chaine = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            $nb = strlen($chaine);
            for($j=0; $j<10; $j++){
                $rand = rand(0,($nb-1));
                $this->num_token .= $chaine[$rand];
            }
            $token_count = $this->token->count('token',$this->num_token);
        }
        while($token_count > 0);

        $options_echappees = array();
        $options_non_echappees = array();
        $options_echappees["token"] = $this->num_token;
        $options_non_echappees["date"] = "NOW()";

        if(!$this->token->create($options_echappees, $options_non_echappees)){
            show_error("Insert token","error_db");
            return false;
        }
        $this->user->setIdToken((int) $this->db->insert_id());
        
        unset($options_echappees);
        unset($options_non_echappees);
        $options_echappees = array();
        $options_non_echappees = array();
        $options_non_echappees["id_token"] = $this->user->getIdToken();
        if(!$this->utilisateur->update($this->user->getId(), $options_echappees, $options_non_echappees)){
            show_error("Insert id_token","error_db");
            return false;
        }
    }

    private function _mailInscription(){
        $data = array();
        $data["prenom"] = $this->user->getPrenom();
        $data["nom"] = $this->user->getNom();
        $data["token"] = $this->num_token;
        $message = $this->load->view('email/inscription.php',$data,TRUE);
        $this->email->from('damien.lery@sfr.fr', 'Pyla');
        $this->email->to($this->user->getEmail());
        $this->email->subject('Finaliser votre inscription Pyla');
        $this->email->message($message);
        $this->email->set_mailtype("html"); 
        if(!$this->email->send()){
            echo $this->email->print_debugger();
        }
    }

    public function activation(){
        $token_count = $this->token->count('token',$this->input->get("t"));
        if($token_count != 1){
           show_error("Compte non identifiable","error_db"); 
        }

        $tokens = $this->token->read("id",array("token" => $this->input->get("t")));

        foreach($tokens as $token)
        {
            $this->user->setIdToken($token->id);
        }

        $options_echappees = array();
        $options_non_echappees = array();
        $options_non_echappees["token"] = "NULL";
        if(!$this->token->update((int)$this->user->getIdToken(), $options_echappees, $options_non_echappees)){
            show_error("Update token","error_db");
            return false;
        }

        unset($options_echappees);
        unset($options_non_echappees);
        $options_echappees = array();
        $options_non_echappees = array();
        $options_non_echappees["statut"] = "0";
        if(!$this->utilisateur->update(array("id_token" => $this->user->getIdToken()), $options_echappees, $options_non_echappees)){
            show_error("Update statut","error_db");
            return false;
        }
        echo "Compte activé";
    }

    /*public function createPage()
    {
        $this->categorie_model->createCategorie("Niveau 1");
    }*/
}