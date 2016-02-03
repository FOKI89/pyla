<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Backoffice extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();

        $this->load->model('categorie_model', 'cat');
        $this->load->model('produit_model', 'prod');
        $this->output->enable_profiler(false);
    }

    public function index()
    {
        $this->identification();
    }

    public function accueil(){
        if(!isset($_SESSION['admin']) || $_SESSION['admin'] != 1){
            $admin_count = $this->utilisateur->count('statut',1);
            if($admin_count == 0){
                $this->layout->set_titre("Back Office - Installation");
                $this->layout->set_theme("default_bo");
                $this->load->view("themes/bo/login/backend_config");
                return false;
            }
            $data = array();
            if(isset($_COOKIE["email"]) && isset($_COOKIE['mdp'])){
                $data["email"] = $_COOKIE["email"];
                $data["mdp"] = $_COOKIE["mdp"];
            }
            $this->layout->set_titre("Back Office - Connexion");
            $this->layout->set_theme("default_bo");
            $this->load->view("themes/bo/login/backend_login", $data);
            return false;
        }else{
            $this->layout->set_titre("Pila - Back Office");
            $this->layout->set_theme("default_bo");
            $this->layout->view("themes/bo/dashboard/dashboard");
            return false;
        }
    }

    public function creer_categorie(){
        if(!$query = $this->db->query('SELECT id, libelle FROM categories WHERE id_parent IS NULL OR (id_parent IS NOT NULL AND id IN( SELECT id_parent FROM categories )) ORDER BY libelle ASC')){
            show_error("Select categorie creation","error_db");
            return false;
        }  
        $categorie = $query->result(); 
        $select = [];
        $select [''] = "Catégorie parente";
        foreach($categorie as $item)
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
        $data["categorie"] = $select;
        $this->layout->set_titre("Back Office - Créer catégorie");
        $this->layout->set_theme("default_bo");
        $this->layout->ajouter_js("bo/creer_categorie");
        $this->layout->view("themes/bo/categorie/creer_categorie",$data);
        return false;
    }

    public function creer_utilisateur(){
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
        $this->layout->set_titre("Back Office - Créer utilisateur");
        $this->layout->set_theme("default_bo");
        $this->layout->ajouter_css("sweetalert/sweetalert");
        $this->layout->ajouter_js("sweetalert/sweetalert.min");
        $this->layout->ajouter_js("sweetalert/sweetalert-dev");
        $this->layout->ajouter_js("bo/creer_utilisateur");
        $this->layout->view("themes/bo/utilisateurs/creer_utilisateur",$data);
        return false;
    }

    public function chercher_utilisateur(){
        $this->layout->set_titre("Back Office - Chercher utilisateur");
        $this->layout->set_theme("default_bo");
        $this->layout->ajouter_js("bo/chercher_utilisateur");
        $this->layout->view("themes/bo/utilisateurs/chercher_utilisateur");
        return false;
    }

    public function liste_utilisateur(){
        if(!$query = $this->db->query('SELECT u.id, u.nom, u.prenom, u.email, u.adresse, u.ville, u.telephone, u.date_entree, u.statut, p.libelle AS `pays_libelle`, s.libelle AS `statut_libelle` FROM utilisateurs u LEFT JOIN pays p ON p.id = u.id_pays LEFT JOIN statut s ON s.id = u.statut ORDER BY u.nom ASC')){
            show_error("Select utilisateur","error_db");
            return false;
        }
        $data['utilisateurs'] = $query->result();        
        $this->layout->set_titre("Back Office - Liste utilisateurs");
        $this->layout->set_theme("default_bo");
        $this->layout->ajouter_js("bo/jquery.tabledit.min");
        $this->layout->ajouter_js("bo/liste_utilisateurs");
        $this->layout->view("themes/bo/utilisateurs/liste_utilisateurs",$data);
        return false;
    }

    public function creer_article(){
        $this->layout->set_titre("Back Office - Créer article");
        $this->layout->set_theme("default_bo");
        $this->layout->ajouter_js("bo/creer_article");
        $this->layout->view("themes/bo/catalogue/creer_article");
        return false;
    }

    public function chercher_article(){
        $this->layout->set_titre("Back Office - Chercher article");
        $this->layout->set_theme("default_bo");
        //$this->layout->ajouter_js("bo/chercher_article");
        $this->layout->view("themes/bo/catalogue/chercher_article");
        return false;
    }

    public function liste_article(){
        if(!$query = $this->db->query('SELECT p.id, p.reference, p.libelle AS `produit_libelle`, p.marque, p.statut, p.date, c.libelle AS `categorie_libelle` FROM produits p LEFT JOIN categories_produits cp ON p.id = cp.id_produit LEFT JOIN categories c ON c.id = cp.id_categorie ORDER BY p.libelle ASC')){
            show_error("Select utilisateur","error_db");
            return false;
        }
        $data['produits'] = $query->result();        
        $this->layout->set_titre("Back Office - Liste articles");
        $this->layout->set_theme("default_bo");
        $this->layout->ajouter_js("bo/jquery.tabledit.min");
        $this->layout->ajouter_js("bo/liste_articles");
        $this->layout->view("themes/bo/catalogue/liste_articles",$data);
        return false;
    }

    public function creer_critere(){
        $this->layout->set_titre("Back Office - Créer critère");
        $this->layout->set_theme("default_bo");
        //$this->layout->ajouter_js("bo/creer_critere");
        $this->layout->view("themes/bo/catalogue/creer_critere");
        return false;
    }

    public function liste_criteres(){
        $this->layout->set_titre("Back Office - Liste critères");
        $this->layout->set_theme("default_bo");
        //$this->layout->ajouter_js("bo/liste_criteres");
        $this->layout->view("themes/bo/catalogue/liste_criteres");
        return false;
    }

    public function chercher_commande(){
        $this->layout->set_titre("Back Office - Chercher commande");
        $this->layout->set_theme("default_bo");
        //$this->layout->ajouter_js("bo/chercher_commande");
        $this->layout->view("themes/bo/commandes/chercher_commande");
        return false;
    }

    public function liste_commandes(){
        $this->layout->set_titre("Back Office - Liste commandes");
        $this->layout->set_theme("default_bo");
        //$this->layout->ajouter_js("bo/liste_commandes");
        $this->layout->view("themes/bo/commandes/liste_commandes");
        return false;
    }

    public function modifier_pages(){
        $this->layout->set_titre("Back Office - Modifier page");
        $this->layout->set_theme("default_bo");
        //$this->layout->ajouter_js("bo/modifier_pages");
        $this->layout->view("themes/bo/pages/modifier_pages");
        return false;
    }

    public function parametres(){
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
        $this->layout->set_titre("Back Office - Paramètres");
        $this->layout->set_theme("default_bo");
        $this->layout->ajouter_js("bo/form_parametre");
        $this->layout->view("themes/bo/parametres/parametres",$data);
        return false;
    }


    public function statistiques(){
        $this->layout->set_titre("Back Office - Statistiques");
        $this->layout->set_theme("default_bo");
        //$this->layout->ajouter_js("bo/statistiques");
        $this->layout->view("themes/bo/parametres/statistiques");
        return false;
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

        $this->user->setId($user_tuple->id);
        $this->user->setStatut($user_tuple->statut);
        $this->_setSession();

        $cookie = $this->input->post("cookie");
        if(isset($cookie) && $cookie == "on"){
            setcookie('email', $this->input->post("email"), time()+365*24*3600);
            setcookie('mdp', $this->input->post("mdp"), time()+365*24*3600);
        }

        $return[0] = true;
        die(json_encode($return));
    }

    public function form_insertion_categorie(){
        $return = array();
        $return[0] = false;
        $require = array("libelle");

        $this->_validation_require($require);
        $post = (array)$this->input->post();

        if(isset($post["top"]) && $post["top"] == "on"){
            $post["top"] = 1;
        }else{
            $post["top"] = 0;
        }
        if(isset($post["home"]) && $post["home"] == "on"){
            $post["home"] = 1;
        }else{
            $post["home"] = 0;
        }
        unset($post["undefined"]);
        unset($post["action"]);

        $options_echappees = array();
        $options_non_echappees = array();
        $options_echappees["libelle"] = $post["libelle"];
        $options_echappees["description"] = $post["description"];
        $options_non_echappees["id_parent"] = $post["id_parent"];
        $options_non_echappees["top"] = $post["top"];
        $options_non_echappees["home"] = $post["home"];
        $options_non_echappees["rang"] = 0;
        
        if(!$this->cat->create($options_echappees, $options_non_echappees)){
            show_error("Insert administrateur","error_db");
            return false;
        }
        $return[0] = true;
        die(json_encode($return));
    }

    public function form_parametre(){
        $return = array();
        $return[0] = false;
        $require = array("nom","email","adresse","ville","cp","id_pays");
        $format = array("nom","email","telephone","adresse","ville","cp","id_pays");

        $this->_validation_require($require);
        $this->_validation_format($format);
        $post = (array)$this->input->post();
        unset($post["undefined"]);
        unset($post["action"]);
        $this->_insertion_parametre($post);

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
            if($item == "nom" && !empty($this->input->post($item)) && filter_var($this->input->post($item), FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^[a-zA-Z\p{Cyrillic}\p{Han}ÂÄÀÉÈÊËÎÏÔÖÛÜÙâäàéèêëîïôöûüù.-]{3,50}$/"))) === false){
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
        }
    }

    private function _insertion_parametre($post){
        $options_echappees = array();
        $options_non_echappees = array();
        $options_echappees["nom"] = $post["nom"];
        $options_echappees["email"] = $post["email"];
        $options_echappees["telephone"] = $post["telephone"];
        $options_echappees["adresse"] = $post["adresse"];
        $options_echappees["ville"] = $post["ville"];
        $options_echappees["cp"] = $post["cp"];
        $options_echappees["id_pays"] = $post["id_pays"];
        $options_non_echappees["date_creation"] = "NOW()";
        
        if(!$this->site_model->update(1,$options_echappees, $options_non_echappees)){
            show_error("Insert site","error_db");
            return false;
        }
    }

    private function _setSession(){
        $_SESSION['id'] = $this->user->getId();
        if($this->user->getStatut() == "1"){
            $_SESSION['admin'] = 1;
        }
    }

    public function reinitialisation(){
        $this->utilisateur->delete(array("statut" => 1));
        session_unset();
        setcookie('email', '', 1);
        setcookie('mdp', '', 1);
        header('Location: '.site_url('backoffice'));
        exit();
    }

    public function deconnexion(){
        session_unset();
        header('Location: '.site_url('backoffice'));
        exit();
    }
}