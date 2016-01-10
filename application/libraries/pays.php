<?php

namespace Entities;

use Doctrine\ORM\Mapping as ORM;

/**
 * Entities\Pays
 */
class Pays
{
    /**
     * @var integer $id
     */
    private $id;

    /**
     * @var string $code
     */
    private $code;

    /**
     * @var string $libelle
     */
    private $libelle;

    /**
     * @var integer $indicatif
     */
    private $indicatif;


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
     * Set code
     *
     * @param string $code
     * @return Pays
     */
    public function setCode($code)
    {
        $this->code = $code;
        return $this;
    }

    /**
     * Get code
     *
     * @return string 
     */
    public function getCode()
    {
        return $this->code;
    }

    /**
     * Set libelle
     *
     * @param string $libelle
     * @return Pays
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
     * Set indicatif
     *
     * @param integer $indicatif
     * @return Pays
     */
    public function setIndicatif($indicatif)
    {
        $this->indicatif = $indicatif;
        return $this;
    }

    /**
     * Get indicatif
     *
     * @return integer 
     */
    public function getIndicatif()
    {
        return $this->indicatif;
    }
}