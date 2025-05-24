<template>
  <div class="contact-page">
    <div class="contact-container">
      <div class="contact-content">
        <div class="contact-text">
          <h1>Contact</h1>
          <p>Have a project in mind? Feel free to contact me to discuss it.</p>
          <p>I'm always open to new collaborations.</p>
          <div class="contact-info">
            <p class="email">ferrandsabry@gmail.com</p>
            <p class="signature">Ferrand Sabry</p>
          </div>
        </div>

        <form @submit.prevent="sendEmail" class="contact-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              required
              placeholder="Your name"
            />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              required
              placeholder="Your email"
            />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="formData.message"
              required
              placeholder="Your message"
              rows="5"
            ></textarea>
          </div>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const sendEmail = () => {
  const { name, email, message } = formData.value;
  const mailtoLink = `mailto:ferrand.sabry@gmail.com?subject=Contact de ${name}&body=Nom: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
  window.location.href = mailtoLink;
};
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  background: #f2f2f2;
  padding: 120px 20px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.contact-text {
  padding: 20px;
  margin-top: 40px;
}

.contact-text h1 {
  font-family: "Aladin", cursive;
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: #333;
  margin-bottom: 20px;
}

.contact-text p {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
}

.contact-form {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-size: 0.9rem;
}

input,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #333;
  box-shadow: 0 0 0 2px rgba(51, 51, 51, 0.1);
}

button {
  width: 100%;
  padding: 14px;
  background: #333;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background: #444;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-text {
    text-align: center;
    padding: 0;
  }

  .contact-form {
    padding: 30px;
  }
}

@media (max-width: 480px) {
  .contact-page {
    padding: 100px 15px 30px;
  }

  .contact-form {
    padding: 20px;
  }

  input,
  textarea {
    padding: 10px;
  }

  button {
    padding: 12px;
  }
}

.contact-info {
  margin-top: 2rem;
}

.contact-info .email {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.contact-info .signature {
  font-style: italic;
  color: #666;
  font-size: 1rem;
}
</style>
