// commande.js

document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("modalCommande");
  const closeBtn = modal.querySelector(".close");
  const produitSpan = document.getElementById("produitSelectionne");
  const form = document.getElementById("formCommande");
  const messageConfirmation = document.getElementById("messageConfirmation");

  // Ouvre modal quand clic sur bouton commander
  document.querySelectorAll(".commander-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const produit = btn.getAttribute("data-produit");
      produitSpan.textContent = produit;
      messageConfirmation.style.display = "none";
      form.style.display = "block";
      form.reset();
      modal.style.display = "block";
    });
  });

  // Ferme modal au clic sur la croix
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Ferme modal si clic en dehors de la boîte
  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  // Envoi formulaire (simulateur, sans backend réel)
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Ici, tu peux appeler ton backend ou Stripe, etc.
    form.style.display = "none";
    messageConfirmation.textContent = "Merci pour votre commande ! Nous vous contacterons bientôt.";
    messageConfirmation.style.display = "block";
  });
});
