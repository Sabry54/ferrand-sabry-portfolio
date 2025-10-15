<template>
  <div class="home-test" :class="`bg-slide-${currentSlide + 1}`">
    <div class="cursor"></div>
    <!-- Container des slides -->
    <div class="slides-container" :class="{ 'mobile-view': isMobile }">
      <!-- Slide 1 -->
      <section class="slide" :class="{ active: currentSlide === 0 }">
        <div class="slide-content">
          <div class="squares-container">
            <!-- Premier carré : Titre et texte -->
            <div class="square text-square">
              <h2
                class="slide1-title"
                :class="{ 'animate-text': currentSlide === 0 }"
              >
                Imaginer, concevoir, révéler vos idées en images
              </h2>
              <p
                class="description-text"
                :class="{ 'animate-text': currentSlide === 0 }"
              >
                Graphisme, web, identité visuelle, logo, photographie, print et
                digital : mon métier, c'est de donner forme et sens à vos
                projets, quel que soit le support. Curieux et à l'écoute,
                j'explore chaque univers créatif pour façonner des visuels
                distinctifs qui parlent autant qu'ils séduisent. Du brief à la
                réalisation, j'accompagne les marques et entrepreneurs dans
                leurs démarches visuelles : interfaces web, identité graphique,
                création de logos, supports de communication, photos et contenus
                pour réseaux sociaux. Mon approche : mêler technique et
                intuition, pour des résultats personnalisés et percutants,
                pensés pour créer de l'émotion et capter l'attention, en ligne
                comme sur papier.
              </p>
            </div>

            <!-- Deuxième carré : Image Luffy -->
            <div class="square">
              <img
                src="../assets/images/home/002.png"
                alt="Image principale"
                class="luffy-image clickable-image"
                @click="openImageModal(image002)"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Slide 2 -->
      <section class="slide" :class="{ active: currentSlide === 1 }">
        <div class="slide-content">
          <div class="squares-container">
            <!-- Premier carré : Titre et texte -->
            <div
              class="square text-square"
              :class="{ 'full-width-mobile': isMobile }"
            >
              <h2
                class="slide2-title"
                :class="{ 'animate-text': currentSlide === 1 }"
              >
                Mes compétences
              </h2>
              <p
                class="description-text"
                :class="{ 'animate-text': currentSlide === 1 }"
              >
                Je maîtrise un large éventail de techniques créatives : identité
                visuelle, création de logos, webdesign, supports print comme
                affiches et flyers, photographie, retouche d'images, montage
                vidéo et effets motion, ainsi que la création de contenus
                visuels pour réseaux sociaux. Ces compétences me permettent de
                concevoir des visuels qui attirent, marquent et racontent des
                histoires, en alliant technique et intuition selon les besoins
                de chaque projet.
              </p>
              <router-link
                to="/about"
                class="fs-slide-button font-light desktop-only"
                :class="{ 'animate-quote': currentSlide === 1 }"
                v-if="!isMobile"
              >
                découvrir
                <span class="fs-slide-arrow font-light">→</span>
              </router-link>
            </div>

            <!-- Deuxième carré : Image Moisite -->
            <div class="square">
              <img
                src="../assets/images/home/moisite.png"
                alt="Moisite"
                class="luffy-image"
              />
              <router-link
                to="/about"
                class="fs-slide-button font-light mobile-only"
                :class="{ 'animate-quote': currentSlide === 1 }"
                style="margin-top: 16px"
                v-if="isMobile"
              >
                découvrir
                <span class="fs-slide-arrow font-light">→</span>
              </router-link>
            </div>
          </div>
        </div>
      </section>

      <!-- Slide 3 -->
      <section class="slide" :class="{ active: currentSlide === 2 }">
        <div class="slide-content">
          <div class="squares-container slide-3-container">
            <!-- Premier carré : Titre et texte -->
            <div class="square text-square full-width">
              <h2
                class="slide3-title"
                :class="{ 'animate-text': currentSlide === 2 }"
              >
                Présentation de quelques projets
              </h2>
              <p
                class="fs-slide-button font-light"
                :class="{ 'animate-quote': currentSlide === 2 }"
                style="margin-top: 0.5rem"
              >
                exemple de projets midjourney
              </p>
              <section class="cards">
                <div class="three-d-wrapper">
                  <router-link
                    :to="{
                      path: '/portfolio',
                      query: { section: portfolioCards[0]?.folder },
                    }"
                    class="card portfolio-1 animated"
                    style="display: block; text-decoration: none"
                    :style="{ '--front': `url(${portfolioCards[0]?.image})` }"
                  ></router-link>
                </div>
                <div class="three-d-wrapper hidden md:block">
                  <router-link
                    :to="{
                      path: '/portfolio',
                      query: { section: portfolioCards[1]?.folder },
                    }"
                    class="card portfolio-2 animated"
                    style="display: block; text-decoration: none"
                    :style="{ '--front': `url(${portfolioCards[1]?.image})` }"
                  ></router-link>
                </div>
                <div class="three-d-wrapper hidden md:block">
                  <router-link
                    :to="{
                      path: '/portfolio',
                      query: { section: portfolioCards[2]?.folder },
                    }"
                    class="card portfolio-3 animated"
                    style="display: block; text-decoration: none"
                    :style="{ '--front': `url(${portfolioCards[2]?.image})` }"
                  ></router-link>
                </div>
                <div class="three-d-wrapper hidden md:block">
                  <router-link
                    :to="{
                      path: '/portfolio',
                      query: { section: portfolioCards[3]?.folder },
                    }"
                    class="card portfolio-4 animated"
                    style="display: block; text-decoration: none"
                    :style="{ '--front': `url(${portfolioCards[3]?.image})` }"
                  ></router-link>
                </div>
              </section>
              <router-link
                to="/portfolio"
                class="fs-slide-button font-light"
                :class="{ 'animate-quote': currentSlide === 2 }"
              >
                découvrir
                <span class="fs-slide-arrow font-light">→</span>
              </router-link>
            </div>
          </div>
        </div>
      </section>

      <!-- Slide 4 -->
      <section class="slide" :class="{ active: currentSlide === 3 }">
        <div class="slide-content">
          <div class="squares-container">
            <!-- Premier carré : Titre et texte -->
            <div class="square text-square">
              <h2
                class="slide4-title"
                :class="{ 'animate-text': currentSlide === 3 }"
              >
                Discutons
              </h2>
              <p
                class="description-text"
                :class="{ 'animate-text': currentSlide === 3 }"
              >
                Vous avez un projet, une idée ou souhaitez en savoir plus sur
                mon approche ?<br />
                Je suis disponible pour échanger, que ce soit autour d’un café,
                d’un verre ou lors d’un simple appel.<br />
                Sans engagement, juste une conversation sincère pour explorer
                comment je peux apporter ma créativité et mon expertise à votre
                équipe.
              </p>
              <p
                class="description-text"
                :class="{ 'animate-text': currentSlide === 3 }"
              ></p>
            </div>

            <!-- Deuxième carré : Coordonnées à droite -->
            <div class="square flex flex-col items-center justify-center gap-4">
              <a
                href="mailto:ferrandsabry@gmail.com"
                class="contact-email"
                aria-label="Envoyer un e‑mail à ferrandsabry@gmail.com"
              >
                ferrandsabry@gmail.com
              </a>
              <a
                href="https://www.instagram.com/brica_brac54/"
                target="_blank"
                rel="noopener noreferrer"
                class="social-link instagram-link"
                aria-label="Instagram @brica_brac54"
              >
                <svg
                  class="instagram-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.75-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z"
                  />
                </svg>
                <span class="instagram-handle">@brica_brac54</span>
              </a>
              <a
                href="https://www.youtube.com/@SF-vm8nk/featured"
                target="_blank"
                rel="noopener noreferrer"
                class="social-link youtube-link"
                aria-label="YouTube les videos"
              >
                <svg
                  class="youtube-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <!-- YouTube logo -->
                  <path
                    d="M23.498 6.186a3.004 3.004 0 0 0-2.116-2.123C19.804 3.5 12 3.5 12 3.5s-7.804 0-9.382.563A3.004 3.004 0 0 0 .502 6.186C0 7.77 0 12 0 12s0 4.23.502 5.814a3.004 3.004 0 0 0 2.116 2.123C4.196 20.5 12 20.5 12 20.5s7.804 0 9.382-.563a3.004 3.004 0 0 0 2.116-2.123C24 16.23 24 12 24 12s0-4.23-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z"
                  />
                </svg>
                <span class="youtube-handle">les videos</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Overlay pour l'animation -->
    <div class="transition-overlay"></div>

    <!-- Navigation -->
    <nav class="slide-navigation" :class="{ 'hidden-mobile': isMobile }">
      <button
        v-for="(_, index) in 4"
        :key="index"
        @click="goToSlide(index)"
        :class="{ active: currentSlide === index }"
        class="nav-dot"
      >
        <span class="sr-only">Slide {{ index + 1 }}</span>
      </button>
    </nav>

    <!-- Footer en dehors des slides -->
    <footer
      class="legal-footer"
      :class="{ 'show-footer': currentSlide === 3, mobile1: isMobile }"
    >
      <div class="footer-content">
        <p class="footer-text">© 2025 Ferrand Sabry. All rights reserved.</p>
        <div class="footer-links">
          <router-link to="/legal-notice" class="footer-link"
            >Mentions légales</router-link
          >
          <router-link to="/privacy-policy" class="footer-link"
            >Politique de confidentialité</router-link
          >
        </div>
      </div>
    </footer>

    <!-- Modal pour afficher l'image en grand -->
    <div v-if="showImageModal" class="image-modal" @click="closeImageModal">
      <div class="modal-content" @click.stop>
        <button
          class="close-button"
          @click="closeImageModal"
          aria-label="Fermer"
        >
          <span>&times;</span>
        </button>
        <img :src="modalImageSrc" alt="Image agrandie" class="modal-image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from "vue";
