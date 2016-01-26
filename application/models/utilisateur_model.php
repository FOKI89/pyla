<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Utilisateur_model extends MY_Model
{
    private $id;
    private $prenom;
    private $nom;
    private $adresse;
    private $telephone;
    private $cp;
    private $ville;
    private $id_pays;
    private $email;
    private $mdp;
    private $date_naissance;
    private $droit;
    private $date_entree;

    protected $table = 'utilisateurs';

    public function __construct(){

    }
}