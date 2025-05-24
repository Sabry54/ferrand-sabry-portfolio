<template>
  <main class="min-h-screen bg-white/5 text-black">
    <!-- Hero Section -->
    <section class="hero h-screen flex items-center justify-center relative">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl">
          <h1 class="text-6xl md:text-8xl font-bold leading-tight">
            <span class="block">A small collection</span>
            <span class="block">of visual</span>
            <span class="block">experiments —</span>
            <span class="block">playful, inspired,</span>
            <span class="block">sometimes strange.</span>
          </h1>
        </div>
      </div>
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div class="flex items-center space-x-4">
          <span class="text-sm text-gray-600"
            >FRANCE, 2024 — A SOLO CREATIVE JOURNEY.</span
          >
        </div>
      </div>
    </section>

    <!-- Works Section -->
    <section class="py-32">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mb-16">Works</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="project-card"
          >
            <div class="relative overflow-hidden group">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="py-32 bg-white/5">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mb-16">Gallery</h2>

        <!-- Genre Filter -->
        <div class="flex flex-wrap gap-4 mb-12">
          <button
            v-for="genre in genres"
            :key="genre"
            @click="currentGenre = genre"
            class="px-6 py-2 rounded-full transition-all"
            :class="
              currentGenre === genre
                ? 'bg-black text-white'
                : 'bg-black/5 hover:bg-black/10'
            "
          >
            {{ genre }}
          </button>
        </div>

        <!-- Gallery Grid -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <div
            v-for="(image, index) in filteredGallery"
            :key="index"
            class="gallery-item group cursor-pointer"
            :class="getRandomSize()"
            @click="openModal(image)"
          >
            <div class="relative overflow-hidden w-full h-full">
              <img
                :src="image.path"
                :alt="image.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <div
      v-if="selectedImage"
      class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      @click="closeModal"
    >
      <div class="relative max-w-7xl w-full h-full" @click.stop>
        <div class="w-full h-full overflow-auto">
          <div
            class="min-h-full min-w-full flex items-center justify-center p-8 relative"
          >
            <img
              :src="selectedImage.path"
              :alt="selectedImage.title"
              class="w-auto h-auto"
            />
            <!-- Bouton de fermeture pour mobile -->
            <button
              @click="closeModal"
              class="md:hidden fixed top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <!-- Boutons de navigation -->
            <button
              v-if="currentImageIndex > 0"
              @click="previousImage"
              class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              v-if="currentImageIndex < sliderImages.length - 1"
              @click="nextImage"
              class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <section class="py-32">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl">
          <h2 class="text-4xl font-bold mb-8">Let's Talk!</h2>
          <p class="text-xl text-gray-700 mb-12">
            If you already have a clear idea of what you need, you can write to
            me directly indicating the type of project, desired publication date
            and budget.
          </p>
          <router-link
            to="/contact"
            class="inline-block px-8 py-4 bg-black text-white font-bold hover:bg-gray-800 transition-colors"
          >
            Get in touch
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from "vue";

const projects = ref([
  {
    title: "Digital Art Collection",
    description:
      "A showcase of digital art pieces exploring the intersection of technology and creativity",
    image: "/images/portfolio/work/work1.png",
    tags: ["Digital Art", "Animation", "WebGL"],
  },
  {
    title: "Manga Series",
    description: "A collection of original manga artwork and character designs",
    image: "/images/portfolio/work/work2.png",
    tags: ["Manga", "Character Design", "Storytelling"],
  },
  {
    title: "Live Action Portfolio",
    description:
      "Behind the scenes of our live action productions and photo shoots",
    image: "/images/portfolio/work/work3.png",
    tags: ["Photography", "Production", "Direction"],
  },
  {
    title: "Realistic Artworks",
    description: "Hyper-realistic digital paintings and illustrations",
    image: "/images/portfolio/work/work4.png",
    tags: ["Digital Painting", "Realism", "Illustration"],
  },
]);

const genres = ref(["curious", "mangas", "live-action", "realistic", "ghibli"]);
const currentGenre = ref("curious");

interface GalleryImage {
  title: string;
  path: string;
  genre: string;
}

