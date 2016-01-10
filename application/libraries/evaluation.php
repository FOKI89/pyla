<?php

namespace Entities;

use Doctrine\ORM\Mapping as ORM;

/**
 * Entities\Evaluation
 */
class Evaluation
{
    /**
     * @var integer $id
     */
    private $id;

    /**
     * @var string $note
     */
    private $note;

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
     * Set note
     *
     * @param string $note
     * @return Evaluation
     */
    public function setNote($note)
    {
        $this->note = $note;
        return $this;
    }

    /**
     * Get note
     *
     * @return string 
     */
    public function getNote()
    {
        return $this->note;
    }

    /**
     * Set date
     *
     * @param datetime $date
     * @return Evaluation
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
     * @return Evaluation
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
     * @return Evaluation
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
     * @return Evaluation
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
     * @return Evaluation
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