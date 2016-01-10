<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Produit_model extends MY_Model
{
    private $id;
    private $reference;
    private $libelle;
    private $images;
    private $marque;
    private $video;
    private $statut;

    protected $table = 'produits';

    public function __construct(){

    }
    public function getProduit(){

    }

    public function getProduits(){
        
    }

    /*
    |==================================================================================
    | Méthode pour retourne tous les produits pour une categorie precise
    |   . id_categorie : int de l'id de la categorie demandee
    |   . return : tous les champs d'un ou plusieurs produits
    |==================================================================================
    */
    public function getProduitsByCategorie($id_categorie){
        if(!is_int($id_categorie) || $id_categorie == null){
            show_404();
            return false;
        }

        $all = $this->db->query('SELECT p.id, p.reference, p.libelle, p.image, p.marque, p.video, p.statut, p.date FROM categories_produits cp INNER JOIN produits p WHERE cp.id_produit = P.id AND cp.id_categorie = '.$id_categorie.' ORDER BY libelle');
        $produits = $all->result_array();
        return $produits;     
    }

    public function setCategorie($libelle, $id_parent = null)
    {  

    }
    
    public function createMenu($array){

    }
}