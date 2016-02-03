<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Accueil extends CI_Controller
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
		$this->accueil();
	}
	public function accueil(){
		$data = array();
		$data['categories'] = $this->top_categories();
		$data['produits'] = $this->top_produits();
		$this->layout->set_titre("Pila");
		$this->layout->views('themes/index')
		->views('themes/partials/home_items',$data)
		->view('themes/partials/top_products',$data);
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
	/*Fonction pour créer des jeux de tests (ici produits) dans la BDD*/
	public function insertion(){
		$data = array();
		$data[0]['reference'] = "IPR1";
		$data[0]['libelle'] = "AK-CC7122EP01";
		$data[0]['images'] = "";
		$data[0]['marque'] = "Akasa";
		$data[0]['video'] = "";
		$data[0]['statut'] = "1";
		$data[1]['reference'] = "IPR2";
		$data[1]['libelle'] = "Alpine M1";
		$data[1]['images'] = "";
		$data[1]['marque'] = "Arctic";
		$data[1]['video'] = "";
		$data[1]['statut'] = "1";
		$data[2]['reference'] = "IPR3";
		$data[2]['libelle'] = "Seidon 120V (Ver. 2.0)";
		$data[2]['images'] = "";
		$data[2]['marque'] = "Cooler Master LTD";
		$data[2]['video'] = "";
		$data[2]['statut'] = "1";
		$data[3]['reference'] = "IPR4";
		$data[3]['libelle'] = "Macho Zero";
		$data[3]['images'] = "";
		$data[3]['marque'] = "Thermalright";
		$data[3]['video'] = "";
		$data[3]['statut'] = "1";
		foreach($data as $key => $value){
			$this->prod->create($value);
		}
	}
	public function createPage()
	{
		$this->categorie_model->createCategorie('Niveau 1');
	}
	public function top_categories(){
		$i = 0;
		$data = array();
		$categories = $this->cat->read("*",array("top" => 1));
		foreach($categories as $categorie)
		{
			$j = 0;
			$data[$i]['id'] = $categorie->id;
			$data[$i]['libelle'] = $categorie->libelle;
			$data[$i]['description'] = $categorie->description;
			$data[$i]['produits'] = $this->prod->getTopProduitsByCategorie((int)$categorie->id);
			foreach($data[$i]['produits'] as $produit){
				$images = preg_grep('/^([^.])/', scandir($this->config->item('url_base').'/assets/img/produit/'.$produit["id"]));
				$data[$i]['produits'][$j]['img'] = reset($images);
				$j++;
			}
			$i++;
		}
		return $data;
	}
	public function top_produits(){
		$data = array();
		$produits = $this->prod->getTopProduits();
		$i = 0;
		foreach($produits as $produit){
			$images = preg_grep('/^([^.])/', scandir($this->config->item('url_base').'/assets/img/produit/'.$produit->id));
			$data[$i]['id'] = $produit->id;
			$data[$i]['libelle'] = $produit->libelle;
			$data[$i]['img'] = reset($images);
			$i++;
		}
		return $data;
	}
}