import { gsap } from "gsap";
import Footer from "../components/Footer.vue";
import { initHolographicEffect } from "../components/HolographicEffect.js";
import { useRoute, useRouter } from "vue-router";
import image002 from "../assets/images/home/002.png";

const currentSlide = ref(0);
const isAnimating = ref(false);
const isMobile = ref(window.innerWidth <= 768);
const cursor = ref(null);

// Variables pour la modal d'image
const showImageModal = ref(false);
const modalImageSrc = ref("");

const mosaicCanvas = ref(null);
const luffyImage = ref(null);
let animationFrame = null;

// Variables pour les cartes
const portfolioCards = ref([]);
const portfolioFolders = [
  {
    name: "divers",
    title: "Divers",
    images: [
      "image00051.png",
      "image00052.png",
      "image00066.png",
      "image00067.png",
      "image00068.png",
      "image00069.png",
      "image00085.png",
      "image00087.png",
      "image00095.png",
      "image00096.png",
      "image00098.png",
    ],
  },
  {
    name: "réaliste",
    title: "Réaliste",
    images: [
      "image00032.png",
      "image00033.png",
      "image00034.png",
      "image00043.png",
      "image00047.png",
      "image00048.png",
      "image00049.png",
      "image00050.png",
      "image00101.png",
      "image00102.png",
      "image00103.png",
      "image00104.png",
      "image00116.png",
      "image00117.png",
      "image00118.png",
      "image00119.png",
      "image00120.png",
      "image00123.png",
      "image00124.png",
      "image00125.png",
      "image00126.png",
      "image00127.png",
      "image00128.png",
      "image00142.png",
      "image00143.png",
      "image00144.png",
      "image00145.png",
    ],
  },
  {
    name: "live-action",
    title: "Live Action",
    images: ["image00053.png", "image00054.png", "image00055.png"],
  },
  {
    name: "mangas",
    title: "Mangas",
    images: [
      "0_1.webp",
      "0_3.webp",
      "image00001.png",
      "image00002.png",
      "image00003.png",
      "image00004.png",
      "image00005.png",
      "image00006.png",
      "image00007.png",
      "image00008.png",
      "image00009.png",
      "image00010.png",
      "image00011.png",
      "image00012.png",
      "image00013.png",
      "image00014.png",
      "image00015.png",
      "image00016.png",
      "image00017.png",
      "image00018.png",
      "image00019.png",
      "image00020.png",
      "image00021.png",
      "image00022.png",
      "image00023.png",
      "image00024.png",
      "image00025.png",
      "image00026.png",
      "image00027.png",
      "image00028.png",
      "image00029.png",
      "image00030.png",
      "image00031.png",
      "image00035.png",
      "image00036.png",
      "image00037.png",
      "image00039.png",
      "image00040.png",
      "image00041.png",
      "image00044.png",
      "image00045.png",
      "image00046.png",
      "image00081.png",
      "image00137.png",
      "image00138.png",
      "image00139.png",
      "image00140.png",
      "image00141.png",
      "image00146.png",
      "image00147.png",
      "image00148.png",
      "image00161.png",
      "image00162.png",
      "image00163.png",
      "image00164.png",
      "image00165.png",
      "image00166.png",
      "image00167.png",
      "image00168.png",
      "image00169.png",
      "image00170.png",
    ],
  },
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomImage(folder) {
  const idx = getRandomInt(folder.images.length);
  const imageName = folder.images[idx];
  // Vérifier si l'image est en .webp
  const isWebp = imageName.toLowerCase().endsWith(".webp");
  // Chemin compatible avec la structure du dossier public en production
  return `/images/portfolio/${folder.name}/${imageName}`;
}

function getRandomPortfolioCards(count) {
  // On clone et on mélange le tableau
  const shuffled = [...portfolioFolders].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map((folder) => ({
    title: folder.title,
    image: getRandomImage(folder),
    folder: folder.name,
  }));
}

const updatePortfolioCards = () => {
  if (window.innerWidth <= 768) {
    portfolioCards.value = getRandomPortfolioCards(1);
  } else {
    portfolioCards.value = getRandomPortfolioCards(4);
  }
};

// Intervalle pour changer les cartes
let cardsInterval;

const goToSlide = (index) => {
  if (isAnimating.value || index < 0 || index > 3) return;

  const direction = index - currentSlide.value;
  isAnimating.value = true;

  // Récupérer tous les slides
  const slides = document.querySelectorAll(".slide");
  const currentSlideEl = slides[currentSlide.value];
  const nextSlideEl = slides[index];

  if (currentSlideEl && nextSlideEl) {
    // Sur mobile, on change juste le slide actif sans animation
    if (isMobile.value) {
      currentSlideEl.style.opacity = "0";
      currentSlideEl.style.visibility = "hidden";
      nextSlideEl.style.opacity = "1";
      nextSlideEl.style.visibility = "visible";
      currentSlide.value = index;
      isAnimating.value = false;
      return;
    }

    // Sur desktop, on utilise GSAP pour l'animation
    const timeline = gsap.timeline({
      onComplete: () => {
        isAnimating.value = false;
      },
    });

    // Animation du slide actuel
    timeline.to(currentSlideEl, {
      opacity: 0,
      x: direction > 0 ? -100 : 100,
      rotationY: direction > 0 ? 30 : -30,
      scale: 1.05,
      duration: 1.2,
      ease: "power2.inOut",
      transformPerspective: 2000,
      boxShadow: "0 0 50px rgba(0, 0, 0, 0.5)",
    });

    // Animation du prochain slide
    timeline.fromTo(
      nextSlideEl,
      {
        opacity: 0,
        x: direction > 0 ? 100 : -100,
        rotationY: direction > 0 ? -30 : 30,
        scale: 1.05,
        boxShadow: "0 0 50px rgba(0, 0, 0, 0.5)",
      },
      {
        opacity: 1,
        x: 0,
        rotationY: 0,
        scale: 1,
        duration: 1.2,
        ease: "power2.inOut",
        transformPerspective: 2000,
        boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      },
      "-=1.2"
    );

    // Mettre à jour le slide actuel
    currentSlide.value = index;
  }
};

// Gestion du scroll
const handleWheel = (e) => {
  if (isMobile.value) return; // Désactive le scroll horizontal sur mobile
  e.preventDefault();
  if (isAnimating.value) return;

  const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
  if (Math.abs(delta) < 50) return;

  const direction = delta > 0 ? 1 : -1;
  if (
    (direction > 0 && currentSlide.value < 3) ||
    (direction < 0 && currentSlide.value > 0)
  ) {
    goToSlide(currentSlide.value + direction);
  }
};

// Gestion du touch
const touchStart = ref(0);
const touchEnd = ref(0);

const handleTouchStart = (e) => {
  if (isMobile.value) return; // Désactive le swipe sur mobile
  touchStart.value = e.touches[0].clientX;
};

const handleTouchMove = (e) => {
  if (isMobile.value) return; // Désactive le swipe sur mobile
  e.preventDefault();
  touchEnd.value = e.touches[0].clientX;
};

const handleTouchEnd = () => {
  if (isMobile.value) return; // Désactive le swipe sur mobile
  const swipeDistance = touchStart.value - touchEnd.value;
  if (Math.abs(swipeDistance) > 50) {
    const direction = swipeDistance > 0 ? 1 : -1;
    if (
      (direction > 0 && currentSlide.value < 3) ||
      (direction < 0 && currentSlide.value > 0)
    ) {
      goToSlide(currentSlide.value + direction);
    }
  }
};

function updateIsMobile() {
  isMobile.value = window.innerWidth <= 768;
}

const initMosaicEffect = () => {
  const canvas = mosaicCanvas.value;
  const img = luffyImage.value;
  if (!canvas || !img) return;

  const ctx = canvas.getContext("2d");
  const gridSize = 8;

  // Attendre que l'image soit complètement chargée
  const updateCanvasSize = () => {
    const container = canvas.parentElement;
    const containerRect = container.getBoundingClientRect();

    // Définir les dimensions du canvas pour qu'il corresponde au conteneur
    canvas.width = containerRect.width;
    canvas.height = containerRect.height;

    const tileSize = {
      width: canvas.width / gridSize,
      height: canvas.height / gridSize,
    };

    // Créer les tuiles
    const tiles = [];
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        tiles.push({
          x: x * tileSize.width,
          y: y * tileSize.height,
          width: tileSize.width,
          height: tileSize.height,
          progress: 0,
          delay: Math.random() * 0.2,
        });
      }
    }

    // Mélanger les tuiles pour un effet aléatoire
    tiles.sort(() => Math.random() - 0.5);

    // Animation des tuiles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#ffb3ba";

      let allComplete = true;
      tiles.forEach((tile) => {
        if (tile.progress < 1) {
          allComplete = false;
          tile.progress += 0.015;
        }

        const scale = 1 - tile.progress;
        const x = tile.x + (tile.width * (1 - scale)) / 2;
        const y = tile.y + (tile.height * (1 - scale)) / 2;
        const width = tile.width * scale;
        const height = tile.height * scale;

        ctx.beginPath();
        ctx.roundRect(x, y, width, height, 2);
        ctx.fill();
      });

      if (!allComplete) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        canvas.style.opacity = "0";
      }
    };

    // Démarrer l'animation
    setTimeout(() => {
      animate();
    }, 800);
  };

  // S'assurer que l'image est chargée avant de démarrer l'animation
  if (img.complete) {
    updateCanvasSize();
  } else {
    img.onload = updateCanvasSize;
  }
};

