<template>
  <div class="legal-content">
    <h1>Mentions légales</h1>
    <h2>Propriétaire du site</h2>
    <p>Nom : Ferrand Sabry</p>
    <p>Email : ferrandsabry@gmail.com</p>
    <p>Directeur de la publication : Ferrand Sabry</p>

    <h2>Hébergement & Nom de domaine</h2>
    <p>Bureau d'enregistrement du domaine : IONOS</p>
    <p>
      Hébergeur web :
      <a href="https://vercel.com" target="_blank" rel="noopener noreferrer"
        >Vercel</a
      >
    </p>
    <p>Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, USA</p>

    <h2>Propriété intellectuelle</h2>
    <p>
      L'ensemble du contenu de ce site (textes, images, graphismes, logos,
      icônes, etc.) est protégé par le droit d'auteur. Toute reproduction ou
      représentation, totale ou partielle, sans autorisation préalable est
      interdite.
    </p>

    <h2>Responsabilité</h2>
    <p>
      Le propriétaire du site ne saurait être tenu responsable des erreurs,
      omissions, ou de toute utilisation ou interprétation des informations
      présentes sur ce site.
    </p>

    <h2>Contact</h2>
    <p>
      Pour toute demande, veuillez contacter :
      <a href="mailto:ferrandsabry@gmail.com">ferrandsabry@gmail.com</a>
    </p>
  </div>
</template>

<script setup>
// Pas besoin de logique particulière pour cette page
</script>

<style scoped>
.legal-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  margin-top: 72px;
  background-color: #f2f2f2;
  font-family: "Montserrat", sans-serif;
  color: #333;
  min-height: calc(100vh - 72px - 200px);
}

h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 600;
}

h2 {
  font-size: 1.25rem;
  color: #333;
  margin: 1.5rem 0 1rem;
  font-weight: 500;
}

p {
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #666;
}

/* Responsive */
@media (max-width: 768px) {
  .legal-content {
    padding: 1rem;
  }

  h1 {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 1.1rem;
    margin: 1.25rem 0 0.75rem;
  }

  p {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.5rem;
    margin-bottom: 1.25rem;
  }

  h2 {
    font-size: 1rem;
    margin: 1rem 0 0.5rem;
  }

  p {
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
