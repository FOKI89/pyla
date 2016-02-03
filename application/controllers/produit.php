<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Produit extends CI_Controller
{   
    private $id;
    private $reference;
    private $libelle;
    private $marque;
    private $description;
    private $image;
    private $video;
    private $statut;
    private $date;

    public function __construct()
    {
        parent::__construct();

        $this->load->model("categorie_model", "cat");
        $this->load->model("produit_model", "prod");
        $this->load->model("categorie_produit_model", "cat_prod");
        $this->output->enable_profiler(false);
    }
    
    public function index($id_categorie = null)
    {
        $this->produit($id_categorie);
    }

    public function liste_produits($id_categorie = null){
        $this->id_categorie = intval($id_categorie);
        $id_parent = NULL;
        $i = 0;
        $breadcrumb = array();
        $id_categorie = $this->id_categorie;
        do{
            if(!$query = $this->db->query('SELECT id, libelle, id_parent FROM categories WHERE id = '.$id_categorie)){
                show_error("Select produits by categorie","error_db");
                return false;
            }
            $categorie = new StdClass();
            $categorie->type = "categorie";
            $categorie->id = $query->result()[0]->id;
            $categorie->libelle = $query->result()[0]->libelle;
            $breadcrumb[$i] = $categorie;
            $id_parent = $query->result()[0]->id_parent;
            $id_categorie = $id_parent;
            $i++;
        }while(!empty($id_parent));

        $breadcrumb = array_reverse($breadcrumb);
        if(!$query = $this->db->query('SELECT p.id, p.reference, p.libelle, p.marque, p.description, p.video, p.statut FROM categories_produits cp INNER JOIN produits p ON p.id = cp.id_produit WHERE cp.id_categorie = '.$this->id_categorie)){
            show_error("Select produits by categorie","error_db");
            return false;
        }

        $data['breadcrumb'] = $breadcrumb;
        $data["produits"] = $query->result();

        $id = $categorie->id;
        foreach($data['produits'] as $produit){
            $images = preg_grep('/^([^.])/', scandir($this->config->item('url_base').'/assets/img/produit/'.$produit->id)); 
            $i = 0;
            $tab = array();
            foreach($images as $image){
                $tab[$i] = $image;
                $i++;
            }
            $produit->images = $tab;
        }

        $this->layout->set_titre($breadcrumb[--$i]->libelle);
        $this->layout->ajouter_css("sweetalert/sweetalert");
        $this->layout->ajouter_js("sweetalert/sweetalert.min");
        $this->layout->ajouter_js("sweetalert/sweetalert-dev");
        $this->layout->ajouter_js("utilisateur/form_creation");
        $this->layout->view('themes/liste_produits',$data);
    }

    private function _createGrille(){
        $id_categorie = array("id_categorie" => $this->id_categorie);
        $categorie_produits = $this->cat_prod->getCategorieProduits($id_categorie);
        $produits = array();
        foreach($categorie_produits as $cat_prod){
            foreach($cat_prod as $key => $value){
                if($key == "id_produit"){
                    $id_produit = array("id" => $value);
                    $produit = $this->prod->read("",$id_produit);
                    $produits[] = $produit;
                }
            }
        }
        if($produits != null){
            $data["grille"] = null;
            foreach($produits as $produit){
                $data["grille"] .= "<ul>";
                foreach($produit as $item){
                    foreach($item as $key => $value){
                        if($key == "libelle"){
                        }
                        $data['grille'] .= '<li><a href="'.base_url('produit/showProduit/'.$value).'">'.$value.'</a></li><li style="list-style-type:none"></li>';
                    }
                    $data["grille"] .= "</ul>";
                }
                
            }
        }
        return $data;
    }

    public function detail_produit($id_produit = null){
        $this->id = intval($id_produit);
        $produit = $this->prod->read("*",array("id" => $this->id));

        $categorie = $this->cat->getCategoriesByProduit($id_produit);
        $categorie[0]['type'] = "categorie";
        $produit[0]->type = "produit";

        $images = preg_grep('/^([^.])/', scandir($this->config->item('url_base').'/assets/img/produit/'.$produit[0]->id)); 
        $i = 0;
        $tab = array();
        foreach($images as $image){
            $tab[$i] = $image;
            $i++;
        }
        $produit[0]->image = $tab;
        $breadcrumb = array();
        $breadcrumb[] = $categorie[0];
        $breadcrumb[] = $produit[0];
        $data['produit'] = $produit[0];
        $data['breadcrumb'] = $breadcrumb;
        $this->layout->set_titre($produit[0]->libelle);
        $this->layout->view("themes/produit",$data);
    }

    public function form_creation(){
        $fields = array(
                  "id",
                  "libelle",
                  );
        $where = array(
                  "id_parent" => null,
                  );
        $categories = $this->cat->getLastCategories($fields);
        $select = [];
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
        $this->layout->set_titre("Nouveau Produit");
        $this->layout->ajouter_css("sweetalert/sweetalert");
        $this->layout->ajouter_js("vendors/jquery-1.11.3.min");
        $this->layout->ajouter_js("sweetalert/sweetalert.min");
        $this->layout->ajouter_js("sweetalert/sweetalert-dev");
        $this->layout->ajouter_js("produit/form_creation");
        $this->layout->ajouter_js("produit/form_creation_critere");
        $this->layout->view("produit/form_creation",$data);
    }

    public function form_validation(){
        $return = array();
        $return[0] = false;
        $require = array("libelle","marque","image");
        $format = array("reference","libelle","marque","video");

        if(empty($_FILES["image"]["name"])){
            $return[1] = "require";
            die(json_encode($return));
        }
        
        $this->_validation_require($require);
        $this->_validation_format($format);

        $this->product->setReference($this->input->post("reference"));
        $this->product->setLibelle($this->input->post("libelle"));
        $this->product->setMarque($this->input->post("marque"));
        $this->product->setDescription($this->input->post("description"));
        if(!empty($this->input->post("video"))){
            $this->product->setVideo($this->input->post("video"));
        }
        $this->product->setStatut(1);

        $this->_insertion();

        if (!empty($_FILES["image"]["name"]))
        {
            $filename = "./assets/img/produit/".$this->product->getId();
            if (!file_exists($filename)) {
                mkdir($filename, 0777, true);
            }
            $config["upload_path"]   = $filename;
            $config["allowed_types"] = "gif|jpg|png|jpeg";
            $config["max_size"]      = "2048";
            $config["encrypt_name"]  = TRUE;  

            $this->upload->initialize($config);

            if ($this->upload->do_upload("image"))
            {
                $img = $this->upload->data();

                $config["image_library"]  = "gd2";
                $config["source_image"]   = $img["full_path"];
                $config["maintain_ratio"] = FALSE;
                $config["width"]          = 400;
                $config["height"]         = 400;
                $config["overwrite"]      = TRUE;

                $this->image_lib->initialize($config);
                if (!$this->image_lib->resize())
                {
                    echo $this->image_lib->display_errors();
                }

                $this->image = $img["file_name"];
            }
            else
            {
                $return[1] = "no upload";
                die(json_encode($return));
                echo $this->upload->display_errors();
            }  
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

    private function _validation_format($format){
        foreach($format as $item){
            if(($item == "libelle" || $item == "reference" || $item == "marque") && !empty($this->input->post($item)) && filter_var($this->input->post($item), FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^((.){2,})$/"))) === false){
                $return[1] = "Les champs libellé, référence et marque doivent se composer d'au moins 3 caractères";
                die(json_encode($return));
            }elseif(!empty($this->input->post('video')) && filter_var($item, FILTER_VALIDATE_URL) === false){
                $return[1] = "L'url de la vidéo n'est pas correcte";
                die(json_encode($return));
            }
        }
    }

    private function _insertion(){
        $options_echappees = array();
        $options_non_echappees = array();
        $options_echappees["reference"] = $this->product->getReference();
        $options_echappees["libelle"] = $this->product->getLibelle();
        $options_echappees["marque"] = $this->product->getMarque();
        $options_echappees["description"] = $this->product->getDescription();
        $options_echappees["video"] = $this->product->getVideo() != NULL ? $this->product->getVideo() : NULL;
        $options_non_echappees = array();
        $options_non_echappees["statut"] = $this->product->getStatut();
        $options_non_echappees["date"] = "NOW()";

        if(!$this->prod->create($options_echappees, $options_non_echappees)){
            show_error("Insertion produit","error_db");
            return false;
        }

        unset($options_echappees);
        unset($options_non_echappees);
        $options_echappees = array();
        $options_non_echappees = array();
        $this->product->setId((int) $this->db->insert_id());
        $options_non_echappees["id_categorie"] = (int) $this->input->post("categories");
        $options_non_echappees["id_produit"] = $this->product->getId();

        if(!$this->cat_prod->create($options_echappees, $options_non_echappees)){
            show_error("Insertion categorie_produit","error_db");
        }
    }

    public function form_modification_bo(){
        $return = array();
        $return[0] = false;
        $require = array("libelle");
        $format = array("libelle","reference","marque","statut");
        $post = (array) $this->input->post();
        $post = $this->suppr_accents($post,'',true);

        $this->_validation_require_bo($require);
        $this->_validation_format_bo($format,$post);

        $id = $post['id'];
        unset($post['id']);
        unset($post['action']);
        unset($post[0]);
        
        if(!$this->prod->update(array("id" => $id), $post)){
            show_error("Update articles","error_db");
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
            if($item == "libelle" && !empty($post[$item])  && filter_var($post[$item], FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^[0-9a-zA-Z\p{Cyrillic}\p{Han} .-]{3,50}$/"))) === false){
                $return[1] = "Libellé";
                die(json_encode($return));
            }
            elseif($item == "reference" && !empty($post[$item])  && filter_var($post[$item], FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^[0-9a-zA-Z\p{Cyrillic}\p{Han} .-]{3,50}$/"))) === false){
                $return[1] = "Référence";
                die(json_encode($return));
            }
            elseif($item == "marque" && !empty($post[$item])  && filter_var($post[$item], FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^[0-9a-zA-Z\p{Cyrillic}\p{Han} .-]{3,50}$/"))) === false){
                $return[1] = "Marque";
                die(json_encode($return));
            }
            elseif($item == "statut" && !empty($post[$item])  && filter_var($post[$item], FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^(0|1){1}$/"))) === false){
                $return[1] = "Statut";
                die(json_encode($return));
            }
        }
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