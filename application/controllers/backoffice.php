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

    public function creer_utilisateur(){
        $this->layout->set_titre("Back Office - Créer utilisateur");
        $this->layout->set_theme("default_bo");
        //$this->layout->ajouter_js("bo/creer_utilisateur");
        $this->layout->view("themes/bo/utilisateurs/creer_utilisateur");
        return false;
    }

    public function chercher_utilisateur(){
        $this->layout->set_titre("Back Office - Chercher utilisateur");
        $this->layout->set_theme("default_bo");
        //$this->layout->ajouter_js("bo/chercher_utilisateur");
        $this->layout->view("themes/bo/utilisateurs/chercher_utilisateur");
        return false;
    }

    public function liste_utilisateur(){
        $this->layout->set_titre("Back Office - Liste utilisateurs");
        $this->layout->set_theme("default_bo");
        //$this->layout->ajouter_js("bo/liste_utilisateurs");
        $this->layout->view("themes/bo/utilisateurs/liste_utilisateurs");
        return false;
    }

    public function creer_article(){
        $this->layout->set_titre("Back Office - Créer article");
        $this->layout->set_theme("default_bo");
        //$this->layout->ajouter_js("bo/creer_article");
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
        $this->layout->set_titre("Back Office - Paramètres");
        $this->layout->set_theme("default_bo");
        //$this->layout->ajouter_js("bo/parametres");
        $this->layout->view("themes/bo/parametres/parametres");
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

    private function _validation_require($require){
        foreach($require as $item){
            if(empty($this->input->post($item))){
                $return[1] = "require";
                die(json_encode($return));
            }
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