// Fonction pour gérer la soumission du formulaire
const handleSubmit = (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  // Redirection vers mailto avec les données
  const mailtoLink = `mailto:ferrandsabry@gmail.com?subject=${encodeURIComponent(
    formData.get("name")
  )} - ${encodeURIComponent(formData.get("email"))}&body=${encodeURIComponent(
    formData.get("message")
  )}`;
  window.location.href = mailtoLink;
};

// Fonctions pour la modal d'image
const openImageModal = (imageSrc) => {
  modalImageSrc.value = imageSrc;
  showImageModal.value = true;
  // Empêcher le scroll du body quand la modal est ouverte
  document.body.style.overflow = "hidden";
};

const closeImageModal = () => {
  showImageModal.value = false;
  modalImageSrc.value = "";
  // Restaurer le scroll du body
  document.body.style.overflow = "auto";
};

// Gestion du curseur personnalisé
const handleMouseMove = (e) => {
  if (isMobile.value) return;
  const cursorEl = document.querySelector(".cursor");
  if (cursorEl) {
    cursorEl.style.left = e.clientX + "px";
    cursorEl.style.top = e.clientY + "px";
  }
};

const route = useRoute();
const router = useRouter();

// Gérer le paramètre slide dans l'URL
onMounted(() => {
  // Remonter en haut de la page
  window.scrollTo(0, 0);

  const slideParam = route.query.slide;
  if (slideParam) {
    const slideIndex = parseInt(slideParam);
    if (!isNaN(slideIndex) && slideIndex >= 0 && slideIndex <= 3) {
      goToSlide(slideIndex);
    }
  }

  window.addEventListener("wheel", handleWheel, { passive: false });
  window.addEventListener("touchstart", handleTouchStart);
  window.addEventListener("touchmove", handleTouchMove, { passive: false });
  window.addEventListener("touchend", handleTouchEnd);
  window.addEventListener("resize", updateIsMobile);
  window.addEventListener("mousemove", handleMouseMove);
  updateIsMobile();

  // Initialiser l'effet holographique
  initHolographicEffect();

  // Initialiser les cartes
  updatePortfolioCards();

  // Changer les cartes toutes les 30 secondes
  cardsInterval = setInterval(() => {
    updatePortfolioCards();
  }, 30000);

  // Animation du titre rotatif pour slide 1
  const titleContainer = document.querySelector(
    ".slide:nth-child(1) .title-container"
  );
  if (titleContainer) {
    const titles = titleContainer.querySelectorAll("h2");
    let currentIndex = 0;

    const animateTitles = () => {
      gsap.to(titles[currentIndex], {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          currentIndex = (currentIndex + 1) % titles.length;
          gsap.to(titles[currentIndex], {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.inOut",
            onComplete: () => {
              setTimeout(animateTitles, 1500);
            },
          });
        },
      });
    };

    setTimeout(animateTitles, 1500);
  }

  // Animation du titre, texte et citation pour slide 2
  const title2 = document.querySelector(".slide:nth-child(2) .animate-title");
  const text2 = document.querySelector(".slide:nth-child(2) .animate-text");
  const quote2 = document.querySelector(".slide:nth-child(2) .animate-quote");

  if (title2 && text2 && quote2) {
    gsap.fromTo(
      title2,
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.2,
      }
    );

    gsap.fromTo(
      text2,
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.6,
      }
    );

    gsap.fromTo(
      quote2,
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 1,
      }
    );
  }
});

