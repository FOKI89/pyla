<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Page extends CI_Controller
{
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

    public function form_connexion(){
        $this->layout->set_titre("Connexion");
        $this->layout->ajouter_css("sweetalert/sweetalert");
        $this->layout->ajouter_js("vendors/jquery-1.11.3.min");
        $this->layout->ajouter_js("sweetalert/sweetalert.min");
        $this->layout->ajouter_js("sweetalert/sweetalert-dev");
        $this->layout->ajouter_js("accueil/form_connexion");
        $this->layout->view('themes/accueil/connection');
    }

    public function createPage()
    {
        $this->categorie_model->createCategorie('Niveau 1');
    }

}
