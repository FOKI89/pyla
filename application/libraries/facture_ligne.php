<?php

namespace Entities;

use Doctrine\ORM\Mapping as ORM;

/**
 * Entities\Facture_ligne
 */
class Facture_ligne
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
     * @var integer $quantite
     */
    private $quantite;

    /**
     * @var integer $id_facture
     */
    private $id_facture;

    /**
     * @var Entities\Produit
     */
    private $produit;

    /**
     * @var Entities\Facture
     */
    private $facture;


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
     * @return Facture_ligne
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
     * Set quantite
     *
     * @param integer $quantite
     * @return Facture_ligne
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

    /**
     * Set id_facture
     *
     * @param integer $idFacture
     * @return Facture_ligne
     */
    public function setIdFacture($idFacture)
    {
        $this->id_facture = $idFacture;
        return $this;
    }

    /**
     * Get id_facture
     *
     * @return integer 
     */
    public function getIdFacture()
    {
        return $this->id_facture;
    }

    /**
     * Set produit
     *
     * @param Entities\Produit $produit
     * @return Facture_ligne
     */
    public function setProduit(\Entities\Produit $produit)
    {
        $this->produit = $produit;
        return $this;
    }

    /**
     * Get produit
     *
     * @return Entities\Produit 
     */
    public function getProduit()
    {
        return $this->produit;
    }

    /**
     * Set facture
     *
     * @param Entities\Facture $facture
     * @return Facture_ligne
     */
    public function setFacture(\Entities\Facture $facture)
    {
        $this->facture = $facture;
        return $this;
    }

    /**
     * Get facture
     *
     * @return Entities\Facture 
     */
    public function getFacture()
    {
        return $this->facture;
    }
}