// Surveiller les changements de route
watch(
  () => route.path,
  () => {
    window.scrollTo(0, 0);
  }
);

onUnmounted(() => {
  window.removeEventListener("wheel", handleWheel);
  window.removeEventListener("touchstart", handleTouchStart);
  window.removeEventListener("touchmove", handleTouchMove);
  window.removeEventListener("touchend", handleTouchEnd);
  window.removeEventListener("resize", updateIsMobile);
  window.removeEventListener("mousemove", handleMouseMove);
  clearInterval(cardsInterval);

  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Aladin&display=swap");

/* Style global pour le curseur */
:root {
  cursor: none;
}

.cursor {
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  mix-blend-mode: difference;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease;
}

.home-test {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  will-change: background-color;
}

/* Classes de fond pour le conteneur principal */
.bg-slide-1 {
  background-color: #f2f2f2;
}

.bg-slide-2 {
  background-color: #f2f2f2;
}

.bg-slide-3 {
  background-color: #f2f2f2;
}

.bg-slide-4 {
  background-color: #f2f2f2;
}

/* Styles pour le header transparent */
:deep(header) {
  background-color: transparent;
}

/* Couleurs des slides */
.slide:nth-child(1) {
  background-color: #f2f2f2;
}

.slide:nth-child(2) {
  background-color: #f2f2f2;
}

.slide:nth-child(3) {
  background-color: #f2f2f2;
}

.slide:nth-child(4) {
  background-color: #f2f2f2;
}

.slides-container {
  flex: 1;
  position: relative;
  width: 100%;
  height: calc(100vh - 72px);
  margin-top: 72px;
  overflow: hidden;
  perspective: 2000px;
  transform-style: preserve-3d;
}

.slides-container.mobile-view {
  height: auto;
  overflow-y: auto;
  overflow-x: hidden;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform, opacity;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transition: box-shadow 0.3s ease;
}

.slide.active {
  opacity: 1;
  visibility: visible;
}

/* Suppression de l'effet de survol */
.slide::after {
  display: none;
}

.slide-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(1rem, 3vw, 4rem);
}

/* Overlay pour l'animation */
.transition-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #2d3748, #4a5568);
  clip-path: circle(0% at 50% 50%);
  pointer-events: none;
  z-index: 1000;
}

/* Navigation */
.slide-navigation {
  position: fixed;
  left: clamp(1rem, 2vw, 2rem);
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 1vw, 1rem);
  z-index: 50;
}

.nav-dot {
  width: clamp(6px, 0.8vw, 12px);
  height: clamp(6px, 0.8vw, 12px);
  border-radius: 50%;
  background: transparent;
  border: 1px solid black;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
}

