// commande.js

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form-commande');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupérer les infos de commande
    const produit = form.elements['produit'].value;
    const quantite = form.elements['quantite'].value;

    // Ici, on peut ouvrir la page de paiement Stripe ou PayPal selon ton choix
    // Pour l'instant on affiche juste un message
    alert(`Commande reçue : ${quantite} x ${produit}. On va te rediriger vers le paiement.`);
  });
});
