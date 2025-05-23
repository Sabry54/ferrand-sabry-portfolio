<template>
  <div class="privacy-content">
    <h1>Privacy Policy</h1>
    <section>
      <h2>Data Collection</h2>
      <p>This site may collect personal data when you:</p>
      <ul>
        <li>Submit a message through a contact form</li>
        <li>Accept cookies or third-party tools (such as Google Analytics)</li>
      </ul>
      <p>
        Collected data may include: your IP address, browser type, name, email
        address, or any information you voluntarily provide.
      </p>
    </section>

    <section>
      <h2>Use of Data</h2>
      <p>Data is only used for the following purposes:</p>
      <ul>
        <li>Responding to contact messages</li>
        <li>Website analytics (via Google Analytics)</li>
      </ul>
    </section>

    <section>
      <h2>Cookies</h2>
      <p>
        This website uses cookies to improve your experience and analyze site
        traffic.
      </p>
    </section>

    <section>
      <h2>Data Hosting</h2>
      <p>All data collected via this website is hosted on Vercel servers.</p>
    </section>

    <section>
      <h2>Data Retention</h2>
      <p>
        Your data is only stored for as long as necessary to fulfill the
        purposes listed above.
      </p>
    </section>

    <section>
      <h2>Your Rights</h2>
      <p>
        According to the GDPR, you have the right to access, correct, or delete
        your personal data.
      </p>
      <p>To exercise these rights, contact: ferrandsabry@gmail.com</p>
    </section>

    <section>
      <h2>Contact</h2>
      <p>
        If you have any privacy-related questions, please email:
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