.nav-dot.active::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 60%;
  background: black;
  border-radius: 50%;
}

.nav-dot:hover:not(.active) {
  border-color: black;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Styles pour le conteneur des carrés */
.squares-container {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: 100%;
  height: 100%;
  max-width: min(2000px, 90vw);
  margin: 0 auto;
  gap: clamp(1rem, 3vw, 4rem);
  align-items: center;
}

/* Styles pour les carrés */
.square {
  height: 100%;
  max-height: calc(100vh - 72px - 4rem);
  padding: clamp(1rem, 2vw, 3rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.text-square {
  gap: clamp(1rem, 2vw, 3rem);
  padding-left: clamp(1rem, 2vw, 3rem);
  position: relative;
  z-index: 10;
}

/* Styles pour le titre rotatif */
.rotating-title {
  position: relative;
  height: 30%;
  max-height: 200px;
  overflow: hidden;
}

.title-container {
  position: relative;
  height: 100%;
}

.responsive-title {
  display: none;
  font-family: "Aladin", cursive;
  color: black;
  font-size: clamp(1.5rem, 6vw, 6rem);
  line-height: 1.1;
  text-align: left;
  font-weight: 400;
}

.title-container h2 {
  position: absolute;
  width: 100%;
  opacity: 0;
  transform: translateY(20px);
  margin: 0;
  padding: 0;
  line-height: 1.1;
  color: black;
  text-align: left;
  font-size: clamp(1rem, 4vw, 6rem);
  white-space: nowrap;
  font-family: "Aladin", cursive;
  font-weight: 400;
}

.title-container h2:first-child {
  opacity: 1;
  transform: translateY(0);
}

.description-text {
  font-size: clamp(0.75rem, 1.2vw, 1.5rem);
  line-height: 1.4;
  color: black;
  max-width: min(60rem, 90%);
  text-align: left;
  margin-top: clamp(0.5rem, 1vw, 1.5rem);
  overflow-wrap: break-word;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
}

.quote-text {
  font-size: clamp(0.65rem, 1vw, 1.2rem);
  line-height: 1.4;
  color: black;
  max-width: min(60rem, 90%);
  text-align: left;
  margin-top: clamp(1.5rem, 2vw, 3rem);
  font-family: "Aladin", cursive;
  font-weight: 400;
  font-style: italic;
}

.quote-author {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.9em;
}

/* Responsive */
@media (max-width: 768px) {
  /* Slide 2: aligner le titre à droite en mobile */
  .slide:nth-child(2) .slide2-title {
    text-align: right !important;
  }
  /* Slide 2: aligner le paragraphe et le bouton à droite en mobile */
  .slide:nth-child(2) .description-text {
    text-align: right !important;
  }
  .slide:nth-child(2) .fs-slide-button {
    margin-left: auto !important;
    margin-right: 0 !important;
    text-align: right !important;
    display: inline-flex !important;
  }
  .slides-container.mobile-view .slide {
    position: relative;
    opacity: 1 !important;
    visibility: visible !important;
    height: auto;
    min-height: auto;
    padding: 1rem 0;
    margin-bottom: 2rem;
  }

  .slide-content {
    padding: 1rem;
  }

  .squares-container {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 1rem;
    height: auto;
    margin-bottom: 0;
  }

  .square {
    height: auto;
    max-height: none;
    padding: 1rem;
    margin-bottom: 0;
  }

  .text-square {
    padding: 1rem;
    gap: 1rem;
  }

  .more-button {
    margin-bottom: 1rem;
  }

  .rotating-title,
  .description-text,
  .more-button,
  .luffy-image {
    opacity: 1 !important;
    visibility: visible !important;
    transform: none !important;
  }

  .rotating-title {
    height: auto;
    max-height: none;
  }

  .title-container {
    display: none;
  }

  .slide1-title,
  .slide2-title,
  .slide3-title,
  .slide4-title {
    display: block !important;
    font-size: clamp(1.2rem, 3vw, 2.5rem) !important;
    line-height: 1.2 !important;
    text-align: left !important;
    margin-bottom: 1rem !important;
    opacity: 1 !important;
    visibility: visible !important;
    transform: none !important;
    white-space: normal !important;
    font-weight: 700 !important;
  }

  .description-text {
    font-size: clamp(0.9rem, 2vw, 1.2rem);
    line-height: 1.4;
    text-align: left;
    margin-right: 0;
    padding-right: 0;
    max-width: 100%;
  }

  .more-button {
    font-size: 1rem;
    margin-top: 1.5rem;
    margin-left: 0;
    margin-right: 0;
    padding-right: 0;
  }

  .luffy-image {
    max-height: 250px;
    width: auto;
    margin: 0 auto;
  }

  /* Réinitialiser les styles pour le slide 1 */
  .slide:nth-child(1) .text-square {
    text-align: left;
  }

  .slide:nth-child(1) .description-text {
    text-align: left;
  }

  .slide:nth-child(1) .more-button {
    margin-left: 0;
  }
}

@media (max-width: 480px) {
  .slide-content {
    padding: clamp(0.5rem, 2vw, 3rem);
  }

  .square {
    padding: clamp(0.5rem, 2vw, 3rem);
  }

  .text-square {
    padding-left: clamp(0.5rem, 2vw, 3rem);
  }

  .description-text {
    font-size: clamp(0.7rem, 1vw, 1.2rem);
    line-height: 1.3;
  }

  .more-button {
    font-size: 0.9rem;
  }

  .luffy-image {
    max-height: 180px;
    width: auto;
    margin: 0 auto;
  }
}

.canvas-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.mosaic-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  transition: opacity 0.3s ease;
}

.luffy-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
  transition: all 0.3s ease;
}

/* Tablette */
@media (max-width: 1024px) {
  .luffy-image {
    max-height: 400px;
    width: auto;
    margin: 0 auto;
  }
}

/* Mobile */
@media (max-width: 768px) {
  /* Slide 1 image bigger on mobile */
  .slide:nth-child(1) .luffy-image {
    max-height: 320px !important;
  }
  .luffy-image {
    max-height: 250px;
    position: relative;
    transform: none;
  }
}

/* Petit mobile */
@media (max-width: 480px) {
  /* Slide 1 image bigger on small mobile as well */
  .slide:nth-child(1) .luffy-image {
    max-height: 240px !important;
  }
  .luffy-image {
    max-height: 180px;
    width: auto;
    margin: 0 auto;
  }
}

/* Animations pour le texte et la citation */
.animate-title {
  opacity: 0;
  transform: translateX(50px);
}

.animate-text {
  opacity: 0;
  transform: translateX(50px);
}

.animate-quote {
  opacity: 0;
  transform: translateX(50px);
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-title {
  animation: slideInRight 1.2s ease-out forwards;
  animation-delay: 0.2s;
}

.animate-text {
  animation: slideInRight 1.2s ease-out forwards;
  animation-delay: 0.6s;
}

.animate-quote {
  animation: slideInRight 1.2s ease-out forwards;
  animation-delay: 1s;
}

.slide-2 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}

.slide-2.active {
  opacity: 1;
  visibility: visible;
}

.slide-2 .slide-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2vw;
}

