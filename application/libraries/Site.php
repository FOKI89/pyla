<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Site
{
    private $id;
    private $nom;
    private $adresse;
    private $cp;
    private $ville;
    private $id_pays;
    private $email;
    private $telephone;
    private $mdp;
    private $date_creation;
    protected $table = 'site';
    
    /**
     * Set id
     *
     * @param int $id
     * @return Site
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
     * Set nom
     *
     * @param string $nom
     * @return Site
     */
    public function setNom($nom)
    {
        $this->nom = $nom;
        return $this;
    }

    /**
     * Get prenom
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
     * @return Site
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
     * @return Site
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
     * @return Site
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
     * @param string $id_pays
     * @return Site
     */
    public function setIdpays($id_pays)
    {
        $this->id_pays = $id_pays;
        return $this;
    }

    /**
     * Get id_pays
     *
     * @return string 
     */
    public function getIdpays()
    {
        return $this->id_pays;
    }

    /**
     * Set email
     *
     * @param string $email
     * @return Site
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
     * Set telephone
     *
     * @param string $telephone
     * @return Site
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
     * Set mdp
     *
     * @param string $mdp
     * @return Site
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
     * Set date_creation
     *
     * @param date $dateCreation
     * @return Site
     */
    public function setDateCreation($dateCreation)
    {
        $this->date_creation = $dateCreation;
        return $this;
    }

    /**
     * Get date_creation
     *
     * @return date 
     */
    public function getDateCreation()
    {
        return $this->date_creation;
    }
}