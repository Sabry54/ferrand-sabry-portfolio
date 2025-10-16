<template>
  <div
    class="min-h-screen bg-[#0f1115] text-white font-['Inter','Montserrat',system-ui,sans-serif]"
  >
    <!-- Hero / En-tête CV -->
    <section class="relative pt-40 md:pt-48 pb-8 md:pb-12">
      <div
        class="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.20),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.20),transparent_45%)]"
      ></div>
      <div
        class="max-w-6xl mx-auto px-4 grid md:grid-cols-[260px,1fr] gap-8 md:gap-12"
      >
        <!-- Avatar + coordonnées -->
        <aside
          class="group rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur relative overflow-hidden"
        >
          <div
            class="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-tr from-[#8b5cf6]/40 via-[#ec4899]/30 to-[#22d3ee]/30 blur-2xl"
          ></div>
          <img
            src="/images/cv/photocv.JPG?url"
            alt="Photo de profil"
            class="relative w-28 h-28 md:w-32 md:h-32 rounded-full object-cover ring-4 ring-white/10 shadow-lg mx-auto"
          />
          <h1 class="mt-5 text-xl md:text-2xl font-semibold text-center">
            Sabry Ferrand
          </h1>
          <p class="mt-1 text-center text-white/70 text-sm">
            Pierrepont, France
          </p>
          <div class="mt-5 space-y-2 text-sm">
            <a
              href="tel:+33789630340"
              class="flex items-center gap-2 hover:text-[#22d3ee] transition"
            >
              <svg
                viewBox="0 0 24 24"
                class="w-4 h-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1c0 1.22.2 2.42.57 3.56a1 1 0 0 1-.25 1.01l-2.2 2.22Z"
                />
              </svg>
              +33 7 89 63 03 40
            </a>
            <a
              href="mailto:ferrandsabry@gmail.com"
              class="flex items-center gap-2 hover:text-[#22d3ee] transition"
            >
              <svg
                viewBox="0 0 24 24"
                class="w-4 h-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5Z"
                />
              </svg>
              ferrandsabry@gmail.com
            </a>
          </div>
        </aside>

        <!-- Titre + profil -->
        <div class="space-y-6">
          <div class="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h2 class="text-2xl md:text-3xl font-semibold tracking-tight">
              Intégrateur front / webdesigner junior
            </h2>
            <!-- Encart repliable: Un peu d'histoire -->
            <div
              class="mt-4 rounded-xl bg-white/5 border border-white/10 overflow-hidden"
            >
              <!-- En-tête encart: titre + icône croix -->
              <button
                type="button"
                class="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-white/10 transition"
                @click="isStoryOpen = !isStoryOpen"
                aria-controls="story-panel"
                :aria-expanded="isStoryOpen ? 'true' : 'false'"
              >
                <span class="font-medium">À propos de moi</span>
                <span
                  class="relative inline-flex items-center justify-center w-6 h-6"
                  aria-hidden="true"
                >
                  <!-- Croix (2 traits) -->
                  <span
                    class="absolute w-4 h-[1.5px] bg-current transition-transform duration-300"
                    :class="isStoryOpen ? 'rotate-45' : 'rotate-0'"
                  ></span>
                  <span
                    class="absolute w-4 h-[1.5px] bg-current transition-transform duration-300"
                    :class="isStoryOpen ? '-rotate-45' : 'rotate-90'"
                  ></span>
                </span>
              </button>

              <!-- Contenu de l'encart -->
              <div
                v-if="isStoryOpen"
                id="story-panel"
                class="px-4 pb-4 text-white/85 text-sm leading-relaxed"
              >
                <p class="mb-3">
                  Mon parcours n’a rien de linéaire, et c’est sans doute ce qui
                  fait ma force. Après un bac STG option Communication et
                  Gestion des Ressources Humaines obtenu en 2009, j’ai poursuivi
                  mes études en psychologie à Nancy, sans aller jusqu’à la
                  licence. À l’époque, je suivais simplement le chemin “qu’il
                  fallait suivre” — jusqu’à ce que je réalise que ce n’était pas
                  vraiment le mien.
                </p>
                <p class="mb-3">
                  Ma première vraie expérience professionnelle, je l’ai vécue
                  chez Sidermat SARL. J’y suis entré par la petite porte, en
                  nettoyant l’intérieur des voitures, et j’y suis resté plus de
                  huit ans. Grâce à la confiance de mon employeur, j’ai pu
                  évoluer : logistique, gestion administrative, vente, puis
                  responsable de la location et responsable technique sur la
                  partie écrans LED géants. Cette expérience m’a tout appris :
                  la rigueur, l’autonomie, la polyvalence — et surtout,
                  l’importance d’apprendre chaque jour.
                </p>
                <p class="mb-3">
                  C’est là, au contact de graphistes, monteurs et techniciens
                  audiovisuels, que j’ai découvert ce qui m’animait vraiment :
                  la création. Fin 2019, j’ai choisi de partir pour me
                  reconvertir dans ce domaine, et j’ai eu la chance de suivre
                  une formation en webdesign via Pôle Emploi. Cette formation a
                  été un déclic : j’ai découvert les logiciels, les techniques,
                  les codes du graphisme et du développement web. J’avais enfin
                  trouvé ma voie.
                </p>
                <p class="mb-3">
                  J’ai ensuite intégré Concept Factory, une expérience
                  exceptionnelle à mes yeux : une équipe bienveillante, des
                  mentors passionnés, une communication fluide… J’y ai appris,
                  progressé, et surtout, j’y ai pris goût à ce que j’aime
                  profondément faire : créer.
                </p>
                <p class="mb-3">
                  Mais parfois, la vie personnelle prend le dessus. J’ai fait le
                  choix — sans doute trop vite — de quitter l’agence pour tenter
                  de sauver une relation. Cette décision a été difficile, et la
                  suite l’a été tout autant. J’ai travaillé dans d’autres
                  secteurs (intérim, banque, gestion administrative…), mais sans
                  jamais retrouver ce sentiment d’évidence, cette énergie que je
                  ressens quand je conçois un site, un logo ou une affiche.
                </p>
                <p class="mb-3">
                  Alors j’ai pris une décision : reprendre ma route là où je
                  l’avais laissée. Quitter un poste stable pour suivre à nouveau
                  ma passion n’est pas simple, mais c’est le pari de ma vie.
                </p>
                <p class="mb-3">
                  Aujourd’hui, je sais ce que je veux : travailler à nouveau en
                  agence, collaborer avec des créatifs, apprendre, partager, et
                  continuer à donner vie à des projets digitaux et visuels. J’ai
                  des compétences variées, une solide expérience du terrain, une
                  grande rigueur administrative — mais surtout, une vraie envie
                  de créer, d’innover, et de vibrer à travers mon travail.
                </p>
                <p class="mb-3">💬 En quelques mots</p>
                <p class="mb-3">
                  Si vous lisez ces lignes aujourd’hui, c’est probablement parce
                  que j’ai postulé dans votre agence. Et si je l’ai fait, c’est
                  parce que j’espère sincèrement pouvoir rejoindre une équipe
                  passionnée, dans laquelle je pourrai mettre à profit mes
                  compétences, apprendre encore, et surtout, créer avec plaisir.
                  Je ne cherche pas seulement un poste, je cherche un
                  environnement où la créativité a du sens, où chaque projet
                  devient une aventure collective.
                </p>
                <p>
                  Merci d’avoir pris le temps de me lire — peut-être le début
                  d’une belle collaboration.
                </p>
              </div>
            </div>
          </div>

          <!-- Compétences (mise en avant) -->
          <section
            id="competences"
            class="rounded-2xl bg-white/5 border border-white/10 p-6 ring-1 ring-inset ring-white/10"
          >
            <div class="flex items-center justify-between gap-4">
              <h3 class="text-xl md:text-2xl font-semibold">Compétences</h3>
            </div>
            <div class="mt-5 grid md:grid-cols-2 gap-5">
              <!-- Langues -->
              <div class="rounded-xl bg-white/5 border border-white/10 p-5">
                <div class="flex items-center gap-2 mb-3">
                  <svg
                    viewBox="0 0 24 24"
                    class="w-5 h-5 text-[#22d3ee]"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 3l9.5 7H2.5L12 3Zm0 18c-4.97 0-9-4.03-9-9h18c0 4.97-4.03 9-9 9Z"
                    />
                  </svg>
                  <h4 class="font-semibold">Langues</h4>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm"
                    >Français (langue maternelle)</span
                  >
                  <span
                    class="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm"
                    >Anglais (intermédiaire)</span
                  >
                </div>
              </div>

              <!-- Web & développement -->
              <div class="rounded-xl bg-white/5 border border-white/10 p-5">
                <div class="flex items-center gap-2 mb-3">
                  <svg
                    viewBox="0 0 24 24"
                    class="w-5 h-5 text-[#8b5cf6]"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 5h18v14H3V5Zm5 3 4 4-4 4-1.5-1.5L8 12l-1.5-1.5L8 8Zm8 8-4-4 4-4 1.5 1.5L16 12l1.5 1.5L16 16Z"
                    />
                  </svg>
                  <h4 class="font-semibold">Web & développement</h4>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span class="tag">Git</span>
                  <span class="tag">WordPress</span>
                  <span class="tag">Vercel</span>
                  <span class="tag">HTML</span>
                  <span class="tag">CSS</span>
                  <span class="tag">PHP</span>
                  <span class="tag">Tailwind</span>
                  <span class="tag">React</span>
                  <span class="tag">Vue.js</span>
                </div>
              </div>

              <!-- Design -->
              <div class="rounded-xl bg-white/5 border border-white/10 p-5">
                <div class="flex items-center gap-2 mb-3">
                  <svg
                    viewBox="0 0 24 24"
                    class="w-5 h-5 text-[#ec4899]"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25ZM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z"
                    />
                  </svg>
                  <h4 class="font-semibold">Design</h4>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span class="tag">Adobe Suite</span>
                  <span class="tag">Photoshop</span>
                  <span class="tag">illustrator</span>
                  <span class="tag">Premiere</span>
                  <span class="tag">After effect</span>
                  <span class="tag">Indesign</span>
                </div>
              </div>

              <!-- IA et outils numériques -->
              <div class="rounded-xl bg-white/5 border border-white/10 p-5">
                <div class="flex items-center gap-2 mb-3">
                  <svg
                    viewBox="0 0 24 24"
                    class="w-5 h-5 text-[#22d3ee]"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 2a7 7 0 0 1 7 7c0 1.38-.4 2.66-1.1 3.73L12 22l-5.9-9.27A6.98 6.98 0 0 1 5 9a7 7 0 0 1 7-7Z"
                    />
                  </svg>
                  <h4 class="font-semibold">IA et outils numériques</h4>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span class="tag">ChatGPT</span>
                  <span class="tag">Midjourney</span>
                  <span class="tag">Claude</span>
                  <span class="tag">Cursor</span>
                </div>
              </div>

              <!-- Autres -->
              <div
                class="rounded-xl bg-white/5 border border-white/10 p-5 md:col-span-2"
              >
                <div class="flex items-center gap-2 mb-3">
                  <svg
                    viewBox="0 0 24 24"
                    class="w-5 h-5 text-white/80"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M4 6h16v2H4V6Zm0 5h16v2H4v-2Zm0 5h16v2H4v-2Z" />
                  </svg>
                  <h4 class="font-semibold">Autres</h4>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span class="tag">Olympic Banking System</span>
                  <span class="tag">SAP</span>
                  <span class="tag">MS365</span>
                </div>
              </div>
            </div>
          </section>

          <!-- Expériences -->
          <section
            id="experiences"
            class="rounded-2xl bg-white/5 border border-white/10 p-6"
          >
            <h3 class="text-xl md:text-2xl font-semibold">
              Expériences professionnelles
            </h3>
            <div class="mt-4 grid gap-4">
              <!-- Carte -->
              <article
                class="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:bg-white/10 hover:border-[#22d3ee]/40"
              >
                <div class="flex flex-wrap items-start justify-between gap-2">
                  <h4 class="font-semibold">
                    Assistant commercial et administratif – Globe Voyage
                    (Luxembourg)
                  </h4>
                  <span class="text-xs text-white/70">01/2025 – 08/2025</span>
                </div>
                <ul
                  class="mt-2 list-disc list-inside text-white/85 space-y-1 text-sm"
                >
                  <li>Soutien administratif aux commerciaux et cadres</li>
                  <li>Préparation des dossiers clients</li>
                  <li>Gestion des litiges</li>
                  <li>Booking logistique pour les départs clients</li>
                </ul>
              </article>

              <article
                class="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:bg-white/10 hover:border-[#22d3ee]/40"
              >
                <div class="flex flex-wrap items-start justify-between gap-2">
                  <h4 class="font-semibold">
                    Agent comptable – SMBC Nikko Bank (Luxembourg)
                  </h4>
                  <span class="text-xs text-white/70">12/2022 – 12/2024</span>
                </div>
                <ul
                  class="mt-2 list-disc list-inside text-white/85 space-y-1 text-sm"
                >
                  <li>
                    Calcul de NAV de structures UCITS / AIFM / Private Equity
                  </li>
                  <li>Reporting mensuel, trimestriel et annuel</li>
                  <li>Paiement des dividendes et distributions automatiques</li>
                </ul>
              </article>

              <article
                class="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:bg-white/10 hover:border-[#22d3ee]/40"
              >
                <div class="flex flex-wrap items-start justify-between gap-2">
                  <h4 class="font-semibold">
                    Customer Care – Rentokil (Luxembourg)
                  </h4>
                  <span class="text-xs text-white/70">11/2021 – 11/2022</span>
                </div>
                <ul
                  class="mt-2 list-disc list-inside text-white/85 space-y-1 text-sm"
                >
                  <li>Gestion dossiers, litiges, résiliations</li>
                  <li>Encodage / suivi contrats, factures, prospects</li>
                </ul>
              </article>

              <article
                class="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:bg-white/10 hover:border-[#22d3ee]/40"
              >
                <div class="flex flex-wrap items-start justify-between gap-2">
                  <h4 class="font-semibold">
                    Intégrateur Front-End – Concept Factory (Luxembourg)
                  </h4>
                  <span class="text-xs text-white/70">04/2021 – 10/2021</span>
                </div>
                <ul
                  class="mt-2 list-disc list-inside text-white/85 space-y-1 text-sm"
                >
                  <li>Intégration front sur CMS selon maquette</li>
                  <li>Création de newsletters</li>
                  <li>
                    Création de contenus digitaux (Illustrator / Photoshop)
                  </li>
                </ul>
              </article>

              <article
                class="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:bg-white/10 hover:border-[#22d3ee]/40"
              >
                <div class="flex flex-wrap items-start justify-between gap-2">
                  <h4 class="font-semibold">
                    Assistant commercial et administratif – Sidermat (France)
                  </h4>
                  <span class="text-xs text-white/70">2013 – 2020</span>
                </div>
                <ul
                  class="mt-2 list-disc list-inside text-white/85 space-y-1 text-sm"
                >
                  <li>Soutien administratif et coordination commerciale</li>
                  <li>
                    Planification de réunions, gestion site web et réseaux
                    sociaux
                  </li>
                  <li>Édition de documents de vente et publipostages</li>
                  <li>Gestion des litiges</li>
                </ul>
              </article>
            </div>
          </section>

          <!-- Formation -->
          <section
            id="formation"
            class="rounded-2xl bg-white/5 border border-white/10 p-6"
          >
            <h3 class="text-xl md:text-2xl font-semibold">Formation</h3>
            <ul class="mt-3 space-y-2">
              <li class="flex items-start justify-between gap-2">
                <span>2021 → BTS Webdesigner – EESC, Longwy</span>
              </li>
              <li class="flex items-start justify-between gap-2">
                <span>2009 → Bac STG CGRH – Lycée Pierre Bayle, Sedan</span>
              </li>
            </ul>
          </section>

          <!-- Centres d’intérêt -->
          <section class="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h3 class="text-xl md:text-2xl font-semibold">Centres d’intérêt</h3>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="tag">course à pied</span>
              <span class="tag">natation</span>
              <span class="tag">fitness</span>
              <span class="tag">nouvelles technologies</span>
              <span class="tag">printer</span>
              <span class="tag">elearning</span>
              <span class="tag">IA</span>
              <span class="tag">cinéma</span>
              <span class="tag">jeux vidéo</span>
              <span class="tag">mangas</span>
            </div>
          </section>

          <!-- Divers -->
          <section class="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h3 class="text-xl md:text-2xl font-semibold">Divers</h3>
            <div class="mt-3 grid sm:grid-cols-2 gap-3">
              <div class="rounded-xl bg-white/5 border border-white/10 p-4">
                <p class="text-white/80 text-sm">Permis B</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

// État de l'encart "Un peu d'histoire"
const isStoryOpen = ref(false);
</script>

<style scoped>
/* Petites animations accessibles (motion-safe) */
@media (prefers-reduced-motion: no-preference) {
  .hover\:-translate-y-0\.5:hover {
    transform: translateY(-2px);
  }
}

/* Badge tag réutilisable */
.tag {
  @apply px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sm;
}
</style>
