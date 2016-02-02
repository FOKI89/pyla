<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Page_model extends MY_Model
{
    private $id;
    private $titre;
    private $contenu;

    protected $table = 'pages';

    public function __construct(){

    }

    public function getPages()
    {
      $pages = $this->page_model->read("*", array());
      return $pages;
    }
}
