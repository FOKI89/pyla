<?php

namespace Entities;

use Doctrine\ORM\Mapping as ORM;

/**
 * Entities\Tag
 */
class Tag
{
    /**
     * @var integer $id
     */
    private $id;

    /**
     * @var string $libelle
     */
    private $libelle;

    /**
     * @var integer $id_produit
     */
    private $id_produit;

    /**
     * @var Entities\Produit
     */
    private $produit;


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
     * @return Tag
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
     * Set id_produit
     *
     * @param integer $idProduit
     * @return Tag
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
     * Set produit
     *
     * @param Entities\Produit $produit
     * @return Tag
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
}