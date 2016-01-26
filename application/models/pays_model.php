<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Pays_model extends MY_Model
{
    private $id;
    private $code;
    private $libelle;
    private $indicatif;

    protected $table = 'pays';

    public function __construct(){

    }
}