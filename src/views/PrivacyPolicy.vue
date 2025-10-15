<template>
  <div class="privacy-content">
    <h1>Politique de confidentialité</h1>
    <section>
      <h2>Collecte des données</h2>
      <p>Ce site peut collecter des données personnelles lorsque vous :</p>
      <ul>
        <li>Soumettez un message via un formulaire de contact</li>
        <li>
          Acceptez des cookies ou des outils tiers (comme Google Analytics)
        </li>
      </ul>
      <p>
        Les données collectées peuvent inclure : votre adresse IP, le type de
        navigateur, votre nom, votre adresse e‑mail, ou toute information que
        vous fournissez volontairement.
      </p>
    </section>

    <section>
      <h2>Utilisation des données</h2>
      <p>
        Les données sont utilisées uniquement pour les finalités suivantes :
      </p>
      <ul>
        <li>Répondre aux messages de contact</li>
        <li>Analyser l’audience du site (via Google Analytics)</li>
      </ul>
    </section>

    <section>
      <h2>Cookies</h2>
      <p>
        Ce site utilise des cookies pour améliorer votre expérience et analyser
        le trafic.
      </p>
    </section>

    <section>
      <h2>Hébergement des données</h2>
      <p>
        Toutes les données collectées via ce site sont hébergées sur les
        serveurs de Vercel.
      </p>
    </section>

    <section>
      <h2>Durée de conservation</h2>
      <p>
        Vos données sont conservées uniquement le temps nécessaire pour répondre
        aux finalités indiquées ci‑dessus.
      </p>
    </section>

    <section>
      <h2>Vos droits</h2>
      <p>
        Conformément au RGPD, vous disposez d’un droit d’accès, de rectification
        et de suppression de vos données personnelles.
      </p>
      <p>Pour exercer ces droits, contactez : ferrandsabry@gmail.com</p>
    </section>

    <section>
      <h2>Contact</h2>
      <p>
        Pour toute question relative à la confidentialité, veuillez écrire à :
        ferrandsabry@gmail.com
      </p>
    </section>
  </div>
</template>

<script setup>
// Le script est vide car nous n'avons pas besoin de logique spécifique
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap");

.privacy-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  margin-top: 72px;
  background-color: #f2f2f2;
  font-family: "Montserrat", sans-serif;
  color: #333;
  min-height: calc(
    100vh - 72px - 200px
  ); /* Hauteur minimale pour éviter que le footer ne remonte */
}

h1 {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
}

section {
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #333;
}

p {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 0.5rem;
}

ul {
  list-style-type: disc;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

li {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 0.5rem;
}

/* Responsive styles */
@media (max-width: 768px) {
  .privacy-content {
    padding: 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  p,
  li {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1rem;
  }

  p,
  li {
    font-size: 0.85rem;
  }
}

/* Styles pour la barre de défilement */
:deep(::-webkit-scrollbar) {
  width: 8px;
}

:deep(::-webkit-scrollbar-track) {
  background: #f1f1f1;
}

:deep(::-webkit-scrollbar-thumb) {
  background: #888;
  border-radius: 4px;
}

:deep(::-webkit-scrollbar-thumb:hover) {
  background: #555;
}
</style>
