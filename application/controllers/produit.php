<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Produit extends CI_Controller
{   
    private $id_categorie;

    public function __construct()
    {
        parent::__construct();

        $this->load->model('categorie_model', 'cat');
        $this->load->model('produit_model', 'prod');
        $this->load->library('layout');
        $this->output->enable_profiler(true);
    }
    
    public function index($id_categorie = null)
    {   
        $this->produit($id_categorie);
    }
    public function ajout(){
        $fields = array(
                  'id',
                  'libelle',
                  );
        $where = array(
                  'id_parent' => null,
                  );
        $categories = $this->cat->getLastCategories($fields);
        $select = [];
        foreach($categories as $categorie)
        {
            foreach($categorie as $key => $value)
            {
                if($key == 'id'){
                    $cle = $value;
                }else{
                    $select[$cle] = $value;
                }
            }
        }
        $data = array();
        $data['categories'] = $select;

        $this->load->library('form_validation');
 
        $this->form_validation->set_rules('libelle', '"Libellé"', 'trim|required|min_length[2]|max_length[100]|alpha_dash_space|encode_php_tags');
        $this->form_validation->set_rules('reference', '"Référence"', 'trim|required|min_length[2]|max_length[20]|alpha_dash_space|encode_php_tags');
        $this->form_validation->set_rules('marque', '"Marque"', 'trim|required|min_length[2]|max_length[50]|alpha_dash_space|encode_php_tags');

        if($this->form_validation->run())
        {
            $this->insertion();
        }
        else
        {
            $this->layout->view('produit/ajout',$data);
        }
    }
    public function produit($id_categorie = null){
        $this->id_categorie = intval($id_categorie);
        $data = $this->_createGrille();
        /*$this->layout->views('premiere_vue', $data)
                     ->views('seconde_vue')
                     ->view('derniere_vue');*/
        $this->layout->view('produit/grille',$data);
    }

    private function _createGrille(){
        $produits = $this->prod->getProduitsByCategorie($this->id_categorie);
        if($produits != null){
            $data['grille'] = null;
            foreach($produits as $produit){
                $data['grille'] .= '<ul>';
                foreach($produit as $key => $value){
                    if($key == 'libelle'){
                    }
                    $data['grille'] .= '<li><a href="'.base_url('produit/showProduit/'.$value).'">'.$value.'</a></li><li style="list-style-type:none"></li>';
                }
                $data['grille'] .= '</ul>';
            }
            return $data;
        }
    }

    public function insertion(){
        $libelle = $this->input->post('libelle');
        $reference = $this->input->post('reference');
        $marque = $this->input->post('marque');
        $categorie = $this->input->post('categories');
        $image = $this->input->post('image');
        $video = $this->input->post('video');
        /*INACHEVÉ*/
    }

    public function createPage()
    {
        $this->categorie_model->createCategorie('Niveau 1');
        //$this->categorie_model->getCategorie();
    }
}