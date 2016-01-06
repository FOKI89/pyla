<?php

namespace Entities;

use Doctrine\ORM\Mapping as ORM;

/**
 * Entities\Facture
 */
class Facture
{
    /**
     * @var integer $id
     */
    private $id;

    /**
     * @var datetime $date
     */
    private $date;

    /**
     * @var integer $reference
     */
    private $reference;

    /**
     * @var integer $id_utilisateur
     */
    private $id_utilisateur;

    /**
     * @var integer $ht
     */
    private $ht;

    /**
     * @var integer $ttc
     */
    private $ttc;

    /**
     * @var string $adresse
     */
    private $adresse;

    /**
     * @var string $cp
     */
    private $cp;

    /**
     * @var string $ville
     */
    private $ville;

    /**
     * @var integer $id_pays
     */
    private $id_pays;

    /**
     * @var Entities\Utilisateur
     */
    private $utilisateur;

    /**
     * @var Entities\Pays
     */
    private $pays;


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
     * Set date
     *
     * @param datetime $date
     * @return Facture
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
     * Set reference
     *
     * @param integer $reference
     * @return Facture
     */
    public function setReference($reference)
    {
        $this->reference = $reference;
        return $this;
    }

    /**
     * Get reference
     *
     * @return integer 
     */
    public function getReference()
    {
        return $this->reference;
    }

    /**
     * Set id_utilisateur
     *
     * @param integer $idUtilisateur
     * @return Facture
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
     * Set ht
     *
     * @param integer $ht
     * @return Facture
     */
    public function setHt($ht)
    {
        $this->ht = $ht;
        return $this;
    }

    /**
     * Get ht
     *
     * @return integer 
     */
    public function getHt()
    {
        return $this->ht;
    }

    /**
     * Set ttc
     *
     * @param integer $ttc
     * @return Facture
     */
    public function setTtc($ttc)
    {
        $this->ttc = $ttc;
        return $this;
    }

    /**
     * Get ttc
     *
     * @return integer 
     */
    public function getTtc()
    {
        return $this->ttc;
    }

    /**
     * Set adresse
     *
     * @param string $adresse
     * @return Facture
     */
    public function setAdresse($adresse)
    {
        $this->adresse = $adresse;
        return $this;
    }

    /**
     * Get adresse
     *
     * @return string 
     */
    public function getAdresse()
    {
        return $this->adresse;
    }

    /**
     * Set cp
     *
     * @param string $cp
     * @return Facture
     */
    public function setCp($cp)
    {
        $this->cp = $cp;
        return $this;
    }

    /**
     * Get cp
     *
     * @return string 
     */
    public function getCp()
    {
        return $this->cp;
    }

    /**
     * Set ville
     *
     * @param string $ville
     * @return Facture
     */
    public function setVille($ville)
    {
        $this->ville = $ville;
        return $this;
    }

    /**
     * Get ville
     *
     * @return string 
     */
    public function getVille()
    {
        return $this->ville;
    }

    /**
     * Set id_pays
     *
     * @param integer $idPays
     * @return Facture
     */
    public function setIdPays($idPays)
    {
        $this->id_pays = $idPays;
        return $this;
    }

    /**
     * Get id_pays
     *
     * @return integer 
     */
    public function getIdPays()
    {
        return $this->id_pays;
    }

    /**
     * Set utilisateur
     *
     * @param Entities\Utilisateur $utilisateur
     * @return Facture
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
     * Set pays
     *
     * @param Entities\Pays $pays
     * @return Facture
     */
    public function setPays(\Entities\Pays $pays)
    {
        $this->pays = $pays;
        return $this;
    }

    /**
     * Get pays
     *
     * @return Entities\Pays 
     */
    public function getPays()
    {
        return $this->pays;
    }
}