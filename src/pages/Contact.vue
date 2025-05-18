<template>
  <main class="py-20 bg-[#BF4158]">
    <div class="container pt-20 pb-40">
      <h1 class="text-4xl font-bold text-white mb-8">Contact</h1>
      <div class="max-w-2xl mx-auto">
        <form class="space-y-6">
          <div>
            <label for="name" class="block text-white mb-2">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label for="email" class="block text-white mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label for="message" class="block text-white mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              class="w-full p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
              placeholder="Votre message"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full md:w-auto px-8 py-3 bg-white text-[#BF4158] font-bold rounded-lg hover:bg-opacity-90 transition-all"
          >
            Envoyer
          </button>
        </form>

        <div class="mt-12 text-center">
          <p class="text-white/80">Ou contactez-moi directement par email :</p>
          <a
            href="mailto:contact@ferrandsabry.fr"
            class="text-white hover:text-white/80 transition-colors"
          >
            contact@ferrandsabry.fr
          </a>
        </div>
      </div>
    </div>
  </main>
</template>
