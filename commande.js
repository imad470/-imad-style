// commande.js - gestion formulaire commande simple et validation

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-commande');
  const message = document.getElementById('message');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Récupérer les données du formulaire
    const nom = form.elements['nom'].value.trim();
    const email = form.elements['email'].value.trim();
    const produit = form.elements['produit'].value.trim();
    const quantite = parseInt(form.elements['quantite'].value.trim(), 10);

    // Validation simple
    if (!nom || !email || !produit || isNaN(quantite) || quantite < 1) {
      message.textContent = "Merci de remplir tous les champs correctement.";
      message.style.color = 'red';
      return;
    }

    // Ici tu peux ajouter la logique d'envoi vers Stripe/PayPal ou un serveur

    message.textContent = `Merci ${nom}, votre commande de ${quantite} ${produit}(s) a bien été prise en compte.`;
    message.style.color = 'green';
    form.reset();
  });
});
