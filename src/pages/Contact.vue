<template>
  <main class="py-20">
    <div class="container max-w-2xl">
      <h1 class="text-4xl font-bold text-primary mb-8">Contact</h1>

      <form class="space-y-6">
        <div>
          <label
            for="name"
            class="block text-sm font-medium text-secondary mb-2"
            >Nom</label
          >
          <input
            type="text"
            id="name"
            name="name"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
          />
        </div>

        <div>
          <label
            for="email"
            class="block text-sm font-medium text-secondary mb-2"
            >Email</label
          >
          <input
            type="email"
            id="email"
            name="email"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
          />
        </div>

        <div>
          <label
            for="message"
            class="block text-sm font-medium text-secondary mb-2"
            >Message</label
          >
          <textarea
            id="message"
            name="message"
            rows="6"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
          ></textarea>
        </div>

        <button type="submit" class="btn w-full">Envoyer le message</button>
      </form>

      <div class="mt-12 text-center">
        <p class="text-secondary">Ou contactez-moi directement par email :</p>
        <a
          href="mailto:contact@ferrandsabry.fr"
          class="text-accent hover:underline"
        >
          contact@ferrandsabry.fr
        </a>
      </div>
    </div>
  </main>
</template>
