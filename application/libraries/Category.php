<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Category
{
    private $id;
    private $libelle;
    private $id_parent;
    protected $table = 'categories';

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set libelle
     *
     * @param string $libelle
     * @return Categorie
     */
    public function setLibelle($libelle)
    {
        $this->libelle = $libelle;
        return $this;
    }

    /**
     * Get libelle
     *
     * @return string 
     */
    public function getLibelle()
    {
        return $this->libelle;
    }

    /**
     * Set id_parent
     *
     * @param integer $idParent
     * @return Categorie
     */
    public function setIdParent($idParent)
    {
        $this->id_parent = $idParent;
        return $this;
    }

    /**
     * Get id_parent
     *
     * @return integer 
     */
    public function getIdParent()
    {
        return $this->id_parent;
    }
}