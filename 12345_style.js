/*var n = 10; // Nombre final du compteur
var cpt = 0; // Initialisation du compteur
var duree = 5; // Durée en seconde pendant laquel le compteur ira de 0 à 10
var delta = Math.ceil((duree * 1000) / n); // On calcule l'intervalle de temps entre chaque rafraîchissement du compteur (durée mise en milliseconde)
var node =  document.getElementById("compteur"); // On récupère notre noeud où sera rafraîchi la valeur du compteur
 
function countdown() {
  node.innerHTML = ++cpt;
  if( cpt < n ) { // Si on est pas arrivé à la valeur finale, on relance notre compteur une nouvelle fois
     setTimeout(countdown, delta);
  }
}
 
setTimeout(countdown, delta);*/

for (let compteur = 0; pas < 5; pas++) {
    // Ceci sera exécuté 5 fois
    // À chaque éxécution, la variable "pas" augmentera de 1
    // Lorsque'elle sera arrivée à 5, le boucle se terminera.
    console.log('Faire ' + compteur + ' compteur vers l\'est');
  }
  


