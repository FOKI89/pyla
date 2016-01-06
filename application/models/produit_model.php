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

    public function getProduitsByCategorie($id_categorie){
        if(!is_int($id_categorie) || $id_categorie == null){
            show_404();
            return false;
        }

        $all = $this->db->query('SELECT p.id, p.reference, p.libelle, p.images, p.marque, p.video, p.statut FROM categories_produits cp INNER JOIN produits p WHERE cp.id_produit = P.id AND cp.id_categorie = '.$id_categorie.' ORDER BY libelle');
        $produits = $all->result_array();
        return $produits;     
    }

    public function setCategorie($libelle, $id_parent = null)
    {  

    }
    
    public function createMenu($array){

    }

    public function get_commentaires($nb, $debut = 0)
    {
        if(!is_int($nb) OR $nb < 1 OR !is_int($debut) OR $debut < 0)
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
    /*public function add(Produit $produit)
    {
        $q = $this->_db->prepare('INSERT INTO personnages SET nom = :nom, forcePerso = :forcePerso, degats = :degats, niveau = :niveau, experience = :experience');

        $q->bindValue(':nom', $perso->nom());
        $q->bindValue(':forcePerso', $perso->forcePerso(), PDO::PARAM_INT);
        $q->bindValue(':degats', $perso->degats(), PDO::PARAM_INT);
        $q->bindValue(':niveau', $perso->niveau(), PDO::PARAM_INT);
        $q->bindValue(':experience', $perso->experience(), PDO::PARAM_INT);

        $q->execute();
    }

    public function delete(Personnage $perso)
    {
    $this->_db->exec('DELETE FROM personnages WHERE id = '.$perso->id());
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
    }*/

    public function setDb(PDO $db)
    {
        $this->_db = $db;
    }
}