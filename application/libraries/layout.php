<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Layout
{
	private $CI;
	private $var = array();
	private $theme = 'default';
	
/*
|===============================================================================
| Constructeur
|===============================================================================
*/
	
	public function __construct()
	{	
		$this->CI =& get_instance();
		$this->CI->load->model("site_model");
		$this->CI->load->model("pays_model", "pays");
		$this->var['output'] = '';
		
		//	Le titre est composé du nom de la méthode et du nom du contrôleur
		//	La fonction ucfirst permet d'ajouter une majuscule
		$this->var['titre'] = ucfirst($this->CI->router->fetch_method()) . ' - ' . ucfirst($this->CI->router->fetch_class());
		
		//	Nous initialisons la variable $charset avec la même valeur que
		//	la clé de configuration initialisée dans le fichier config.php
		$this->var['charset'] = $this->CI->config->item('charset');

		// Nous initialisons les variables css et js pour gérer l'inclusion de fichiers css et js
		$this->var['css'] = array();
		$this->var['js'] = array();
		$this->var['nav'] = NULL;
		$this->ajouter_js('accueil/footer');
		$this->_setSession();
	}

	public function set_theme($theme)
	{
	    if(is_string($theme) AND !empty($theme) AND file_exists('./application/views/themes/' . $theme . '.php'))
	    {
	        $this->theme = $theme;
	        return true;
	    }
	    return false;
	}
	
	/*
	|===============================================================================
	| Méthodes pour charger les vues
	|	. view
	|	. views
	|===============================================================================
	*/
	
	public function view($name, $data = array())
	{
		$this->var['output'] .= $this->CI->load->view($name, $data, true);
    	$this->CI->load->view('themes/'.$this->theme, $this->var);
	}
	
	public function views($name, $data = array())
	{
		$this->var['output'] .= $this->CI->load->view($name, $data, true);
		return $this;
	}

	/*
	|===============================================================================
	| Méthodes pour modifier les variables envoyées au layout
	|   . set_titre
	|   . set_charset
	|===============================================================================
	*/
	public function set_titre($titre)
	{
	    if(is_string($titre) AND !empty($titre))
	    {
	        $this->var['titre'] = $titre;
	        return true;
	    }
	    return false;
	}

	public function set_charset($charset)
	{
	    if(is_string($charset) AND !empty($charset))
	    {
	        $this->var['charset'] = $charset;
	        return true;
	    }
	    return false;
	}

	/*
	|===============================================================================
	| Méthodes pour ajouter des feuilles de CSS et de JavaScript
	|	. ajouter_css
	|	. ajouter_js
	|===============================================================================
	*/
	public function ajouter_css($nom)
	{
		if(is_string($nom) AND !empty($nom) AND file_exists('./assets/css/' . $nom . '.css'))
		{
			$this->var['css'][] = css_url($nom);
			return true;
		}
		elseif(is_string($nom)){
			$this->var['css'][] = $nom;
			return true;
		}
		return false;
	}

	public function ajouter_js($nom)
	{
		if(is_string($nom) AND !empty($nom) AND file_exists('./assets/js/' . $nom . '.js'))
		{
			$this->var['js'][] = js_url($nom);
			return true;
		}
		elseif(is_string($nom)){
			$this->var['js'][] = $nom;
			return true;
		}
		return false;
	}

	private function _setSession()
	{
		$site_tuples = $this->CI->site_model->read("*");
		$id_pays = $site_tuples[0]->id_pays;
		$pays_tuples = $this->CI->pays->read("*", array("id" => $id_pays));
		$pays = $pays_tuples[0]->libelle;

        foreach($site_tuples as $site_tuple)
        {
            $_SESSION['site_nom'] = $site_tuple->nom;
            $_SESSION['site_adresse'] = $site_tuple->adresse;
            $_SESSION['site_ville'] = $site_tuple->ville;
            $_SESSION['site_cp'] = $site_tuple->cp;
            $_SESSION['site_pays'] = $pays;
            $_SESSION['site_email'] = $site_tuple->email;
            $_SESSION['site_telephone'] = $site_tuple->telephone;
            $_SESSION['site_date_creation'] = $site_tuple->date_creation;
        }

        return true;
	}
}