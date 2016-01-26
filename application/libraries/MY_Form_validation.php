<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class MY_Form_validation extends CI_Form_validation {

    public function __construct()
    {
        parent::__construct();
    }

    // --------------------------------------------------------------------

    /**
     * Alpha-numeric with underscores and dashes and spaces
     *
     * @param   string
     * @return  bool
     */
    public  function alpha_dash_space($str)
    {
        return (bool) preg_match('/^[a-z0-9 _éàèçêîâôïöëäù-]+$/i', $str);
    }

}