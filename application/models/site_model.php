<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Site_model extends MY_Model
{
    private $id;
    private $nom;
    private $adresse;
    private $cp;
    private $ville;
    private $id_pays;
    private $email;
    private $telephone;
    private $mdp;
    private $date_creation;

    protected $table = 'site';

    public function __construct(){

    }
}