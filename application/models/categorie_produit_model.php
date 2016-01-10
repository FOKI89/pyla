<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Categorie_Produit_model extends MY_Model
{
    private $id;
    private $libelle;
    private $id_parent;

    protected $table = 'categories_produits';

    public function __construct(){
        
    }

    /*
    |========================================================================================
    | Méthode pour retourne tous les id_produit pour un id_categorie precis
    |   . id_categorie : int de l'id de la categorie demandee
    |   . return : l'id d'un ou plusieurs produits
    |========================================================================================
    */
    public function getCategorieProduits($id_categorie){
        $produits = $this->db->select('id_produit')
                     ->from('categories_produits')
                     ->where($id_categorie)
                     ->get()
                     ->result();
        return $produits;
    }

    /*
    |========================================================================================
    | Méthode pour retourne la liste de toutes les correspondances {id_categorie,id_produit}
    |   . return : l'ensemble des tuples {id_categorie,id_produit}
    |========================================================================================
    */
    public function getCategoriesProduits(){
        $cats_prods = $this->db->select('*')
                     ->from('categories_produits')
                     ->get()
                     ->result();
        return $cats_prods;
    }
}