<template>
  <div class="mentions-legales">
    <h1>Legal Notice</h1>
    <div class="legal-content">
      <h2>Site Owner</h2>
      <p>Name: Ferrand Sabry</p>
      <p>Email: ferrandsabry@gmail.com</p>
      <p>Publishing Director: Ferrand Sabry</p>

      <h2>Hosting & Domain</h2>
      <p>Domain registrar: IONOS</p>
      <p>
        Web hosting provider:
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer"
          >Vercel</a
        >
      </p>
      <p>Address: 440 N Barranca Ave #4133, Covina, CA 91723, USA</p>

      <h2>Intellectual Property</h2>
      <p>
        All content on this site (texts, images, graphics, logos, icons, etc.)
        is protected by copyright. Any reproduction or representation, in whole
        or in part, without prior permission is prohibited.
      </p>

      <h2>Liability</h2>
      <p>
        The site owner cannot be held responsible for errors, omissions, or any
        use or interpretation of the information provided on this website.
      </p>

      <h2>Contact</h2>
      <p>
        For any inquiry, please contact:
        <a href="mailto:ferrandsabry@gmail.com">ferrandsabry@gmail.com</a>
      </p>
    </div>
  </div>
</template>

<script setup>
// Pas besoin de logique particulière pour cette page
</script>

<style scoped>
.mentions-legales {
  min-height: 100vh;
  padding: 2rem;
  background-color: #f2f2f2;
  font-family: "Montserrat", sans-serif;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 72px;
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
  .mentions-legales {
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
</style>
