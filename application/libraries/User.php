<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class User
{
    private $id;
    private $prenom;
    private $nom;
    private $adresse;
    private $telephone;
    private $cp;
    private $ville;
    private $id_pays;
    private $email;
    private $mdp;
    private $date_naissance;
    private $statut;
    private $date_entree;
    private $id_token;
    protected $table = 'utilisateurs';
    
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
     * @param string $id_pays
     * @return Utilisateur
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
     * @param date $dateNaissance
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
     * @return date 
     */
    public function getDateNaissance()
    {
        return $this->date_naissance;
    }

    /**
     * Set statut
     *
     * @param integer $statut
     * @return Utilisateur
     */
    public function setStatut($statut)
    {
        $this->statut = $statut;
        return $this;
    }

    /**
     * Get statut
     *
     * @return integer 
     */
    public function getStatut()
    {
        return $this->statut;
    }

    /**
     * Set date_entree
     *
     * @param date $dateEntree
     * @return Utilisateur
     */
    public function setDateEntree($dateEntree)
    {
        $this->date_entree = $dateEntree;
        return $this;
    }

    /**
     * Get date_entree
     *
     * @return integer 
     */
    public function getDateEntree()
    {
        return $this->date_entree;
    }
      

    /**
     * Set id_token
     *
     * @param integer $id_token
     * @return Utilisateur
     */
    public function setIdToken($id_token)
    {
        $this->id_token = $id_token;
        return $this;
    }

    /**
     * Get id_token
     *
     * @return integer 
     */
    public function getIdToken()
    {
        return $this->id_token;
    }
}