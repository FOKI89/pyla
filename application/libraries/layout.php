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
		$this->CI->load->model("categorie_model", "cat");
		$this->CI->load->model("site_model");
		$this->CI->load->model("pays_model", "pays");
		$this->CI->load->model('page_model');
		$data = array();
		$this->var['menu'] = $this->_createMenu();
		$this->var['pages_footer'] = $this->_getPages();
		$this->var['output'] = '';
		$this->var['titre'] = ucfirst($this->CI->router->fetch_method()) . ' - ' . ucfirst($this->CI->router->fetch_class());
		$this->var['charset'] = $this->CI->config->item('charset');
		$this->var['css'] = array();
		$this->var['js'] = array();
		$this->var['breadcrumb'] = array();
		$this->var['nav'] = NULL;
		$this->ajouter_js('accueil/footer');
		$this->_setSession();
	}

	private function _createMenu($id_parent = null){
      $menu = array();
      $categories = $this->CI->cat->getCategoriesByParent($id_parent);
      $i = 0;
      foreach($categories as $categorie)
      {
		$j = 0;
        $menu[$i] = $categorie;
        $scategories = $this->CI->cat->getCategoriesByParent((int)$categorie['id']);
          foreach($scategories as $scategorie)
          {
			$k = 0;
            $menu[$i] = (array)$menu[$i];
            $menu[$i]['submenu'][$j] = $scategorie;
            $sscategories = $this->CI->cat->getCategoriesByParent((int)$scategorie['id']);
              foreach($sscategories as $sscategorie)
              {
                $menu[$i]['submenu'][$j] = (array)$menu[$i]['submenu'][$j];
                $menu[$i]['submenu'][$j][$k] = $sscategorie;
                $k++;
              }
          $j++;
          }
        $i++;
        }
      return $menu;
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



	public function set_breadcrumb($breadcrumb)
	{
	    if(is_string($breadcrumb) AND !empty($breadcrumb))
	    {
	        $this->var['breadcrumb'] = $breadcrumb;
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
	/*
	|===============================================================================
	| Méthodes pour ajouter liens des pages dans le footer
	|	. ajouter_page_link
	|===============================================================================
	*/

	private function _getPages(){
      $pages = array();
      $pages = $this->CI->page_model->getPages();
      return $pages;
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
