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
        $this->output->enable_profiler(false);
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
        $this->layout->ajouter_js("sweetalert/sweetalert.min");
        $this->layout->ajouter_js("sweetalert/sweetalert-dev");
        $this->layout->ajouter_js("utilisateur/form_creation");
        $this->layout->view('themes/accueil/register',$data);
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

        $data = array();
        $data["prenom"] = $this->user->getPrenom();
        $data["nom"] = $this->user->getNom();
        $data["token"] = $this->num_token;
        $template = "inscription";
        $sujet = "Activation de votre compte ".$_SESSION["site_nom"];
        $email = $this->user->getEmail();
        $this->_mailInscription($data,$template,$sujet,$email);

        /*$return[0] = "lien";
        $return[1] = "http://localhost:8888/Pyla/activation?t=".$this->num_token;*/
        $return[0] = true;
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
            if($item == "prenom" && !empty($this->input->post($item)) && filter_var($this->input->post($item), FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^[a-zA-Z \p{Cyrillic}\p{Han}ÂÄÀÉÈÊËÎÏÔÖÛÜÙâäàéèêëîïôöûüù. .-]{3,50}$/"))) === false){
                $return[1] = "Prénom";
                die(json_encode($return));
            }
            elseif($item == "nom" && !empty($this->input->post($item)) && filter_var($this->input->post($item), FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^[a-zA-Z \p{Cyrillic}\p{Han}ÂÄÀÉÈÊËÎÏÔÖÛÜÙâäàéèêëîïôöûüù.-]{3,50}$/"))) === false){
                $return[1] = "Nom";
                die(json_encode($return));
            }
            elseif(($item == "email" || $item == "email_contact" || ($item == "new_email" && !empty($item))) && !empty($this->input->post($item)) && (filter_var($this->input->post($item), FILTER_VALIDATE_EMAIL) === false || filter_var($this->input->post($item), FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/(yopmail\.com|trash-mail\.com|thrma\.com|mailinator\.com)/"))) !== false)){
                $return[1] = "Email";
                die(json_encode($return));
            }
            elseif($item == "telephone" && !empty($this->input->post($item)) && filter_var($this->input->post($item), FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^\+?([0-9](.|-|\s)*){5,20}$/"))) === false){
                $return[1] = "Téléphone".$this->input->post($item);
                die(json_encode($return));
            }
            elseif($item == "adresse" && !empty($this->input->post($item))  && filter_var($this->input->post($item), FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^[0-9a-zA-Z\p{Cyrillic}\p{Han}ÂÄÀÉÈÊËÎÏÔÖÛÜÙâäàéèêëîïôöûüù. .-]{3,50}$/"))) === false){
                $return[1] = "Adresse";
                die(json_encode($return));
            }
            elseif($item == "ville" && !empty($this->input->post($item))  && filter_var($this->input->post($item), FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^[[0-9a-zA-Z\p{Cyrillic}\p{Han}ÂÄÀÉÈÊËÎÏÔÖÛÜÙâäàéèêëîïôöûüù. .-]{3,50}$/"))) === false){
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
        if(!$query = $this->db->query('SELECT * FROM utilisateurs WHERE email = "'.$this->user->getEmail().'" AND statut IS NULL')){
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

    private function _mailInscription($data,$template,$sujet,$email){
        $message = $this->load->view('themes/email/'.$template.'.php',$data,TRUE);
        $this->email->from($_SESSION["site_email"], $_SESSION["site_nom"]);
        $this->email->to($email);
        $this->email->subject($sujet);
        $this->email->message($message);
        $this->email->set_mailtype("html"); 
        if(!$this->email->send()){
            echo $this->email->print_debugger();
            return false;
        }
        return true;
    }

    public function activation(){
        $token_count = $this->token->count('token',$this->input->get("t"));
        if($token_count != 1){
            $this->layout->set_titre("Erreur d'activation");
            $this->layout->view('themes/accueil/welcome_error.php');
            return false;
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

        $this->layout->set_titre("Inscription");
        $this->layout->view('themes/accueil/welcome.php');
    }

    private function _setSession(){
        $_SESSION['id'] = $this->user->getId();
        if($this->user->getStatut() == "1"){
            $_SESSION['admin'] = 1;
        }
    }

    public function form_connexion(){
        $return = array();
        $return[0] = false;
        $require = array("email","mdp");

        $this->_validation_require($require);
        
        $option = array();
        $option['email']  = $this->input->post("email");
        $user_count = $this->utilisateur->count($option);
        if($user_count < 1){
            $return[1] = "L'email saisi n'est pas reconnu";
            die(json_encode($return));
        }elseif($user_count > 1){
            $return[1] = "Erreur";
            $return[2] = "Une erreur est survenue<br>Si celle-ci se reproduit, veuillez nous <a href='mailto:".$_SESSION['site_email']."'>contacter</a>";
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
        if($user_tuple->statut < 7 && $user_tuple->statut > 2){
            $statut_tuples = $this->stat->read("*",array("id" => $user_tuple->statut));
            foreach($statut_tuples as $statut_tuple)
            {
                $description = $statut_tuple->description;
            }
            $return[1] = "Compte bloqué";
            $return[2] = $description;
            die(json_encode($return));
        }elseif($user_tuple->statut < 0 || $user_tuple->statut > 6){
            $return[1] = "Erreur";
            $return[2] =  "Une erreur est survenue<br>Si celle-ci se reproduit, veuillez nous <a href='mailto:".$_SESSION['site_email']."'>contacter</a>";
            die(json_encode($return));
        }elseif(empty($user_tuple->statut)){
            $return[1] = "Activation";
            $return[2] =  "Votre compte n'est pas actif<br>Si vous n'avez pas reçu de mail d'activation, veuillez nous <a href='mailto:contact@pyla.fr'>contacter</a>";
            die(json_encode($return));
        }

        $this->user->setId($user_tuple->id);
        $this->user->setStatut($user_tuple->statut);
        $this->_setSession();

        $return[0] = true;
        die(json_encode($return));
    }

    public function form_update(){
        if(!isset($_SESSION['id'])){
            $this->layout->set_titre("Connexion");
            $this->layout->ajouter_css("sweetalert/sweetalert");
            $this->layout->ajouter_js("vendors/jquery-1.11.3.min");
            $this->layout->ajouter_js("sweetalert/sweetalert.min");
            $this->layout->ajouter_js("sweetalert/sweetalert-dev");
            $this->layout->ajouter_js("accueil/form_connexion");
            $this->layout->view('themes/accueil/register');
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
        $this->layout->ajouter_js("sweetalert/sweetalert.min");
        $this->layout->ajouter_js("sweetalert/sweetalert-dev");
        $this->layout->ajouter_js("utilisateur/form_update");
        $this->layout->view('themes/compte/informations_personnelles',$data);
    }

    public function commande_en_cours(){
        $this->layout->set_titre("Commandes - En cours");
        $this->layout->ajouter_css("sweetalert/sweetalert");
        $this->layout->ajouter_js("sweetalert/sweetalert.min");
        $this->layout->ajouter_js("sweetalert/sweetalert-dev");
        //$this->layout->ajouter_js("utilisateur/form_update");
        $this->layout->view('themes/compte/commande_en_cours');
    }

    public function commande_terminee(){
        $this->layout->set_titre("Commandes - Terminées");
        $this->layout->ajouter_css("sweetalert/sweetalert");
        $this->layout->ajouter_js("sweetalert/sweetalert.min");
        $this->layout->ajouter_js("sweetalert/sweetalert-dev");
        //$this->layout->ajouter_js("utilisateur/form_update");
        $this->layout->view('themes/compte/commande_terminee');
    }

    public function commande_signaler(){
        $this->layout->set_titre("Commandes - Signaler");
        $this->layout->ajouter_css("sweetalert/sweetalert");
        $this->layout->ajouter_js("sweetalert/sweetalert.min");
        $this->layout->ajouter_js("sweetalert/sweetalert-dev");
        //$this->layout->ajouter_js("utilisateur/form_update");
        $this->layout->view('themes/compte/commande_signaler');
    }

    public function vente_article(){
        $this->layout->set_titre("Ventes - Articles");
        $this->layout->ajouter_css("sweetalert/sweetalert");
        $this->layout->ajouter_js("sweetalert/sweetalert.min");
        $this->layout->ajouter_js("sweetalert/sweetalert-dev");
        //$this->layout->ajouter_js("utilisateur/form_update");
        $this->layout->view('themes/compte/vente_article');
    }

    public function creer_article(){
        $fields = array(
                  "id",
                  "libelle",
                  );
        $where = array(
                  "id_parent" => null,
                  );
        $categories = $this->cat->getLastCategories($fields);
        $select = [];
        $select[0] = "Veuillez sélectionner une catégorie";
        foreach($categories as $categorie)
        {
            foreach($categorie as $key => $value)
            {
                if($key == "id"){
                    $cle = $value;
                }else{
                    $select[$cle] = $value;
                }
            }
        }
        $data = array();
        $data["categories"] = $select;
        $this->layout->set_titre("Ventes - Créer un article");
        $this->layout->ajouter_css("sweetalert/sweetalert");
        $this->layout->ajouter_js("sweetalert/sweetalert.min");
        $this->layout->ajouter_js("sweetalert/sweetalert-dev");
        $this->layout->ajouter_js("utilisateur/creer_article");
        $this->layout->view('themes/compte/creer_article',$data);
    }

    public function vente_terminee(){
        $this->layout->set_titre("Ventes - Terminées");
        $this->layout->ajouter_css("sweetalert/sweetalert");
        $this->layout->ajouter_js("sweetalert/sweetalert.min");
        $this->layout->ajouter_js("sweetalert/sweetalert-dev");
        //$this->layout->ajouter_js("utilisateur/form_update");
        $this->layout->view('themes/compte/vente_terminee');
    }

    public function vente_retour(){
        $this->layout->set_titre("Ventes - Retours");
        $this->layout->ajouter_css("sweetalert/sweetalert");
        $this->layout->ajouter_js("sweetalert/sweetalert.min");
        $this->layout->ajouter_js("sweetalert/sweetalert-dev");
        //$this->layout->ajouter_js("utilisateur/form_update");
        $this->layout->view('themes/compte/vente_retour');
    }

    public function commentaire(){
        $this->layout->set_titre("Mes commentaires");
        $this->layout->ajouter_css("sweetalert/sweetalert");
        $this->layout->ajouter_js("sweetalert/sweetalert.min");
        $this->layout->ajouter_js("sweetalert/sweetalert-dev");
        //$this->layout->ajouter_js("utilisateur/form_update");
        $this->layout->view('themes/compte/commentaire');
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
        unset($post['undefined']);
        unset($post['connection']);
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

    public function form_modification_bo(){
        $return = array();
        $return[0] = false;
        $require = array("prenom","nom","email");
        $format = array("prenom","nom","email","telephone","adresse","ville","cp","pays","date_entree");
        $post = (array) $this->input->post();
        $post = $this->suppr_accents($post,'',true);

        $this->_validation_require_bo($require);
        $this->_validation_format_bo($format,$post);
        
        $id = $post['id'];
        if(isset($post['pays'])){
            $post['id_pays'] = $post['pays'];
        }
        unset($post['id']);
        unset($post['pays']);
        unset($post['action']);
        unset($post[0]);

        
        if(!$this->utilisateur->update(array("id" => $id), $post)){
            show_error("Update coordonnées","error_db");
            return false;
        }

        $return[0] = true;
        die(json_encode($return));
    }

    private function _validation_require_bo($require){
        foreach($this->input->post() as $key => $value){
            $champ = strtolower($key);
            $key = $this->suppr_accents(strtolower($key));
            if(in_array($key,$require) && empty($value)){
                $return[1] = "require";
                $return[2] = $champ;
                die(json_encode($return));
            }
        }
    }

    private function _validation_format_bo($format, $post){
        foreach($format as $item){
            if($item == "prenom" && !empty($post[$item]) && filter_var($post[$item], FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^[a-zA-Z\p{Cyrillic}\p{Han}ÂÄÀÉÈÊËÎÏÔÖÛÜÙâäàéèêëîïôöûüù. .-]{3,50}$/"))) === false){
                $return[1] = "Prénom";
                die(json_encode($return));
            }
            elseif($item == "nom" && !empty($post[$item]) && filter_var($post[$item], FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^[a-zA-Z\p{Cyrillic}\p{Han}ÂÄÀÉÈÊËÎÏÔÖÛÜÙâäàéèêëîïôöûüù.-]{3,50}$/"))) === false){
                $return[1] = "Nom";
                die(json_encode($return));
            }
            elseif($item == "email" && !empty($post[$item]) && (filter_var($post[$item], FILTER_VALIDATE_EMAIL) === false || filter_var($post[$item], FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/(yopmail\.com|trash-mail\.com|thrma\.com|mailinator\.com)/"))) !== false)){
                $return[1] = "Email";
                die(json_encode($return));
            }
            elseif($item == "telephone" && !empty($post[$item]) && filter_var($post[$item], FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^\+?([0-9](.|-|\s)*){5,20}$/"))) === false){
                $return[1] = "Téléphone";
                die(json_encode($return));
            }
            elseif($item == "adresse" && !empty($post[$item])  && filter_var($post[$item], FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^[0-9a-zA-Z\p{Cyrillic}\p{Han}ÂÄÀÉÈÊËÎÏÔÖÛÜÙâäàéèêëîïôöûüù. .-]{3,50}$/"))) === false){
                $return[1] = "Adresse";
                die(json_encode($return));
            }
            elseif($item == "ville" && !empty($post[$item])  && filter_var($post[$item], FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^[[0-9a-zA-Z\p{Cyrillic}\p{Han}ÂÄÀÉÈÊËÎÏÔÖÛÜÙâäàéèêëîïôöûüù. .-]{3,50}$/"))) === false){
                $return[1] = "Ville";
                die(json_encode($return));
            }
            elseif($item == "cp" && !empty($post[$item])  && filter_var($post[$item], FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^[0-9a-zA-Z\p{Cyrillic}\p{Han} .-]{3,50}$/"))) === false){
                $return[1] = "Code Postal";
                die(json_encode($return));
            }
            elseif($item == "pays" && !empty($post[$item])  && (filter_var($post[$item], FILTER_VALIDATE_INT) === false || filter_var($post[$item], FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^[1-9]{1,3}$/"))) === false)){
                $return[1] = "Id Pays";
                die(json_encode($return));
            }
            elseif($item == "date_naissance"  && !empty($post[$item]) && filter_var($post[$item], FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/"))) === false){
                $return[1] = "Date de naissance";
                die(json_encode($return));
            }
        }
    }

    public function deconnexion(){
        session_unset();
        header('Location: '.site_url());
        exit();
    }

    public function form_install(){
        $return = array();
        $return[0] = false;
        $require = array("old_email","email_contact","mdp","confirm_mdp");
        $format = array("old_email","new_email","email_contact","mdp");

        $this->_validation_require($require);
        $this->_validation_format($format);
        $this->_validation_mdp($this->input->post("mdp"));
        
        if($this->input->post("mdp") != $this->input->post("confirm_mdp")){
            $return[1] = "mdp";
            die(json_encode($return));
        }else{
            $mdp = $this->encrypt->encode($this->input->post('mdp'));
        }

        $admin_count = $this->utilisateur->count('email',$this->input->post("old_email"));
        if($admin_count != 1){
            $return[1] = "introuvable";
            die(json_encode($return));
        }
        $new_email = $this->input->post("new_email");
        if(isset($new_email) && !empty($new_email)){
            $this->user->setEmail($this->input->post("new_email"));
        }else{
            $this->user->setEmail($this->input->post("old_email"));
        }
        $this->user->setMdp($mdp);
        $this->_update_admin($this->input->post("old_email"), $this->input->post("email_contact"));

        $return[0] = true;
        $return[1] = base_url()."backoffice";
        die(json_encode($return));
    }

    public function chercher_utilisateur(){
        $return = array();
        $return[0] = false;
        $require = array("recherche");
        $this->_validation_require($require);
    }

    private function _update_admin($old_email, $email_contact){
/*        $options_echappees = array();
        $options_non_echappees = array();
        $options_echappees["nom"] = $_SESSION['site_nom'];
        $options_echappees["email"] = $this->user->getEmail();
        $options_echappees["mdp"] = $this->user->getMdp();
        $options_non_echappees = array();
        $options_non_echappees["date_entree"] = "NOW()";
        $options_non_echappees["statut"] = "1";

        if(!$this->utilisateur->create($options_echappees, $options_non_echappees)){
            show_error("Insert administrateur","error_db");
            return false;
        }

        unset($options_non_echappees);
        $options_echappees = array();
        $options_echappees["email"] = $email_contact;
        if(!$this->site_model->create($options_echappees)){
            show_error("Insert administrateur email contact","error_db");
            return false;
        }*/
        //echo "site ".$_SESSION['site_nom']." - email ".$this->user->getEmail()." - old ".$old_email." - mdp ".$this->user->getMdp(); die;
        $options_echappees = array();
        $options_non_echappees = array();
        $options_echappees["nom"] = $_SESSION['site_nom'];
        $options_echappees["email"] = $this->user->getEmail();
        $options_echappees["mdp"] = $this->user->getMdp();
        $options_non_echappees = array();
        $options_non_echappees["date_entree"] = "NOW()";
        $options_non_echappees["statut"] = "1";
        $where = array(
                  "email" => $old_email,
                  );

        if(!$this->utilisateur->update($where, $options_echappees, $options_non_echappees)){
            show_error("Insert administrateur","error_db");
            return false;
        }

        unset($options_echappees);
        unset($options_non_echappees);
        $options_echappees = array();
        $options_non_echappees = array();
        $options_echappees["email"] = $email_contact;
        $options_non_echappees["date_creation"] = "NOW()";
        if(!$this->site_model->update(1,$options_echappees)){
            show_error("Insert administrateur email contact","error_db");
            return false;
        }
    }

    public function compte(){
        $this->layout->set_titre("Mon compte");
        $this->layout->ajouter_css("sweetalert/sweetalert");
        $this->layout->ajouter_js("sweetalert/sweetalert.min");
        $this->layout->ajouter_js("sweetalert/sweetalert-dev");
        $this->layout->ajouter_js("utilisateur/form_creation");
        $this->layout->view('themes/compte/dashboard');
    }

    public function panier(){
        if(!isset($_SESSION['id']) || empty($_SESSION['id'])){
            $this->layout->set_titre("Connexion");
            $this->layout->ajouter_css("sweetalert/sweetalert");
            $this->layout->ajouter_js("vendors/jquery-1.11.3.min");
            $this->layout->ajouter_js("sweetalert/sweetalert.min");
            $this->layout->ajouter_js("sweetalert/sweetalert-dev");
            $this->layout->ajouter_js("accueil/form_connexion");
            $this->layout->view('themes/accueil/connection');
            return false;
        }
        
        if(!$query_client = $this->db->query('SELECT id, nom, prenom, email FROM utilisateurs WHERE id = '.$_SESSION['id'])){
            show_error("Select client connect","error_db");
            return false;
        }
        $client = $query_client->result();
        $_SESSION["client"] = $client[0];
        $panier = isset($_SESSION["panier"]) ? $_SESSION["panier"] : null;
        
        $data = array(
                    "client" => $_SESSION["client"],
                    "panier" => $panier
                );
        $this->layout->set_titre("Mon panier");
        $this->layout->ajouter_css("sweetalert/sweetalert");
        $this->layout->ajouter_js("sweetalert/sweetalert.min");
        $this->layout->ajouter_js("sweetalert/sweetalert-dev");
        $this->layout->ajouter_js("utilisateur/form_creation");
        $this->layout->view('themes/panier', $data);
    }

    public function retirer_panier($index){
        unset($_SESSION["panier"][$index]);
        $this->panier();
    }

    public function valider_panier(){
        $where = array("id" => 1);
        $site = $this->site_model->read("*", $where);

        $data = array();
        $data["email_client"] = $_SESSION["client"]->email;
        $data["prenom_client"] = $_SESSION["client"]->prenom;
        $data["nom_client"] = $_SESSION["client"]->nom;
        $data["nom_site"] = $site[0]->nom;
        $data["email_site"] = $site[0]->email;
        foreach($_SESSION["panier"] as $key => $panier ){
            $data["site_nom"] = $_SESSION["site_nom"];
            $data["id"] = $panier->id;
            $data["libelle"] = $panier->libelle;
            $data["reference"] = $panier->reference;
            $data["marque"] = $panier->marque;
            $data["prix"] = $panier->prix;
            $data["prenom"] = $panier->prenom;
            $data["nom"] = $panier->nom;
            $template = "panier";
            $sujet = $_SESSION["site_nom"]." - Commande en attente";
            $email = $panier->email;
            if($this->_mailInscription($data,$template,$sujet,$email)){
                unset($_SESSION["panier"]);
            }
        }
        $this->layout->set_titre("Mon panier");
        $this->layout->ajouter_css("sweetalert/sweetalert");
        $this->layout->ajouter_js("sweetalert/sweetalert.min");
        $this->layout->ajouter_js("sweetalert/sweetalert-dev");
        $this->layout->ajouter_js("utilisateur/form_creation");
        $this->layout->view('themes/panier_valide');
    }

    public function suppr_accents($str, $encoding ='utf-8',$min = false)
    {
        if(is_array($str)){
            $result = array();
            foreach($str as $key => $value){
                $key = htmlentities($key, ENT_NOQUOTES, $encoding);
                $key = preg_replace('#&([A-za-z])(?:acute|grave|cedil|circ|orn|ring|slash|th|tilde|uml);#', '\1', $key);
                $key = preg_replace('#&([A-za-z]{2})(?:lig);#', '\1', $key);
                $key = preg_replace('#&[^;]+;#', '', $key);
                if($min){
                    $key = strtolower($key);
                }
                $result[$key] = $value;
            }
        }else{
            $result = htmlentities($str, ENT_NOQUOTES, $encoding);
            $result = preg_replace('#&([A-za-z])(?:acute|grave|cedil|circ|orn|ring|slash|th|tilde|uml);#', '\1', $str);
            $result = preg_replace('#&([A-za-z]{2})(?:lig);#', '\1', $str);
            $result = preg_replace('#&[^;]+;#', '', $str);
        }
        return $result;
    }
}