.slide-2 .squares-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2vw;
  width: 90vw;
  max-width: 1200px;
  height: 60vh;
}

.slide-2 .square {
  background: #fff;
  border-radius: 2rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2vw;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
}

.slide-2 .text-square .slide-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: black;
}

.slide-2 .text-square .slide-subtitle {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: black;
}

.slide-2 .text-square .slide-description {
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: black;
  line-height: 1.5;
}

.slide-2 .image-square {
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-2 .slide-image {
  width: 100%;
  height: auto;
  max-width: 320px;
  border-radius: 1.5rem;
  object-fit: cover;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

@media (max-width: 900px) {
  .slide-2 .squares-container {
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    gap: 4vw;
  }
  .slide-2 .square {
    align-items: center;
    text-align: center;
  }
}

@media (max-width: 600px) {
  .slide-2 .slide-content {
    padding: 1vw;
  }
  .slide-2 .squares-container {
    width: 98vw;
    max-width: 100vw;
    gap: 2vw;
  }
  .slide-2 .square {
    padding: 4vw 2vw;
    border-radius: 1rem;
  }
  .slide-2 .slide-title {
    font-size: clamp(1.5rem, 7vw, 2.5rem);
  }
  .slide-2 .slide-image {
    max-width: 90vw;
    border-radius: 1rem;
  }
}

/* Styles pour la slide 2 */
.slide:nth-child(2) .rotating-title,
.slide:nth-child(2) .description-text,
.slide:nth-child(2) .quote-text {
  opacity: 0;
  transform: translateX(50px);
}

.slide:nth-child(2) .animate-title {
  animation: slideInRight 1.2s ease-out forwards;
  animation-delay: 0.2s;
}

.slide:nth-child(2) .animate-text {
  animation: slideInRight 1.2s ease-out forwards;
  animation-delay: 0.6s;
}

.slide:nth-child(2) .animate-quote {
  animation: slideInRight 1.2s ease-out forwards;
  animation-delay: 1s;
}

/* Styles pour les slides */
.slide:nth-child(1) .rotating-title,
.slide:nth-child(1) .description-text,
.slide:nth-child(1) .quote-text,
.slide:nth-child(2) .rotating-title,
.slide:nth-child(2) .description-text,
.slide:nth-child(2) .quote-text {
  opacity: 0;
  transform: translateX(50px);
}

.slide:nth-child(1) .animate-title,
.slide:nth-child(2) .animate-title {
  animation: slideInRight 1.2s ease-out forwards;
  animation-delay: 0.2s;
}

.slide:nth-child(1) .animate-text,
.slide:nth-child(2) .animate-text {
  animation: slideInRight 1.2s ease-out forwards;
  animation-delay: 0.6s;
}

.slide:nth-child(1) .animate-quote,
.slide:nth-child(2) .animate-quote {
  animation: slideInRight 1.2s ease-out forwards;
  animation-delay: 1s;
}

.fs-slide-button {
  font-size: 1.5rem !important;
  color: black;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  transition: all 0.3s ease;
  font-weight: 300 !important;
  letter-spacing: 0.5px;
  text-align: left;
  align-self: flex-start;
}

.fs-slide-arrow {
  transition: transform 0.3s ease;
  font-weight: 300 !important;
  letter-spacing: 0.5px;
}

.fs-slide-button:hover .fs-slide-arrow {
  transform: translateX(10px);
}

.menu-text {
  font-family: "Montserrat", sans-serif;
  text-transform: lowercase;
  font-weight: 300;
}

.burger-icon span {
  display: block;
  position: absolute;
  height: 1px;
  width: 100%;
  background: black;
  transition: all 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  transform-origin: center;
}

.nav-dot {
  width: clamp(6px, 0.8vw, 12px);
  height: clamp(6px, 0.8vw, 12px);
  border-radius: 50%;
  background: transparent;
  border: 1px solid black;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
}

.nav-dot.active::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 60%;
  background: black;
  border-radius: 50%;
}

.nav-dot:hover:not(.active) {
  border-color: black;
}

@media (max-width: 768px) {
  .more-button {
    font-size: 1rem;
  }
}

/* Harmoniser le bouton du slide 2 avec celui du slide 3 (toutes tailles) */
.slide:nth-child(2) .fs-slide-button {
  margin-left: 0 !important;
  margin-right: auto !important;
  font-size: 1.5rem !important;
  font-weight: 300 !important;
  text-align: left !important;
}
.slide:nth-child(2) .fs-slide-arrow {
  font-weight: 300 !important;
}

/* Override mobile alignment for slide 2 button with higher specificity */
@media (max-width: 768px) {
  .slides-container.mobile-view .slide:nth-child(2) .fs-slide-button {
    margin-left: auto !important;
    margin-right: 0 !important;
    text-align: right !important;
    display: inline-flex !important;
  }
}

/* Styles pour l'image du slide 2 */
.slide:nth-child(2) .square:last-child {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  height: 100%;
}

.slide:nth-child(2) .luffy-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  margin: 0;
  padding: 0;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
  transition: all 0.3s ease;
}

/* Tablette */
@media (max-width: 1024px) {
  .slide:nth-child(2) .luffy-image {
    max-height: 400px;
    width: auto;
    margin: 0 auto;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .slide:nth-child(2) .luffy-image {
    max-height: 320px !important;
    position: relative;
    transform: none;
  }
}

/* Petit mobile */
@media (max-width: 480px) {
  .slide:nth-child(2) .luffy-image {
    max-height: 240px !important;
    width: auto;
    margin: 0 auto;
  }
}

.red-text {
  color: #ff0000;
}

.slide-3-container {
  grid-template-columns: 1fr;
}

.full-width {
  width: 100%;
  max-width: 100%;
}

.slide-3-container .rotating-title {
  margin-top: -4rem;
}

@media (max-width: 768px) {
  .slide-3-container .rotating-title {
    margin-top: -2rem;
  }
}

.cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  z-index: 1;
  margin: 2rem 0;
}

