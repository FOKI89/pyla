<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Categorie_model extends MY_Model
{
    private $id;
    private $libelle;
    private $id_parent;

    protected $table = 'categories';

    public function __construct(){
        $this->load->helper('url');
    }
    public function getCategorie($id_categorie){
        $categorie = $this->db->select('*')
                     ->from('categories')
                     ->where('id', $id_categorie)
                     ->limit(1)
                     ->get()
                     ->result();
        return $categorie;
    }

    /**
    * Retourne les champs passes en parametre de toutes les categories
    * @fields : array contenant la liste des champs souhaités
    * @where : array contenant la liste des conditions where
    * @Return type de retour + ce que retourne la fonction
    **/
    public function getCategories($fields = '*', $where = null){
        $categorie = $this->db->select($fields)
                     ->from('categories')
                     ->where($where)
                     ->get()
                     ->result();
        return $categorie;
    }

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

    /**
    * Retourne les champs passes en parametre de toutes les categories n'ayant pas de categorie parente
    * @Return type de retour + ce que retourne la fonction
    **/
    public function getLastCategories(){
        $all = $this->db->query('SELECT id, libelle FROM categories WHERE id NOT IN (SELECT id_parent FROM categories WHERE id_parent IS NOT NULL) AND id_parent IS NOT NULL ORDER BY rang');
        $categories = $all->result_array();
        return $categories;        
    }

    public function setCategorie($libelle, $id_parent = null)
    {  

    }


    public function getCommentaires($nb, $debut = 0)
    {
        if(!is_integer($nb) OR $nb < 1 OR !is_integer($debut) OR $debut < 0)
        {
            return false;
        }
        
        return $this->db->select('`id`, `pseudo`, `message`, DATE_FORMAT(`date`,\'%d/%m/%Y &agrave; %H:%i:%s\') AS \'date\'', false)
                ->from($this->table)
                ->order_by('id', 'desc')
                ->limit($nb, $debut)
                ->get()
                ->result();
    }
    public function add(Categorie $categorie)
    {
        $q = $this->_db->prepare('INSERT INTO personnages SET nom = :nom, forcePerso = :forcePerso, degats = :degats, niveau = :niveau, experience = :experience');

        $q->bindValue(':nom', $perso->nom());
        $q->bindValue(':forcePerso', $perso->forcePerso(), PDO::PARAM_INT);
        $q->bindValue(':degats', $perso->degats(), PDO::PARAM_INT);
        $q->bindValue(':niveau', $perso->niveau(), PDO::PARAM_INT);
        $q->bindValue(':experience', $perso->experience(), PDO::PARAM_INT);

        $q->execute();
    }

    public function get($id)
    {
        $id = (int) $id;

        $q = $this->_db->query('SELECT id, nom, forcePerso, degats, niveau, experience FROM personnages WHERE id = '.$id);
        $donnees = $q->fetch(PDO::FETCH_ASSOC);

        return new Personnage($donnees);
    }

    public function getList()
    {
        $persos = [];

        $q = $this->_db->query('SELECT id, nom, forcePerso, degats, niveau, experience FROM personnages ORDER BY nom');

        while ($donnees = $q->fetch(PDO::FETCH_ASSOC))
        {
          $persos[] = new Personnage($donnees);
        }

        return $persos;
    }

    public function setDb(PDO $db)
    {
        $this->_db = $db;
    }
}