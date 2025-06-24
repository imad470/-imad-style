function ouvrirFormulaire(produitNom) {
  document.getElementById("produit").value = produitNom;
  document.getElementById("formulaire-commande").style.display = "block";
}

function fermerFormulaire() {
  document.getElementById("formulaire-commande").style.display = "none";
}

document.getElementById("commandeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
  const adresse = document.getElementById("adresse").value;
  const produit = document.getElementById("produit").value;

  alert(`Merci ${nom}, votre commande de "${produit}" sera envoyée à l'adresse : ${adresse}`);

  // Réinitialise le formulaire
  document.getElementById("commandeForm").reset();

  // Ferme le formulaire après 3 secondes
  setTimeout(() => {
    fermerFormulaire();
  }, 3000);
});
