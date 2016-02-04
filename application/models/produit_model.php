<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Produit_model extends MY_Model
{
    private $id;
    private $reference;
    private $libelle;
    private $images;
    private $marque;
    private $description;
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
    public function getProduitsByCategorie($id_categorie, $limit = NULL){
        if(!is_int($id_categorie) || $id_categorie == null){
            show_404();
            return false;
        }
        if(empty($limit)){
            $limit = "LIMIT ".$limit;
        }else{
            $limit = "";
        }

        $all = $this->db->query('SELECT p.id, p.reference, p.libelle, p.image, p.marque, p.description, p.video, p.statut, p.date FROM categories_produits cp INNER JOIN produits p WHERE cp.id_produit = p.id AND cp.id_categorie = '.$id_categorie.' AND p.statut = 1 ORDER BY libelle '.$limit);
        $produits = $all->result_array(); 
        return $produits;     
    }

    /*
    |==================================================================================
    | Méthode pour retourne tous les produits top pour une categorie precise
    |   . id_categorie : int de l'id de la categorie demandee
    |   . return : tous les champs d'un ou plusieurs produits
    |==================================================================================
    */
    public function getTopProduitsByCategorie($id_categorie){
        if(!is_int($id_categorie) || $id_categorie == null){
            show_404();
            return false;
        }

        $all = $this->db->query('SELECT p.id, p.reference, p.libelle, p.marque, p.description FROM categories_produits cp INNER JOIN produits p ON cp.id_produit = p.id INNER JOIN evaluations e ON p.id = e.id_produit WHERE cp.id_produit = p.id AND cp.id_categorie = '.$id_categorie.' AND cp.id_categorie = '.$id_categorie.' AND P.statut = 1 ORDER BY e.note LIMIT 3');
        if($all->num_rows() > 0){
           $produits = $all->result_array();
        }else{
            $produits = $this->getProduitsByCategorie($id_categorie, 4);
        }
        return $produits;  
    }

    /*
    |==================================================================================
    | Méthode pour retourne les trois produits les mieux notés
    |   . return : tous les champs de trois produits
    |==================================================================================
    */
    public function getTopProduits(){
        $query = $this->db->query('SELECT p.id, p.libelle FROM produits p INNER JOIN evaluations e ON e.id_produit = p.id WHERE p.statut = 1 ORDER BY note DESC LIMIT 3');
        $produits = $query->result();
        return $produits;  
    }
}