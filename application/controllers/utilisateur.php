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
        $this->load->model("statut_model", "stat");
        $this->output->enable_profiler(true);
    }

    public function form_creation(){
        $fields = array("id","libelle");
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
        $this->layout->ajouter_js("utilisateur/form_creation");
        $this->layout->view("utilisateur/form_creation",$data);
    }

    public function form_insertion(){
        $this->form_validation();
    }

    public function form_validation(){
        $return = array();
        $return[0] = false;
        $require = array("prenom","nom","email","mdp","confirm_mdp");
        $format = array("prenom","nom","email","telephone","adresse","ville","cp","id_pays","date_naissance","mdp");

        $this->_validation_require($require);
        $this->_validation_format($format);
        $this->_validation_mdp($this->input->post("mdp"));
        
        if($this->input->post("mdp") != $this->input->post("confirm_mdp")){
            $return[1] = "mdp";
            die(json_encode($return));
        }else{
            $mdp = $this->encrypt->encode($this->input->post('mdp'));
        }
        $this->user->setPrenom($this->input->post("prenom"));
        $this->user->setNom($this->input->post("nom"));
        $this->user->setEmail($this->input->post("email"));
        $this->user->setTelephone($this->input->post("telephone"));
        $this->user->setAdresse($this->input->post("adresse"));
        $this->user->setVille($this->input->post("ville"));
        $this->user->setCp($this->input->post("cp"));
        $this->user->setIdPays($this->input->post("pays"));
        $this->user->setDateNaissance($this->input->post("date_naissance"));
        $this->user->setMdp($mdp);

        $this->_deleteUser();
        if(!$this->_verifUser()){
            $return[1] = "email";
            die(json_encode($return));
        }
        $this->_insertion();
        $this->_setToken();
        $this->_mailInscription();

        $return[0] = "lien";
        $return[1] = "http://localhost:8888/Pyla/activation?t=".$this->num_token;
        die(json_encode($return));
    }

    private function _validation_require($require){
        foreach($require as $item){
            if(empty($this->input->post($item))){
                $return[1] = "require";
                die(json_encode($return));
            }
        }
    }

    private function _validation_format($format){
        foreach($format as $item){
            if($item == "prenom" && !empty($this->input->post($item)) && filter_var($this->input->post($item), FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^[a-zA-Z\p{Cyrillic}\p{Han}ÂÄÀÉÈÊËÔÖÛÜÙâäàéèêëôöûüù. .-]{3,50}$/"))) === false){
                $return[1] = "Prénom";
                die(json_encode($return));
            }
            elseif($item == "nom" && !empty($this->input->post($item)) && filter_var($this->input->post($item), FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^[a-zA-Z\p{Cyrillic}\p{Han}ÂÄÀÉÈÊËÔÖÛÜÙâäàéèêëôöûüù.-]{3,50}$/"))) === false){
                $return[1] = "Nom";
                die(json_encode($return));
            }
            elseif($item == "email" && !empty($this->input->post($item)) && (filter_var($this->input->post($item), FILTER_VALIDATE_EMAIL) === false || filter_var($this->input->post($item), FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/(yopmail\.com|trash-mail\.com|thrma\.com|mailinator\.com)/"))) !== false)){
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
        }
    }

    private function _validation_mdp($mdp){
        $erreur = false;
        $return[1] = "Votre mot de passe doit contenir\n\n";
        if(filter_var($mdp, FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^(.){8,15}$/"))) === false){
            $return[1] .= "- entre 8 et 15 caractères\n";
            $erreur = true;
        }
        if(filter_var($mdp, FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/[A-Z]/"))) === false){
            $return[1] .= "- 1 majuscule\n";
            $erreur = true;
        }
        if(filter_var($mdp, FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/[a-z]/"))) === false){
            $return[1] .= "- 1 minuscule\n";
            $erreur = true;
        }
        if(filter_var($mdp, FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/[0-9]/"))) === false){
            $return[1] .= "- 1 chiffre\n";
            $erreur = true;
        }
        if(filter_var($mdp, FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/[~!@\#€£%\^\*()=_{}\[\]\|:;,?-]/"))) === false){
            $return[1] .= '- 1 caractère spécial (~!@#€£%^*()=_{}[]|:;,?-)';
            $erreur = true;
        }
        if($erreur){
            die(json_encode($return));
        }
    }

    private function _verifUser(){
        $option = array();
        $option['email']  = $this->input->post("email");
        $user_count = $this->utilisateur->count($option);
        if($user_count != 0){
            return false;
        }
        return true;
    }

    private function _deleteUser(){
        if(!$query = $this->db->query('Select * FROM utilisateurs WHERE email = "'.$this->user->getEmail().'" AND statut IS NULL')){
            show_error("Select utilisateur","error_db");
            return false;
        }
        foreach ($query->result() as $row)
        {   
            if(!$this->token->delete((int)$row->id_token)){
                show_error("Delete token","error_db");
                return false;
            }
        }
        
        if(!$this->db->query('DELETE FROM utilisateurs WHERE email = "'.$this->user->getEmail().'" AND statut IS NULL')){
            show_error("Delete utilisateur","error_db");
            return false;
        }
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
        $this->email->from('dlery.jarvis@gmail.com', 'Pyla');
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

        $user_tuples = $this->utilisateur->read("*",array("id_token" => $this->user->getIdToken()));

        foreach($user_tuples as $user_tuple)
        {
            $this->user->setId($user_tuple->id);
        }

        unset($options_echappees);
        unset($options_non_echappees);
        $options_echappees = array();
        $options_non_echappees = array();
        $options_non_echappees["statut"] = "2";
        $options_non_echappees["id_token"] = "NULL";
        if(!$this->utilisateur->update(array("id_token" => $this->user->getIdToken()), $options_echappees, $options_non_echappees)){
            show_error("Update statut","error_db");
            return false;
        }
        
        $this->_setSession();

        //$this->load->view('email/inscription.php',$data,TRUE);
        echo "Compte activé";
    }

    private function _setSession(){
        $_SESSION['id'] = $this->user->getId();
    }

    public function form_connexion(){
        $return = array();
        $return[0] = false;
        $require = array("email","mdp");

        $this->validation_require($require);
        
        $option = array();
        $option['email']  = $this->input->post("email");
        $user_count = $this->utilisateur->count($option);
        if($user_count < 1){
            $return[1] = "L'email saisi n'est pas reconnu";
            die(json_encode($return));
        }elseif($user_count > 1){
            $return[1] = "Erreur";
            $return[2] = "Une erreur est survenue<br>Si celle-ci se reproduit, veuillez nous <a href='mailto:contact@pyla.fr'>contacter</a>";
            die(json_encode($return));
        }
        $user_tuples = $this->utilisateur->read("*",array("email" => $this->input->post("email")));
        foreach($user_tuples as $user_tuple)
        {
            $mdp = $this->encrypt->decode($user_tuple->mdp);
        }
        if($this->input->post("mdp") != $mdp){
            $return[1] = "Le mot de passe saisi n'est pas reconnu";
            die(json_encode($return));
        }
        if($user_tuple->statut < 6 && $user_tuple->statut > 2){
            $statut_tuples = $this->stat->read("*",array("id" => $user_tuple->statut));
            foreach($statut_tuples as $statut_tuple)
            {
                $description = $statut_tuple->description;
            }
            $return[1] = "Compte bloqué";
            $return[2] = $description;
            die(json_encode($return));
        }elseif($user_tuple->statut < 0 || $user_tuple->statut > 5){
            $return[1] = "Erreur";
            $return[2] =  "Une erreur est survenue<br>Si celle-ci se reproduit, veuillez nous <a href='mailto:contact@pyla.fr'>contacter</a>";
            die(json_encode($return));
        }elseif(empty($user_tuple->statut)){
            $return[1] = "Activation";
            $return[2] =  "Votre compte n'est pas actif<br>Si vous n'avez pas reçu de mail d'activation, veuillez nous <a href='mailto:contact@pyla.fr'>contacter</a>";
            die(json_encode($return));
        }

        $return[0] = true;
        die(json_encode($return));
    }

    public function form_update(){
        if(!isset($_SESSION['id'])){
            $this->layout->set_titre("Connexion");
            $this->layout->ajouter_css("sweetalert/sweetalert");
            $this->layout->ajouter_js("jquery-1.11.3.min");
            $this->layout->ajouter_js("sweetalert/sweetalert.min");
            $this->layout->ajouter_js("sweetalert/sweetalert-dev");
            $this->layout->ajouter_js("accueil/form_connexion");
            $this->layout->view('accueil/form_connexion');
            return false;
        }
        $user_tuples = $this->utilisateur->read("*",array("id" => $_SESSION['id']));
        foreach($user_tuples as $user_tuple)
        {
            $this->user->setPrenom($user_tuple->prenom);
            $this->user->setNom($user_tuple->nom);
            $this->user->setEmail($user_tuple->email);
            $this->user->setTelephone($user_tuple->telephone);
            $this->user->setAdresse($user_tuple->adresse);
            $this->user->setVille($user_tuple->ville);
            $this->user->setCp($user_tuple->cp);
            $this->user->setIdPays($user_tuple->id_pays);
            $this->user->setDateNaissance($user_tuple->date_naissance);
        }

        $fields = array("id","libelle");
        $pays = $this->pays->read($fields);
        $select = [];
        $select [NULL] = "Veuillez sélectionner un pays";
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

        $data = array(
                  "prenom" => $this->user->getPrenom(),
                  "nom" => $this->user->getNom(),
                  "email" => $this->user->getEmail(),
                  "telephone" => $this->user->getTelephone(),
                  "adresse" => $this->user->getAdresse(),
                  "ville" => $this->user->getville(),
                  "cp" => $this->user->getCp(),
                  "id_pays" => $this->user->getIdPays(),
                  "pays" => $select,
                  "date_naissance" => $this->user->getdateNaissance(),
                  );

        $this->layout->set_titre("Coordonnées");
        $this->layout->ajouter_css("sweetalert/sweetalert");
        $this->layout->ajouter_js("jquery-1.11.3.min");
        $this->layout->ajouter_js("sweetalert/sweetalert.min");
        $this->layout->ajouter_js("sweetalert/sweetalert-dev");
        $this->layout->ajouter_js("utilisateur/form_update");
        $this->layout->view("utilisateur/form_update",$data);
    }

    public function form_modification(){
        $return = array();
        $return[0] = false;
        $require = array("prenom","nom","email");
        $format = array("prenom","nom","email","telephone","adresse","ville","cp","id_pays","date_naissance","new_mdp");

        $array = array($this->input->post('old_mdp'), $this->input->post('new_mdp'), $this->input->post('confirm_mdp'));
        if(count(array_filter($array)) != 0 && count(array_filter($array)) != 3) {
            $return[1] = "require";
            die(json_encode($return));
        }

        $this->_validation_require($require);
        $this->_validation_format($format);

        $user_tuples = $this->utilisateur->read("*",array("id" => $_SESSION['id']));

        foreach($user_tuples as $user_tuple)
        {
            $this->user->setId($user_tuple->id);
        }

        if(!empty($this->input->post('old_mdp'))){
            $mdp = $this->encrypt->decode($user_tuple->mdp);

            if($this->input->post("old_mdp") != $mdp){
                $return[1] = "old_mdp";
                die(json_encode($return));
            }
        }

        if(!empty($this->input->post("new_mdp"))){ $this->_validation_mdp($this->input->post("new_mdp"));}

        if($this->input->post("new_mdp") != $this->input->post("confirm_mdp")){
            $return[1] = "new_mdp";
            die(json_encode($return));
        }else{
            $mdp = $this->encrypt->encode($this->input->post('new_mdp'));
        }

        $post = (array) $this->input->post();      
        unset($post['submit']);
        if(!empty($post['new_mdp'])){
            $post['mdp'] = $this->encrypt->encode($post['new_mdp']);
            unset($post['old_mdp']);
            unset($post['new_mdp']);
            unset($post['confirm_mdp']);
        }else{
            unset($post['old_mdp']);
            unset($post['new_mdp']);
            unset($post['confirm_mdp']);
        }

        if(!$this->utilisateur->update(array("id" => $_SESSION['id']), $post)){
            show_error("Update coordonnées","error_db");
            return false;
        }

        $return[0] = true;
        die(json_encode($return));
    }

    public function deconnexion(){
        if(isset($_SESSION['id'])){
            $_SESSION['id'] = NULL;
        }
    }
}
