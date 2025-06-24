// Ouvre le formulaire avec les infos du produit
function ouvrirFormulaireCommande(nomProduit, prixProduit) {
  const container = document.getElementById('order-form-container');
  container.classList.remove('hidden');
  document.getElementById('product-name').value = nomProduit;
  document.getElementById('product-price').value = prixProduit;
}

// Ferme le formulaire
function fermerFormulaireCommande() {
  const container = document.getElementById('order-form-container');
  container.classList.add('hidden');
}

// Valide et traite la commande
function validerCommande(event) {
  event.preventDefault();
  
  const nom = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const adresse = document.getElementById('address').value.trim();
  const produit = document.getElementById('product-name').value;
  const prix = document.getElementById('product-price').value;

  if (!nom || !email || !adresse) {
    alert('Veuillez remplir tous les champs.');
    return;
  }
  
  // Ici, tu peux appeler une API de paiement, ou envoyer les données à un serveur
  alert(`Merci pour votre commande de ${produit} à ${prix}. Nous vous contacterons bientôt.`);
  
  fermerFormulaireCommande();
  document.getElementById('order-form').reset();
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('order-form').addEventListener('submit', validerCommande);
  document.getElementById('cancel-order').addEventListener('click', fermerFormulaireCommande);

  document.querySelectorAll('.btn-commander').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const produit = button.getAttribute('data-produit');
      const prix = button.getAttribute('data-prix');
      ouvrirFormulaireCommande(produit, prix);
    });
  });
});
