<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Produit extends CI_Controller
{   
    private $id;
    private $reference;
    private $libelle;
    private $marque;
    private $image;
    private $video;
    private $statut;
    private $date;

    public function __construct()
    {
        parent::__construct();

        $this->load->model('categorie_model', 'cat');
        $this->load->model('produit_model', 'prod');
        $this->load->model('categorie_produit_model', 'cat_prod');
        $this->output->enable_profiler(true);
    }
    
    public function index($id_categorie = null)
    {
        $this->produit($id_categorie);
    }

    public function liste_produit($id_categorie = null){
        $this->id_categorie = intval($id_categorie);
        $data = $this->_createGrille();
        /*$this->layout->views('premiere_vue', $data)
                     ->views('seconde_vue')
                     ->view('derniere_vue');*/
        $this->layout->view('produit/grille',$data);
    }

    private function _createGrille(){
        $id_categorie = array('id_categorie' => $this->id_categorie);
        $categorie_produits = $this->cat_prod->getCategorieProduits($id_categorie);
        $produits = array();
        foreach($categorie_produits as $cat_prod){
            foreach($cat_prod as $key => $value){
                if($key == 'id_produit'){
                    $id_produit = array('id' => $value);
                    $produit = $this->prod->read('',$id_produit);
                    $produits[] = $produit;
                }
            }
        }
        if($produits != null){
            $data['grille'] = null;
            foreach($produits as $produit){
                $data['grille'] .= '<ul>';
                foreach($produit as $item){
                    foreach($item as $key => $value){
                        if($key == 'libelle'){
                        }
                        $data['grille'] .= '<li><a href="'.base_url('produit/showProduit/'.$value).'">'.$value.'</a></li><li style="list-style-type:none"></li>';
                    }
                    $data['grille'] .= '</ul>';
                }
                
            }
        }
        return $data;
    }

     public function form_create(){
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

        $this->form_validation->set_rules('libelle', '"Libellé"', 'trim|required|min_length[2]|max_length[100]|alpha_dash_space|encode_php_tags');
        $this->form_validation->set_rules('reference', '"Référence"', 'trim|required|min_length[2]|max_length[20]|alpha_dash_space|encode_php_tags');
        $this->form_validation->set_rules('marque', '"Marque"', 'trim|required|min_length[2]|max_length[50]|alpha_dash_space|encode_php_tags');
        if (empty($_FILES['image']['name']))
        {
            $this->form_validation->set_rules('image', 'Image', 'required');
        }
        if (empty($_FILES['video']['name']))
        {
            $this->form_validation->set_rules('video', 'Video');
        }
        if($this->form_validation->run())
        {
            $this->product->setReference($this->input->post('reference'));
            $this->product->setLibelle($this->input->post('libelle'));
            $this->product->setMarque($this->input->post('marque'));
            if(!empty($this->input->post('video'))){
                echo 'IN';
                $this->product->setVideo($this->input->post('video'));
            }
            $this->product->setStatut(1);

            $this->_insertion();

            if (!empty($_FILES['image']['name']))
            {
                $filename = './assets/images/produit/'.$this->product->getId();
                if (!file_exists($filename)) {
                    mkdir($filename, 0777, true);
                }
                $config['upload_path']   = $filename;
                $config['allowed_types'] = 'gif|jpg|png|jpeg';
                $config['max_size']      = '2048';
                $config['encrypt_name']  = TRUE;  

                $this->upload->initialize($config);

                if ($this->upload->do_upload('image'))
                {
                    $img = $this->upload->data();

                    $config['image_library']  = 'gd2';
                    $config['source_image']   = $img['full_path'];
                    $config['maintain_ratio'] = TRUE;
                    $config['width']          = 400;
                    $config['height']         = 250;
                    $config['overwrite']      = TRUE;

                    $this->image_lib->initialize($config);
                    if (!$this->image_lib->resize())
                    {
                        echo $this->image_lib->display_errors();
                    }

                    $this->image = $img['file_name'];
                }
                else
                {
                    echo $this->upload->display_errors();
                }  
            }
        }
        else
        {
            $this->layout->set_titre('Nouveau Produit');
            $this->layout->ajouter_js('new_image');
            $this->layout->view('produit/form_create',$data);
        }  
    }

    private function _insertion(){
        $options_echappees = array();
        $options_non_echappees = array();
        $options_echappees['reference'] = $this->product->getReference();
        $options_echappees['libelle'] = $this->product->getLibelle();
        $options_echappees['marque'] = $this->product->getMarque();
        $options_echappees['video'] = $this->product->getVideo() != NULL ? $this->product->getVideo() : NULL;
        $options_non_echappees = array();
        $options_non_echappees['statut'] = $this->product->getStatut();
        $options_non_echappees['date'] = 'NOW()';

        $resultat = $this->prod->create($options_echappees, $options_non_echappees);

        unset($options_echappees);
        unset($options_non_echappees);
        $options_echappees = array();
        $options_non_echappees = array();
        $this->product->setId((int) $this->db->insert_id());
        $options_non_echappees['id_categorie'] = (int) $this->input->post('categories');
        $options_non_echappees['id_produit'] = $this->product->getId();

        $resultat = $this->cat_prod->create($options_echappees, $options_non_echappees);
    }

    public function createPage()
    {
        $this->categorie_model->createCategorie('Niveau 1');
    }
}