const selectedImage = ref<GalleryImage | null>(null);
const currentImageIndex = ref(0);
const shuffledImages = ref<GalleryImage[]>([]);

// Nouveau computed pour le slider qui retourne toujours toutes les images
const sliderImages = computed(() => {
  return galleryImages.value.filter((img) => img.genre === currentGenre.value);
});

const filteredGallery = computed(() => {
  const images = sliderImages.value;
  if (window.innerWidth < 768) {
    // Pour mobile
    // Si les images n'ont pas encore été mélangées, on les mélange une fois
    if (shuffledImages.value.length === 0) {
      shuffledImages.value = [...images].sort(() => Math.random() - 0.5);
    }
    return shuffledImages.value.slice(0, 3);
  }
  return images;
});

// Réinitialiser les images mélangées quand on change de genre
watch(currentGenre, () => {
  shuffledImages.value = [];
});

const openModal = (image: GalleryImage) => {
  selectedImage.value = image;
  // Utiliser sliderImages au lieu de filteredGallery pour avoir toutes les images
  currentImageIndex.value = sliderImages.value.findIndex(
    (img) => img.path === image.path
  );
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  selectedImage.value = null;
  currentImageIndex.value = 0;
  document.body.style.overflow = "auto";
};

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
    selectedImage.value = sliderImages.value[currentImageIndex.value];
  }
};

const nextImage = () => {
  if (currentImageIndex.value < sliderImages.value.length - 1) {
    currentImageIndex.value++;
    selectedImage.value = sliderImages.value[currentImageIndex.value];
  }
};

