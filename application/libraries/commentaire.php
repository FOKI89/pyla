<?php

namespace Entities;

use Doctrine\ORM\Mapping as ORM;

/**
 * Entities\Commentaire
 */
class Commentaire
{
    /**
     * @var integer $id
     */
    private $id;

    /**
     * @var text $contenu
     */
    private $contenu;

    /**
     * @var datetime $date
     */
    private $date;

    /**
     * @var integer $id_utilisateur
     */
    private $id_utilisateur;

    /**
     * @var integer $id_produit
     */
    private $id_produit;

    /**
     * @var Entities\Utilisateur
     */
    private $utilisateur;

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
     * Set contenu
     *
     * @param text $contenu
     * @return Commentaire
     */
    public function setContenu($contenu)
    {
        $this->contenu = $contenu;
        return $this;
    }

    /**
     * Get contenu
     *
     * @return text 
     */
    public function getContenu()
    {
        return $this->contenu;
    }

    /**
     * Set date
     *
     * @param datetime $date
     * @return Commentaire
     */
    public function setDate($date)
    {
        $this->date = $date;
        return $this;
    }

    /**
     * Get date
     *
     * @return datetime 
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set id_utilisateur
     *
     * @param integer $idUtilisateur
     * @return Commentaire
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
     * Set id_produit
     *
     * @param integer $idProduit
     * @return Commentaire
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
     * Set utilisateur
     *
     * @param Entities\Utilisateur $utilisateur
     * @return Commentaire
     */
    public function setUtilisateur(\Entities\Utilisateur $utilisateur)
    {
        $this->utilisateur = $utilisateur;
        return $this;
    }

    /**
     * Get utilisateur
     *
     * @return Entities\Utilisateur 
     */
    public function getUtilisateur()
    {
        return $this->utilisateur;
    }

    /**
     * Set produit
     *
     * @param Entities\Produit $produit
     * @return Commentaire
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