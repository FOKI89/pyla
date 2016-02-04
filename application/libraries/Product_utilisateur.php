<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Product_User
{
    private $id;
    private $id_produit;
    private $id_utilisateur;
    private $prix;
    private $quantite;
    protected $table = 'produits_utilisateurs';

    /**
     * Set id
     *
     * @param int $id
     * @return Produit
     */
    public function setId($id)
    {
        $this->id = $id;
        return $this;
    }

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
     * Set id_produit
     *
     * @param integer $id_produit
     * @return Produit_Utilisateur
     */
    public function setIdProduit($id_produit)
    {
        $this->id_produit = $id_produit;
        return $this;
    }

    /**
     * Get id_produit
     *
     * @return string 
     */
    public function getIdProduit()
    {
        return $this->id_produit;
    }

    /**
     * Set id_utilisateur
     *
     * @param integer $id_utilisateur
     * @return Produit_Utilisateur
     */
    public function setIdUtilisateur($id_utilisateur)
    {
        $this->id_utilisateur = $id_utilisateur;
        return $this;
    }

    /**
     * Get id_utilisateur
     *
     * @return integer 
     */
    public function getIdUtilisateur()
    {
        return $this->id_utilisateur;
    }

    /**
     * Set prix
     *
     * @param decimal $prix
     * @return Produit_Utilisateur
     */
    public function setPrix($prix)
    {
        $this->prix = $prix;
        return $this;
    }

    /**
     * Get prix
     *
     * @return decimal 
     */
    public function getPrix()
    {
        return $this->prix;
    }

    /**
     * Set quantite
     *
     * @param string $quantite
     * @return Produit_Utilisateur
     */
    public function setQuantite($quantite)
    {
        $this->quantite = $quantite;
        return $this;
    }

    /**
     * Get quantite
     *
     * @return integer 
     */
    public function getQuantite()
    {
        return $this->quantite;
    }
}