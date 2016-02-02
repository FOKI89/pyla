<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Categorie_model extends MY_Model
{
    private $id;
    private $libelle;
    private $id_parent;
    protected $table = 'categories';
    public function __construct(){
    }
    /*
    |==================================================================================
    | Méthode pour retourne tous les champs d'une categorie precise
    |   . id_categorie : int de l'id de la categorie demandee
    |   . return : tous les champs d'une categorie
    |==================================================================================
    */
    public function getCategorie($id_categorie){
        $categorie = $this->db->select('*')
                     ->from('categories')
                     ->where('id', $id_categorie)
                     ->limit(1)
                     ->get()
                     ->result();
        return $categorie;
    }
    /*
    |==================================================================================
    | Méthode pour retourne les champs passes en parametre de toutes les categories
    |   . fields : array contenant la liste des champs souhaités
    |   . where : array contenant la liste des conditions where
    |   . return : les champs demandes d'une ou plusieurs categories
    |==================================================================================
    */
    public function getCategories($fields = '*', $where = null){
        if($where == null)$where = 1;
        $categorie = $this->db->select($fields)
                     ->from('categories')
                     ->where($where)
                     ->get()
                     ->result();
        return $categorie;
    }
    /*
    |==================================================================================
    | Méthode pour retourne tous les champs des categories selon la categorie parente
    |   . id_parent : int de l'id de la categorie parente
    |   . return : tous les champs d'une ou plusieurs categories
    |==================================================================================
    */
    public function getCategoriesByParent($id_parent){
        if(!is_int($id_parent) && $id_parent != null){
            show_404();
            return false;
        }
        if($id_parent == null){
            $query_param = 'IS NULL';
        }else{
            $query_param = '= '.$id_parent;
        }
        $all = $this->db->query('SELECT * FROM categories WHERE id_parent '.$query_param.' ORDER BY rang');
        $categories = $all->result_array();
        return $categories;
    }
    /*
    |==================================================================================
    | Méthode pour retourne tous les champs des categories sans categorie parente
    |   . return : id et libelle d'une ou plusieurs categories
    |==================================================================================
    */
    public function getLastCategories(){
        $all = $this->db->query('SELECT id, libelle FROM categories WHERE id NOT IN (SELECT id_parent FROM categories WHERE id_parent IS NOT NULL) AND id_parent IS NOT NULL ORDER BY rang');
        $categories = $all->result_array();
        return $categories;
    }
}