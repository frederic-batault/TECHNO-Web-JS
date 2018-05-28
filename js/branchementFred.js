window.onload = function(){                             //CIBLE.EVENNEMENT
var monLien = document.getElementById('lienImg');
monLien.onclick = monGestionnaireClickImg 
}

function monGestionnaireClickImg(){                        //GESTIONNAIRE D'EVENNEMENT
  document.getElementById('emplacement').innerHTML = Date();
}