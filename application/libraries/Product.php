<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Product
{
    private $id;
    private $reference;
    private $libelle;
    private $marque;
    private $images;
    private $video;
    private $statut;

    protected $table = 'produits';

    /**
     * Set id
     *
     * @param int $id
     * @return Produit
     */
    public function setId($id)
    {
        if(filter_var($id, FILTER_VALIDATE_INT) !== false)
        {
            if(filter_var($id, FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^[1-9]+$/"))) !== false)
            {
                log_message('error', 'ID - Format incorrect');
            }
            log_message('error', 'ID - Type incorrect');
        }
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
     * Set reference
     *
     * @param string $reference
     * @return Produit
     */
    public function setReference($reference)
    {
        $this->reference = $reference;
        return $this;
    }

    /**
     * Get reference
     *
     * @return string 
     */
    public function getReference()
    {
        return $this->reference;
    }

    /**
     * Set libelle
     *
     * @param string $libelle
     * @return Produit
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
     * Set marque
     *
     * @param string $marque
     * @return Produit
     */
    public function setMarque($marque)
    {
        $this->marque = $marque;
        return $this;
    }

    /**
     * Get marque
     *
     * @return string 
     */
    public function getMarque()
    {
        return $this->marque;
    }

    /**
     * Set images
     *
     * @param string $images
     * @return Produit
     */
    public function setImages($images)
    {
        $this->images = $images;
        return $this;
    }

    /**
     * Get images
     *
     * @return string 
     */
    public function getImages()
    {
        return $this->images;
    }

    /**
     * Set video
     *
     * @param string $video
     * @return Produit
     */
    public function setVideo($video)
    {
        if(filter_var($video, FILTER_VALIDATE_URL) !== false)
        {
            $this->video = $video;
            return $this;
        }
        log_message('error', 'STATUT - Format incorrect');
    }

    /**
     * Get video
     *
     * @return string 
     */
    public function getVideo()
    {
        return $this->video;
    }

    /**
     * Set statut
     *
     * @param boolean $statut
     * @return Produit
     */
    public function setStatut($statut)
    {
        if(filter_var($statut, FILTER_VALIDATE_INT) !== false)
        {
            if(filter_var($statut, FILTER_VALIDATE_REGEXP, array("options" => array("regexp" => "/^[0|1]$/"))) !== false)
            {
                $this->statut = $statut;
                return $this;
            }else{
                log_message('error', 'STATUT - Format incorrect');
            }
        }else{
            log_message('error', 'STATUT - Type incorrect');
        }
    }

    /**
     * Get statut
     *
     * @return boolean 
     */
    public function getStatut()
    {
        return $this->statut;
    }

    /**
     * Set date
     *
     * @param date $data
     * @return Produit
     */
    public function setDate($date)
    {
        $this->statut = $statut;
        return $this;
    }

    /**
     * Get date
     *
     * @return date 
     */
    public function getDate()
    {
        return $this->Date;
    }
}