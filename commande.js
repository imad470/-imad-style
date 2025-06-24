document.addEventListener('DOMContentLoaded', function () {
  const boutonsCommander = document.querySelectorAll('.commander-btn');
  const formulaireCommande = document.getElementById('commande-formulaire');

  boutonsCommander.forEach((bouton) => {
    bouton.addEventListener('click', () => {
      formulaireCommande.style.display = 'block';
      formulaireCommande.scrollIntoView({ behavior: 'smooth' });
    });
  });

  const formulaire = document.getElementById('formulaire');
  formulaire.addEventListener('submit', function (e) {
    e.preventDefault();
    const nom = formulaire.elements[0].value;
    const email = formulaire.elements[1].value;
    const adresse = formulaire.elements[2].value;

    alert(`Merci ${nom}, votre commande sera envoyée à : ${adresse}`);
    formulaireCommande.style.display = 'none';
    formulaire.reset();
  });
});
