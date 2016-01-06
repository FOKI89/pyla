<?php

namespace Entities;

use Doctrine\ORM\Mapping as ORM;

/**
 * Entities\Utilisateur
 */
class Utilisateur
{
    /**
     * @var integer $id
     */
    private $id;

    /**
     * @var string $prenom
     */
    private $prenom;

    /**
     * @var string $nom
     */
    private $nom;

    /**
     * @var string $adresse
     */
    private $adresse;

    /**
     * @var string $telephone
     */
    private $telephone;

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
     * @var string $email
     */
    private $email;

    /**
     * @var string $mdp
     */
    private $mdp;

    /**
     * @var datetime $date_naissance
     */
    private $date_naissance;

    /**
     * @var integer $droit
     */
    private $droit;


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
     * Set prenom
     *
     * @param string $prenom
     * @return Utilisateur
     */
    public function setPrenom($prenom)
    {
        $this->prenom = $prenom;
        return $this;
    }

    /**
     * Get prenom
     *
     * @return string 
     */
    public function getPrenom()
    {
        return $this->prenom;
    }

    /**
     * Set nom
     *
     * @param string $nom
     * @return Utilisateur
     */
    public function setNom($nom)
    {
        $this->nom = $nom;
        return $this;
    }

    /**
     * Get nom
     *
     * @return string 
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * Set adresse
     *
     * @param string $adresse
     * @return Utilisateur
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
     * Set telephone
     *
     * @param string $telephone
     * @return Utilisateur
     */
    public function setTelephone($telephone)
    {
        $this->telephone = $telephone;
        return $this;
    }

    /**
     * Get telephone
     *
     * @return string 
     */
    public function getTelephone()
    {
        return $this->telephone;
    }

    /**
     * Set cp
     *
     * @param string $cp
     * @return Utilisateur
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
     * @return Utilisateur
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
     * @return Utilisateur
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
     * Set email
     *
     * @param string $email
     * @return Utilisateur
     */
    public function setEmail($email)
    {
        $this->email = $email;
        return $this;
    }

    /**
     * Get email
     *
     * @return string 
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set mdp
     *
     * @param string $mdp
     * @return Utilisateur
     */
    public function setMdp($mdp)
    {
        $this->mdp = $mdp;
        return $this;
    }

    /**
     * Get mdp
     *
     * @return string 
     */
    public function getMdp()
    {
        return $this->mdp;
    }

    /**
     * Set date_naissance
     *
     * @param datetime $dateNaissance
     * @return Utilisateur
     */
    public function setDateNaissance($dateNaissance)
    {
        $this->date_naissance = $dateNaissance;
        return $this;
    }

    /**
     * Get date_naissance
     *
     * @return datetime 
     */
    public function getDateNaissance()
    {
        return $this->date_naissance;
    }

    /**
     * Set droit
     *
     * @param integer $droit
     * @return Utilisateur
     */
    public function setDroit($droit)
    {
        $this->droit = $droit;
        return $this;
    }

    /**
     * Get droit
     *
     * @return integer 
     */
    public function getDroit()
    {
        return $this->droit;
    }
}