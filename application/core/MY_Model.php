<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class MY_Model extends CI_Model
{
	/* Create
	 *
	 * Insère une nouvelle ligne dans la base de données.
     *
     * @param array $options_echappees, $options_echappees['pseudo'] = 'Arthur'
     * @param array $options_non_echappees, $options_non_echappees['date_inscription'] = 'NOW()'
     * @return boolean
     */
	public function create($options_echappees = array(), $options_non_echappees = array())
	{
	    if(empty($options_echappees) AND empty($options_non_echappees))
	    {
	        return false;
	    }
	    
	    return (bool) $this->db->set($options_echappees)
                               ->set($options_non_echappees, null, false)
                               ->insert($this->table);
	}

	/* Read
	 *
	 * Récupère des données dans la base de données.
     *
     * @param char $select
     * @param string $where
     * @param integer $nb
     * @param integer $debut
     * @return SQL data
     */
	public function read($select = '*', $where = array(), $nb = null, $debut = null)
	{
		return $this->db->select($select)
                        ->from($this->table)
                        ->where($where)
                        ->limit($nb, $debut)
                        ->get()
                        ->result();
	}
	
	/* Update
	 *
	 * Modifie une ou plusieurs lignes dans la base de données.
     *
     * @param string $where, integer $where
     * @param array $options_echappees, $options_echappees['pseudo'] = 'Arthur'
     * @param array $options_non_echappees, $options_non_echappees['date_inscription'] = 'NOW()'
     * @return Bbolean
     */
	public function update($where, $options_echappees = array(), $options_non_echappees = array())
	{
		if(empty($options_echappees) AND empty($options_non_echappees))
		{
			return false;
		}
		
		//	Raccourci dans le cas où on sélectionne l'id
		if(is_integer($where))
		{
			$where = array('id' => $where);
		}

		return (bool) $this->db->set($options_echappees)
                               ->set($options_non_echappees, null, false)
                               ->where($where)
                               ->update($this->table);

	}
	
	/* Delete
	 *
	 * Supprime une ou plusieurs lignes de la base de données.
     *
     * @param string $where, integer $where
     * @return boolean
     */
	public function delete($where)
	{
	    if(is_integer($where))
	    {
	        $where = array('id' => $where);
	    }
	    
	    return (bool) $this->db->where($where)
                               ->delete($this->table);
	}

	/* Count
     *
     * Retourne le nombre de résultats.
     *
     * @param string $champ, array $champ
     * @param string $valeur
     * @return integer
     */
	public function count($champ = array(), $valeur = null) // Si $champ est un array, la variable $valeur sera ignorée par la méthode where()
	{
	    return (int) $this->db->where($champ, $valeur)
                              ->from($this->table)
                              ->count_all_results();
	}
}

/* End of file MY_Model.php */
/* Location: ./system/application/core/MY_Model.php */