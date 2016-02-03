<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Produit_utilisateur_model extends MY_Model
{
    private $id;
    private $id_produit;
    private $id_utilisateur;
    private $prix;
    private $quantite;

    protected $table = 'produits_utilisateurs';

    public function __construct(){

    }

    /*
    |==================================================================================
    | Méthode pour retourne tous les produits pour une categorie precise
    |   . id_categorie : int de l'id de la categorie demandee
    |   . return : tous les champs d'un ou plusieurs produits
    |==================================================================================
    */
    public function getProduitsUtilisateurs($id_produit, $limit = NULL){
       
        return $data;     
    }
}