<template>
  <main class="min-h-[calc(100vh+200px)] bg-[#BF4158]">
    <div class="container mx-auto px-4 py-20">
      <h1 class="text-4xl font-bold text-white mb-12">Contact</h1>
      <div class="max-w-2xl mx-auto">
        <form class="space-y-6">
          <div>
            <label for="name" class="block text-white mb-2">Name</label>
            <input
              type="text"
              id="name"
              class="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
              placeholder="Your name"
            />
          </div>
          <div>
            <label for="email" class="block text-white mb-2">Email</label>
            <input
              type="email"
              id="email"
              class="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label for="message" class="block text-white mb-2">Message</label>
            <textarea
              id="message"
              rows="6"
              class="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full py-4 bg-white text-[#BF4158] rounded-lg font-bold hover:bg-opacity-90 transition-all"
          >
            Send Message
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
