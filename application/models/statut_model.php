<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Statut_model extends MY_Model
{
    private $id;
    private $libelle;
    private $description;

    protected $table = 'statut';

    public function __construct(){

    }
}