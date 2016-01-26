<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Token_model extends MY_Model
{
    private $id;
    private $token;
    private $date;

    protected $table = 'token';

    public function __construct(){

    }
}