const centerImage = () => {
  const container = document.querySelector(".overflow-auto");
  if (container) {
    container.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
};

const getRandomSize = () => {
  const sizes = [
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-1 row-span-2",
    "col-span-2 row-span-2",
  ];
  return sizes[Math.floor(Math.random() * sizes.length)];
};

const galleryImages = ref([
  // Curious
  {
    title: "Curious Art 1",
    path: "/images/portfolio/curious/0_3.png",
    genre: "curious",
  },
  {
    title: "Curious Art 2",
    path: "/images/portfolio/curious/image00077.png",
    genre: "curious",
  },
  {
    title: "Curious Art 3",
    path: "/images/portfolio/curious/image00082.png",
    genre: "curious",
  },
  {
    title: "Curious Art 4",
    path: "/images/portfolio/curious/image00121.png",
    genre: "curious",
  },
  {
    title: "Curious Art 5",
    path: "/images/portfolio/curious/image00122.png",
    genre: "curious",
  },
  {
    title: "Curious Art 6",
    path: "/images/portfolio/curious/image00150.png",
    genre: "curious",
  },
  // Ajout des images de divers dans curious
  {
    title: "Curious Art 7",
    path: "/images/portfolio/divers/image00051.png",
    genre: "curious",
  },
  {
    title: "Curious Art 8",
    path: "/images/portfolio/divers/image00052.png",
    genre: "curious",
  },
  {
    title: "Curious Art 9",
    path: "/images/portfolio/divers/image00066.png",
    genre: "curious",
  },
  {
    title: "Curious Art 10",
    path: "/images/portfolio/divers/image00067.png",
    genre: "curious",
  },
  {
    title: "Curious Art 11",
    path: "/images/portfolio/divers/image00068.png",
    genre: "curious",
  },
  {
    title: "Curious Art 12",
    path: "/images/portfolio/divers/image00069.png",
    genre: "curious",
  },
  {
    title: "Curious Art 13",
    path: "/images/portfolio/divers/image00085.png",
    genre: "curious",
  },
  {
    title: "Curious Art 14",
    path: "/images/portfolio/divers/image00087.png",
    genre: "curious",
  },
  {
    title: "Curious Art 15",
    path: "/images/portfolio/divers/image00095.png",
    genre: "curious",
  },
  {
    title: "Curious Art 16",
    path: "/images/portfolio/divers/image00096.png",
    genre: "curious",
  },
  {
    title: "Curious Art 17",
    path: "/images/portfolio/divers/image00098.png",
    genre: "curious",
  },
  // Mangas
  {
    title: "Manga Art 1",
    path: "/images/portfolio/mangas/0_1.webp",
    genre: "mangas",
  },
  {
    title: "Manga Art 2",
    path: "/images/portfolio/mangas/0_3.webp",
    genre: "mangas",
  },
  {
    title: "Manga Art 3",
    path: "/images/portfolio/mangas/image00001.png",
    genre: "mangas",
  },
  {
    title: "Manga Art 4",
    path: "/images/portfolio/mangas/image00002.png",
    genre: "mangas",
  },
  {
    title: "Manga Art 5",
    path: "/images/portfolio/mangas/image00003.png",
    genre: "mangas",
  },
  {
    title: "Manga Art 6",
    path: "/images/portfolio/mangas/image00004.png",
    genre: "mangas",
  },
  {
    title: "Manga Art 7",
    path: "/images/portfolio/mangas/image00005.png",
    genre: "mangas",
  },
  {
    title: "Manga Art 8",
    path: "/images/portfolio/mangas/image00006.png",
    genre: "mangas",
  },
  // Live Action
  {
    title: "Live Action 1",
    path: "/images/portfolio/live-action/image00053.png",
    genre: "live-action",
  },
  {
    title: "Live Action 2",
    path: "/images/portfolio/live-action/image00054.png",
    genre: "live-action",
  },
  {
    title: "Live Action 3",
    path: "/images/portfolio/live-action/image00055.png",
    genre: "live-action",
  },
  {
    title: "Live Action 4",
    path: "/images/portfolio/live-action/image00056.png",
    genre: "live-action",
  },
  {
    title: "Live Action 5",
    path: "/images/portfolio/live-action/image00057.png",
    genre: "live-action",
  },
  {
    title: "Live Action 6",
    path: "/images/portfolio/live-action/image00058.png",
    genre: "live-action",
  },
  {
    title: "Live Action 7",
    path: "/images/portfolio/live-action/image00059.png",
    genre: "live-action",
  },
  {
    title: "Live Action 8",
    path: "/images/portfolio/live-action/image00060.png",
    genre: "live-action",
  },
  {
    title: "Live Action 9",
    path: "/images/portfolio/live-action/image00061.png",
    genre: "live-action",
  },
  {
    title: "Live Action 10",
    path: "/images/portfolio/live-action/image00062.png",
    genre: "live-action",
  },
  {
    title: "Live Action 11",
    path: "/images/portfolio/live-action/image00063.png",
    genre: "live-action",
  },
  {
    title: "Live Action 12",
    path: "/images/portfolio/live-action/image00064.png",
    genre: "live-action",
  },
  {
    title: "Live Action 13",
    path: "/images/portfolio/live-action/image00065.png",
    genre: "live-action",
  },
  {
    title: "Live Action 14",
    path: "/images/portfolio/live-action/image00097.png",
    genre: "live-action",
  },
  {
    title: "Live Action 15",
    path: "/images/portfolio/live-action/image00105.png",
    genre: "live-action",
  },
  {
    title: "Live Action 16",
    path: "/images/portfolio/live-action/image00106.png",
    genre: "live-action",
  },
  {
    title: "Live Action 17",
    path: "/images/portfolio/live-action/image00107.png",
    genre: "live-action",
  },
  {
    title: "Live Action 18",
    path: "/images/portfolio/live-action/image00108.png",
    genre: "live-action",
  },
  {
    title: "Live Action 19",
    path: "/images/portfolio/live-action/image00109.png",
    genre: "live-action",
  },
  {
    title: "Live Action 20",
    path: "/images/portfolio/live-action/image00110.png",
    genre: "live-action",
  },
  {
    title: "Live Action 21",
    path: "/images/portfolio/live-action/image00111.png",
    genre: "live-action",
  },
  {
    title: "Live Action 22",
    path: "/images/portfolio/live-action/image00112.png",
    genre: "live-action",
  },
  {
    title: "Live Action 23",
    path: "/images/portfolio/live-action/image00113.png",
    genre: "live-action",
  },
  {
    title: "Live Action 24",
    path: "/images/portfolio/live-action/image00114.png",
    genre: "live-action",
  },
  {
    title: "Live Action 25",
    path: "/images/portfolio/live-action/image00115.png",
    genre: "live-action",
  },
  {
    title: "Live Action 26",
    path: "/images/portfolio/live-action/image00129.png",
    genre: "live-action",
  },
  {
    title: "Live Action 27",
    path: "/images/portfolio/live-action/image00130.png",
    genre: "live-action",
  },
  {
    title: "Live Action 28",
    path: "/images/portfolio/live-action/image00131.png",
    genre: "live-action",
  },
  {
    title: "Live Action 29",
    path: "/images/portfolio/live-action/image00132.png",
    genre: "live-action",
  },
  {
    title: "Live Action 30",
    path: "/images/portfolio/live-action/image00133.png",
    genre: "live-action",
  },
  {
    title: "Live Action 31",
    path: "/images/portfolio/live-action/image00134.png",
    genre: "live-action",
  },
  {
    title: "Live Action 32",
    path: "/images/portfolio/live-action/image00135.png",
    genre: "live-action",
  },
  {
    title: "Live Action 33",
    path: "/images/portfolio/live-action/image00136.png",
    genre: "live-action",
  },
  {
    title: "Live Action 34",
    path: "/images/portfolio/live-action/image00153.png",
    genre: "live-action",
  },
  {
    title: "Live Action 35",
    path: "/images/portfolio/live-action/image00154.png",
    genre: "live-action",
  },
  {
    title: "Live Action 36",
    path: "/images/portfolio/live-action/image00155.png",
    genre: "live-action",
  },
  {
    title: "Live Action 37",
    path: "/images/portfolio/live-action/image00156.png",
    genre: "live-action",
  },
  {
    title: "Live Action 38",
    path: "/images/portfolio/live-action/image00157.png",
    genre: "live-action",
  },
  {
    title: "Live Action 39",
    path: "/images/portfolio/live-action/image00158.png",
    genre: "live-action",
  },
  {
    title: "Live Action 40",
    path: "/images/portfolio/live-action/image00159.png",
    genre: "live-action",
  },
  {
    title: "Live Action 41",
    path: "/images/portfolio/live-action/image00160.png",
    genre: "live-action",
  },
  // Réaliste
  {
    title: "Realistic Art 1",
    path: "/images/portfolio/réaliste/image00032.png",
    genre: "realistic",
  },
  {
    title: "Realistic Art 2",
    path: "/images/portfolio/réaliste/image00033.png",
    genre: "realistic",
  },
  {
    title: "Realistic Art 3",
    path: "/images/portfolio/réaliste/image00034.png",
    genre: "realistic",
  },
  {
    title: "Realistic Art 4",
    path: "/images/portfolio/réaliste/image00043.png",
    genre: "realistic",
  },
  {
    title: "Realistic Art 5",
    path: "/images/portfolio/réaliste/image00047.png",
    genre: "realistic",
  },
  {
    title: "Realistic Art 6",
    path: "/images/portfolio/réaliste/image00048.png",
    genre: "realistic",
  },
  {
    title: "Realistic Art 7",
    path: "/images/portfolio/réaliste/image00049.png",
    genre: "realistic",
  },
  {
    title: "Realistic Art 8",
    path: "/images/portfolio/réaliste/image00050.png",
    genre: "realistic",
  },
  {
    title: "Realistic Art 9",
    path: "/images/portfolio/réaliste/image00101.png",
    genre: "realistic",
  },
  {
    title: "Realistic Art 10",
    path: "/images/portfolio/réaliste/image00102.png",
    genre: "realistic",
  },
  {
    title: "Realistic Art 11",
    path: "/images/portfolio/réaliste/image00103.png",
    genre: "realistic",
  },
  {
    title: "Realistic Art 12",
    path: "/images/portfolio/réaliste/image00104.png",
    genre: "realistic",
  },
  {
    title: "Realistic Art 13",
    path: "/images/portfolio/réaliste/image00116.png",
    genre: "realistic",
  },
  {
    title: "Realistic Art 14",
    path: "/images/portfolio/réaliste/image00117.png",
    genre: "realistic",
  },
  {
    title: "Realistic Art 15",
    path: "/images/portfolio/réaliste/image00118.png",
    genre: "realistic",
  },
  {
    title: "Realistic Art 16",
    path: "/images/portfolio/réaliste/image00119.png",
    genre: "realistic",
  },
  {
    title: "Realistic Art 17",
    path: "/images/portfolio/réaliste/image00120.png",
    genre: "realistic",
  },
  {
    title: "Realistic Art 18",
    path: "/images/portfolio/réaliste/image00123.png",
    genre: "realistic",
  },
  {
    title: "Realistic Art 19",
    path: "/images/portfolio/réaliste/image00124.png",
    genre: "realistic",
  },
  {
    title: "Realistic Art 20",
    path: "/images/portfolio/réaliste/image00125.png",
    genre: "realistic",
  },
  {
    title: "Realistic Art 21",
    path: "/images/portfolio/réaliste/image00126.png",
    genre: "realistic",
  },
  {
    title: "Realistic Art 22",
    path: "/images/portfolio/réaliste/image00127.png",
    genre: "realistic",
  },
  {
    title: "Realistic Art 23",
    path: "/images/portfolio/réaliste/image00128.png",
    genre: "realistic",
  },
  {
    title: "Realistic Art 24",
    path: "/images/portfolio/réaliste/image00142.png",
    genre: "realistic",
  },
  {
    title: "Realistic Art 25",
    path: "/images/portfolio/réaliste/image00143.png",
    genre: "realistic",
  },
  {
    title: "Realistic Art 26",
    path: "/images/portfolio/réaliste/image00144.png",
    genre: "realistic",
  },
  {
    title: "Realistic Art 27",
    path: "/images/portfolio/réaliste/image00145.png",
    genre: "realistic",
  },
  // Ghibli
  {
    title: "Ghibli Art 1",
    path: "/images/portfolio/ghibli/0_0.png",
    genre: "ghibli",
  },
  {
    title: "Ghibli Art 2",
    path: "/images/portfolio/ghibli/0_0 (1).png",
    genre: "ghibli",
  },
  {
    title: "Ghibli Art 3",
    path: "/images/portfolio/ghibli/0_0 (2).png",
    genre: "ghibli",
  },
  {
    title: "Ghibli Art 4",
    path: "/images/portfolio/ghibli/0_0 (3).png",
    genre: "ghibli",
  },
  {
    title: "Ghibli Art 5",
    path: "/images/portfolio/ghibli/0_1.png",
    genre: "ghibli",
  },
  {
    title: "Ghibli Art 6",
    path: "/images/portfolio/ghibli/0_1 (1).png",
    genre: "ghibli",
  },
]);

// Ajout d'un écouteur de redimensionnement
onMounted(() => {
  window.addEventListener("resize", () => {
    // Force la mise à jour du computed
    filteredGallery.value;
  });
  window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("resize", () => {
    filteredGallery.value;
  });
  window.removeEventListener("keydown", handleKeyDown);
});

const handleKeyDown = (e: KeyboardEvent) => {
  if (!selectedImage.value) return;

  if (e.key === "ArrowLeft") {
    previousImage();
  } else if (e.key === "ArrowRight") {
    nextImage();
  } else if (e.key === "Escape") {
    closeModal();
  }
};
</script>

<style scoped>
.hero {
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.02)
  );
}

.project-card {
  position: relative;
  overflow: hidden;
}

.project-card img {
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover img {
  transform: scale(1.05);
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.02);
  aspect-ratio: 1;
}

.gallery-item.col-span-2 {
  aspect-ratio: 2/1;
}

.gallery-item.row-span-2 {
  aspect-ratio: 1/2;
}

.gallery-item.col-span-2.row-span-2 {
  aspect-ratio: 1/1;
}

.gallery-item img {
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.gallery-item:hover img {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 3rem;
  }

  .project-card img {
    height: 400px;
  }

  .gallery-item {
    aspect-ratio: 3/4;
  }
}
</style>