@media screen and (min-width: 600px) {
  .cards {
    flex-direction: row;
  }
}

.card {
  width: 51.48vw;
  height: 72vw;
  position: relative;
  overflow: hidden;
  margin: 20px;
  z-index: 10;
  touch-action: none;
  isolation: isolate;
  border-radius: 5% / 3.5%;
  box-shadow: -5px -5px 5px -5px var(--color1), 5px 5px 5px -5px var(--color2),
    -7px -7px 10px -5px transparent, 7px 7px 10px -5px transparent,
    0 0 5px 0px rgba(255, 255, 255, 0), 0 55px 35px -20px rgba(0, 0, 0, 0.5);
  transition: transform 0.5s ease, box-shadow 0.2s ease;
  will-change: transform, filter;
  background-color: #040712;
  background-image: var(--front);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transform-style: preserve-3d;
  display: block;
  text-decoration: none;
  object-fit: cover;
  cursor: pointer;
}

.card:hover {
  box-shadow: -20px -20px 30px -25px var(--color1),
    20px 20px 30px -25px var(--color2), -7px -7px 10px -5px var(--color1),
    7px 7px 10px -5px var(--color2), 0 0 13px 4px rgba(255, 255, 255, 0.3),
    0 55px 35px -20px rgba(0, 0, 0, 0.5);
}

.card:hover:before {
  background-image: linear-gradient(
    110deg,
    transparent 25%,
    var(--color1) 48%,
    var(--color2) 52%,
    transparent 75%
  );
  background-position: 50% 50%;
  background-size: 250% 250%;
  opacity: 0.88;
  filter: brightness(0.66) contrast(1.33);
}

.card:hover:after {
  filter: brightness(1) contrast(1);
  opacity: 1;
}

.glare {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 3;
  mix-blend-mode: overlay;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover .glare {
  opacity: 1;
}

@media screen and (min-width: 600px) {
  .card {
    width: clamp(10.32vw, 48.8vh, 14.4vw);
    height: clamp(14.4vw, 68vh, 20.16vw);
  }
}

.card:before,
.card:after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-repeat: no-repeat;
  opacity: 0.5;
  mix-blend-mode: color-dodge;
  transition: all 0.33s ease;
}

.card:before {
  background-position: 50% 50%;
  background-size: 300% 300%;
  background-image: linear-gradient(
    115deg,
    transparent 0%,
    var(--color1) 25%,
    transparent 47%,
    transparent 53%,
    var(--color2) 75%,
    transparent 100%
  );
  opacity: 0.5;
  filter: brightness(0.5) contrast(1);
  z-index: 1;
}

