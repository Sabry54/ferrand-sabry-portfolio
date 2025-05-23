<template>
  <div class="privacy-policy">
    <div class="content-container">
      <h1>Privacy Policy</h1>

      <section>
        <h2>Data Collection</h2>
        <p>This site may collect personal data when you:</p>
        <ul>
          <li>Submit a message through a contact form</li>
          <li>
            Accept cookies or third-party tools (such as Google Analytics)
          </li>
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
          According to the GDPR, you have the right to access, correct, or
          delete your personal data.
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
  </div>
</template>

<script setup>
// Le script est vide car nous n'avons pas besoin de logique spécifique
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap");

.privacy-policy {
  min-height: 100vh;
  background-color: #f2f2f2;
  color: #333;
  font-family: "Montserrat", sans-serif;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.content-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

/* Footer styles */
.legal-footer {
  position: relative;
  width: 100%;
  height: 72px;
  background: transparent;
  font-family: "Montserrat", sans-serif;
  z-index: 100;
  display: flex;
  align-items: center;
  margin-top: 2rem;
}

.footer-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
}

.footer-text {
  font-size: 0.875rem;
  color: #333;
  font-weight: 400;
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-link {
  color: #333;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #666;
}

/* Responsive styles */
@media (max-width: 768px) {
  .privacy-policy {
    padding: 1rem;
  }

  .content-container {
    margin: 1rem auto;
    padding: 1.5rem;
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

  .legal-footer {
    height: auto;
    padding: 1rem 0;
    margin-top: 1rem;
  }

  .footer-content {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }

  .footer-text {
    font-size: 0.75rem;
  }

  .footer-links {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-link {
    font-size: 0.75rem;
  }
}
</style>
