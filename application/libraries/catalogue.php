<?php

namespace Entities;

use Doctrine\ORM\Mapping as ORM;

/**
 * Entities\Catalogue
 */
class Catalogue
{
    /**
     * @var integer $id
     */
    private $id;

    /**
     * @var integer $id_produit
     */
    private $id_produit;

    /**
     * @var integer $id_utilisateur
     */
    private $id_utilisateur;

    /**
     * @var integer $stock
     */
    private $stock;

    /**
     * @var integer $prix
     */
    private $prix;

    /**
     * @var integer $promotion
     */
    private $promotion;

    /**
     * @var Entities\Utilisateur
     */
    private $catalogue_ligne;


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
     * @param integer $idProduit
     * @return Catalogue
     */
    public function setIdProduit($idProduit)
    {
        $this->id_produit = $idProduit;
        return $this;
    }

    /**
     * Get id_produit
     *
     * @return integer 
     */
    public function getIdProduit()
    {
        return $this->id_produit;
    }

    /**
     * Set id_utilisateur
     *
     * @param integer $idUtilisateur
     * @return Catalogue
     */
    public function setIdUtilisateur($idUtilisateur)
    {
        $this->id_utilisateur = $idUtilisateur;
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
     * Set stock
     *
     * @param integer $stock
     * @return Catalogue
     */
    public function setStock($stock)
    {
        $this->stock = $stock;
        return $this;
    }

    /**
     * Get stock
     *
     * @return integer 
     */
    public function getStock()
    {
        return $this->stock;
    }

    /**
     * Set prix
     *
     * @param integer $prix
     * @return Catalogue
     */
    public function setPrix($prix)
    {
        $this->prix = $prix;
        return $this;
    }

    /**
     * Get prix
     *
     * @return integer 
     */
    public function getPrix()
    {
        return $this->prix;
    }

    /**
     * Set promotion
     *
     * @param integer $promotion
     * @return Catalogue
     */
    public function setPromotion($promotion)
    {
        $this->promotion = $promotion;
        return $this;
    }

    /**
     * Get promotion
     *
     * @return integer 
     */
    public function getPromotion()
    {
        return $this->promotion;
    }

    /**
     * Set catalogue_ligne
     *
     * @param Entities\Utilisateur $catalogueLigne
     * @return Catalogue
     */
    public function setCatalogueLigne(\Entities\Utilisateur $catalogueLigne)
    {
        $this->catalogue_ligne = $catalogueLigne;
        return $this;
    }

    /**
     * Get catalogue_ligne
     *
     * @return Entities\Utilisateur 
     */
    public function getCatalogueLigne()
    {
        return $this->catalogue_ligne;
    }
}