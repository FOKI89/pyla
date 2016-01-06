<?php

namespace Entities;

use Doctrine\ORM\Mapping as ORM;

/**
 * Entities\Commande_ligne
 */
class Commande_ligne
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
     * @var integer $id_commande
     */
    private $id_commande;

    /**
     * @var Entities\Produit
     */
    private $produit;

    /**
     * @var Entities\Commande
     */
    private $commande;


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
     * @return Commande_ligne
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
     * @return Commande_ligne
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
     * Set id_commande
     *
     * @param integer $idCommande
     * @return Commande_ligne
     */
    public function setIdCommande($idCommande)
    {
        $this->id_commande = $idCommande;
        return $this;
    }

    /**
     * Get id_commande
     *
     * @return integer 
     */
    public function getIdCommande()
    {
        return $this->id_commande;
    }

    /**
     * Set produit
     *
     * @param Entities\Produit $produit
     * @return Commande_ligne
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
     * Set commande
     *
     * @param Entities\Commande $commande
     * @return Commande_ligne
     */
    public function setCommande(\Entities\Commande $commande)
    {
        $this->commande = $commande;
        return $this;
    }

    /**
     * Get commande
     *
     * @return Entities\Commande 
     */
    public function getCommande()
    {
        return $this->commande;
    }
}