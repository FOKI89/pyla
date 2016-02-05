<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Page extends CI_Controller
{
    private $id;
    private $titre;
    private $contenu;

    public function __construct()
    {
        parent::__construct();
        $this->output->enable_profiler(false);
    }
    public function index()
    {
        $this->page();
    }

    public function page($id_page = null){
      $data = array();
      $page = $this->page_model->read("*", array("id" => $id_page));
      $data['titre'] = $page[0]->titre;
      $data['contenu'] = $page[0]->contenu;
      $this->layout->set_titre($data['titre']);
      $this->layout->view('themes/page', $data);
      return false;
    }

    public function contact(){
      $data = array();
      $mailAdmin = $this->site_model->read("*", array());
      $data['mail'] = $mailAdmin[0]->email;
      $this->layout->set_titre("Contact");
      $this->layout->view('themes/contact', $data);
      return false;
    }

    public function about(){
      $data = array();
      $mailAdmin = $this->site_model->read("*", array());
      $data['mail'] = $mailAdmin[0]->email;
      $this->layout->set_titre("Qui sommmes nous ?");
      $this->layout->view('themes/about', $data);
      return false;
    }

    public function my404(){
      $data = array();
      $this->layout->set_titre("404");
      $data['titre'] = "Oups, la page que vous essayer de joindre n'existe pas.";
      $data['contenu'] = ''; // View name
      $this->layout->view('themes/page', $data);

    }
    public function form_connexion(){
        $this->layout->set_titre("Connexion");
        $this->layout->ajouter_css("sweetalert/sweetalert");
        $this->layout->ajouter_js("vendors/jquery-1.11.3.min");
        $this->layout->ajouter_js("sweetalert/sweetalert.min");
        $this->layout->ajouter_js("sweetalert/sweetalert-dev");
        $this->layout->ajouter_js("accueil/form_connexion");
        $this->layout->view('themes/accueil/connection');
    }

    public function form_validation(){
        $return = array();
        $return[0] = false;
        $require = array("titre","contenu");

        $this->_validation_require($require);

        $this->pages->setTitre($this->input->post("titre"));
        $this->pages->setContenu($this->input->post("contenu"));

        $this->_insertion();

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

    private function _insertion(){
        $options_echappees = array();
        $options_non_echappees = array();
        $options_echappees["titre"] = $this->pages->getTitre();
        $options_echappees["contenu"] = $this->pages->getContenu();

        if(!$this->page_model->create($options_echappees, $options_non_echappees)){
            show_error("Insertion page","error_db");
            return false;
        }
    }
}