.card:after {
  opacity: 1;
  background-image: url("https://assets.codepen.io/13471/sparkles.gif"),
    url(https://assets.codepen.io/13471/holo.png),
    linear-gradient(
      125deg,
      #ff008450 15%,
      #fca40040 30%,
      #ffff0030 40%,
      #00ff8a20 60%,
      #00cfff40 70%,
      #cc4cfa50 85%
    );
  background-position: 50% 50%;
  background-size: 160%;
  background-blend-mode: overlay;
  z-index: 2;
  filter: brightness(1) contrast(1);
  transition: all 0.33s ease;
  mix-blend-mode: color-dodge;
  opacity: 0.75;
}

.three-d-wrapper {
  perspective: 750px;
  isolation: isolate;
  transform: translate3d(0.1px, 0.1px, 0.1px);
}

.card.portfolio-1 {
  --color1: #54a29e;
  --color2: #a79d66;
  --front: url("/images/portfolio/divers/image00051.png");
}

.card.portfolio-2 {
  --color1: #efb2fb;
  --color2: #acc6f8;
  --front: url("/images/portfolio/réaliste/image00032.png");
}

.card.portfolio-3 {
  --color1: #54a29e;
  --color2: #efb2fb;
  --front: url("/images/portfolio/live-action/image00053.png");
}

.card.portfolio-4 {
  --color1: #a79d66;
  --color2: #acc6f8;
  --front: url("/images/portfolio/mangas/image00001.png");
}

@keyframes holoCard {
  0%,
  100% {
    transform: rotateZ(0deg) rotateX(0deg) rotateY(0deg);
  }
  5%,
  8% {
    transform: rotateZ(0deg) rotateX(6deg) rotateY(-20deg);
  }
  13%,
  16% {
    transform: rotateZ(0deg) rotateX(-9deg) rotateY(32deg);
  }
  35%,
  38% {
    transform: rotateZ(3deg) rotateX(12deg) rotateY(20deg);
  }
  55% {
    transform: rotateZ(-3deg) rotateX(-12deg) rotateY(-27deg);
  }
}

.card.animated {
  transition: none;
  animation: holoCard 12s ease 0s 1;
}

.cards .card:nth-child(2) {
  animation-delay: 0.25s;
}

.cards .card:nth-child(3) {
  animation-delay: 0.5s;
}

.cards .card:nth-child(4) {
  animation-delay: 0.75s;
}

/* Ajout des styles pour masquer l'image sur mobile */
@media (max-width: 768px) {
  .hidden-mobile {
    display: none !important;
  }
}

/* Ajout des styles pour le mode mobile */
@media (max-width: 768px) {
  .full-width-mobile {
    width: 100% !important;
    max-width: 100% !important;
  }
}

@media (max-width: 768px) {
  .slide:nth-child(3) .text-square {
    text-align: left !important;
  }

  .slide:nth-child(3) .fs-slide-button {
    margin-left: 0 !important;
    margin-right: auto !important;
    font-size: 1.5rem !important;
    text-align: left !important;
    align-self: flex-start !important;
    width: auto !important;
    display: inline-flex !important;
    font-family: "Montserrat", sans-serif !important;
    font-weight: 300 !important;
  }

  .slide:nth-child(3) .fs-slide-arrow {
    font-family: "Montserrat", sans-serif !important;
    font-weight: 300 !important;
  }

  /* Appliquer exactement le même style au bouton du slide 2 en mobile */
  .slide:nth-child(2) .fs-slide-button {
    margin-left: 0 !important;
    margin-right: auto !important;
    font-size: 1.5rem !important;
    text-align: left !important;
    align-self: flex-start !important;
    width: auto !important;
    display: inline-flex !important;
    font-family: "Montserrat", sans-serif !important;
    font-weight: 300 !important;
  }

  .slide:nth-child(2) .fs-slide-arrow {
    font-family: "Montserrat", sans-serif !important;
    font-weight: 300 !important;
  }
}

/* Styles pour le formulaire de contact */
.contact-form {
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  color: black;
  font-weight: 400;
}

.form-group input,
.form-group textarea {
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.9);
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.submit-button {
  padding: 1rem 2rem;
  background: black;
  color: white;
  border: none;
  border-radius: 4px;
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
}

.submit-button:hover {
  background: #333;
  transform: translateY(-2px);
}

/* Mise en évidence de l'e-mail et style lien social */
.contact-email {
  font-weight: 600;
  text-decoration: underline;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: black;
  text-decoration: none;
  font-weight: 300;
}

.social-link:hover .instagram-handle {
  text-decoration: underline;
}

.instagram-icon {
  width: 28px;
  height: 28px;
}

/* YouTube style aligné avec Instagram */
.youtube-icon {
  width: 28px;
  height: 28px;
}

.social-link:hover .youtube-handle {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .contact-form {
    padding: 1rem;
  }

  .form-group label {
    font-size: 1rem;
  }

  .form-group input,
  .form-group textarea {
    font-size: 0.9rem;
    padding: 0.6rem;
  }

  .submit-button {
    font-size: 1rem;
    padding: 0.8rem 1.6rem;
  }
}

/* Styles pour le slide 4 */
.slide:nth-child(4) .text-square {
  margin-top: 0;
}

@media (max-width: 768px) {
  .slide:nth-child(4) .text-square {
    text-align: center;
    margin-top: 0;
  }

  .slide:nth-child(4) .responsive-title {
    text-align: center;
  }

  .slide:nth-child(4) .description-text {
    text-align: center;
  }

  .slide:nth-child(4) .quote-text {
    text-align: center;
  }
}

/* Styles pour le footer */
.legal-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 72px;
  background: transparent;
  font-family: "Montserrat", sans-serif;
  z-index: 100;
  display: flex;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.legal-footer.show-footer {
  opacity: 1;
  visibility: visible;
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

/* Ajustement pour le slide 4 */
.slide:nth-child(4) {
  position: relative;
  min-height: 100vh;
  padding-bottom: 72px;
}

@media (max-width: 768px) {
  .legal-footer.mobile1 {
    position: relative;
    height: auto;
    padding: 1.5rem 1rem;
    opacity: 1;
    visibility: visible;
    background: rgba(255, 255, 255, 0.95);
  }

  .legal-footer.mobile1 .footer-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    padding: 0;
  }

  .legal-footer.mobile1 .footer-text {
    font-size: 0.875rem;
    line-height: 1.4;
  }

  .legal-footer.mobile1 .footer-links {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
  }

  .legal-footer.mobile1 .footer-link {
    font-size: 0.875rem;
    padding: 0.5rem 0;
  }

  .slide:nth-child(4) {
    padding-bottom: 0;
  }
}

.slide3-title {
  font-size: clamp(1.5rem, 4vw, 4rem);
  line-height: 1.1;
  margin-bottom: 1rem;
  color: black;
  text-align: left;
  font-weight: 700;
  opacity: 0;
  transform: translateX(50px);
}

.slide4-title {
  font-size: clamp(1.5rem, 4vw, 4rem);
  line-height: 1.1;
  margin-bottom: 1rem;
  color: black;
  text-align: left;
  font-weight: 700;
  opacity: 0;
  transform: translateX(50px);
}

.slide2-title {
  font-size: clamp(1.5rem, 4vw, 4rem);
  line-height: 1.1;
  margin-bottom: 1rem;
  color: black;
  text-align: left;
  font-weight: 700;
  font-family: inherit;
  opacity: 0;
  transform: translateX(50px);
}

.slide1-title {
  font-size: clamp(1.5rem, 4vw, 4rem);
  line-height: 1.1;
  margin-bottom: 1rem;
  color: black;
  text-align: left;
  font-weight: 700;
  opacity: 0;
  transform: translateX(50px);
}

.slide1-title.animate-text {
  animation: slideInRight 1.2s ease-out forwards;
  animation-delay: 0.2s;
}

.description-text.animate-text {
  animation: slideInRight 1.2s ease-out forwards;
  animation-delay: 0.6s;
}

.slide2-title.animate-text,
.slide3-title.animate-text,
.slide4-title.animate-text {
  animation: slideInRight 1.2s ease-out forwards;
  animation-delay: 0.2s;
}

@media (max-width: 768px) {
  .slide1-title,
  .slide2-title,
  .slide3-title,
  .slide4-title {
    font-size: clamp(2.4rem, 6vw, 5rem) !important; /* double approx */
    margin-bottom: 0.5rem;
    line-height: 1.1;
  }
}

/* Styles pour la modal d'image */
.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  cursor: pointer;
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
}

.modal-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.close-button {
  position: absolute;
  top: -40px;
  right: 0;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 24px;
  color: #333;
  transition: all 0.3s ease;
  z-index: 10001;
}

.close-button:hover {
  background: rgba(255, 255, 255, 1);
  transform: scale(1.1);
}

.clickable-image {
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.clickable-image:hover {
  transform: scale(1.02);
  opacity: 0.9;
}

/* Responsive visibility helpers for slide buttons */
.desktop-only {
  display: inline-block;
}

.mobile-only {
  display: none;
}

@media (max-width: 768px) {
  .desktop-only {
    display: none !important;
  }
  .mobile-only {
    display: inline-block !important;
  }
}

/* Responsive pour la modal */
@media (max-width: 768px) {
  .modal-content {
    max-width: 95vw;
    max-height: 95vh;
    padding: 20px;
  }

  .close-button {
    top: -30px;
    right: 10px;
    width: 35px;
    height: 35px;
    font-size: 20px;
  }

  .modal-image {
    border-radius: 4px;
  }
}

@media (max-width: 480px) {
  .modal-content {
    max-width: 98vw;
    max-height: 98vh;
    padding: 10px;
  }

  .close-button {
    top: -25px;
    right: 5px;
    width: 30px;
    height: 30px;
    font-size: 18px;
  }
}
</style>
