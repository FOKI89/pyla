<div class="nav-filter indigo lighten-5">
  <nav class="indigo indigo lighten-5">
    <h3 class="center">Filtres</h3>
    <form id="filtrage" class="row" action="" method="" >
      <div class="input-field col s12 m12">
        <select class="icon blue lighten-1">
          <option value="" disabled selected>Catégorie</option>
          <option value="1">Tee Shirts</option>
          <option value="2">Chaussures</option>
          <option value="3">Pantalons</option>
          <option value="4">Pulls</option>
          <option value="5">Manteaux</option>
          <option value="6">Chaussettes</option>
          <option value="7">Accessoires</option>
        </select>
      </div>
      <div class="checkboxes col s6 m6 l12">
        <p>Marque:</p>
        <p>
          <input type="checkbox" class="filled-in" id="marque_addadas" />
          <label for="marque_addadas">Addadas</label>
        </p>
        <p>
          <input type="checkbox" class="filled-in" id="marque_nipe"  />
          <label for="marque_nipe">Nipe</label>
        </p>
        <p>
          <input type="checkbox" class="filled-in" id="marque_seebock"  />
          <label for="marque_seebock">Seebock</label>
        </p>
        <p>
          <input type="checkbox" class="filled-in" id="marque_newtalance"  />
          <label for="marque_newtalance">New Talance</label>
        </p>
      </div>
      <div class="divider"></div>
      <div class="checkboxes col s6 m6 l12">
        <p>Matière:</p>
        <p>
          <input type="checkbox" class="filled-in" id="fill0" />
          <label for="fill0">Coton</label>
        </p>
        <p>
          <input type="checkbox" class="filled-in" id="fill1"  />
          <label for="fill1">Laine</label>
        </p>
        <p>
          <input type="checkbox" class="filled-in" id="fill12"  />
          <label for="fill12">Nylon</label>
        </p>
        <p>
          <input type="checkbox" class="filled-in" id="fill3"  />
          <label for="fill3">Cuir</label>
        </p>
        <p>
          <input type="checkbox" class="filled-in" id="fill4" />
          <label for="fill4">Synthétique</label>
        </p>
      </div>
      <div class="divider"></div>
      <div class="col s12 m6 l12">
        <p class='prix'>Prix:</p>
        <div id="filtre_prix" class="range-field"></div>
      </div>
      <div class="divider"></div>
      <div class="col s12 m6 l12 center">
        <button class="btn waves-effect waves-light blue yellow-text " type="submit" name="recherche">Rechercher
          <i class="material-icons right">send</i>
        </button>
      </div>
  </form>
  </nav>
</div>
