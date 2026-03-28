<template>
  <div 
    class="relative w-full overflow-hidden"
    @mouseenter="isPaused = true"
    @mouseleave="isPaused = false"
  >
    <!-- Track Container -->
    <div class="flex w-full overflow-visible">
      <!-- Sliding Track -->
      <div 
        class="flex gap-6 will-change-transform"
        :style="{ 
          transform: `translateX(${translateX}px)`,
          transition: isAnimating ? 'none' : 'transform 0.5s ease-out'
        }"
      >
        <!-- Duplicate cards for infinite loop - first set -->
        <div 
          v-for="(testimonial, index) in duplicatedTestimonials" 
          :key="`card-${index}`"
          class="testimonial-card flex-shrink-0"
          :style="{ width: cardWidthPx + 'px' }"
        >
          <div 
            class="h-full rounded-lg border border-flax-smoke-500/20 bg-flax-smoke-50/5 p-5 sm:p-6 transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/5"
          >
            <!-- Quote Icon -->
            <div class="mb-4 text-emerald-500/30">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"/>
              </svg>
            </div>

            <!-- Testimonial Text -->
            <p class="font-fancy text-base sm:text-lg text-flax-smoke-200 leading-relaxed mb-6 line-clamp-4">
              "{{ testimonial.quote }}"
            </p>

            <!-- Divider -->
            <div class="border-t border-flax-smoke-500/10 mb-4"></div>

            <!-- Person Info -->
            <div class="flex items-center gap-4">
              <!-- Profile Image -->
              <div class="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-emerald-500/20">
                <img 
                  v-if="testimonial.profile"
                  :src="testimonial.profile" 
                  :alt="testimonial.author"
                  class="size-full object-cover"
                />
                <div v-else class="size-full bg-emerald-500/20 flex items-center justify-center">
                  <span class="font-fancy text-sm font-bold text-emerald-500">
                    {{ testimonial.author.charAt(0) }}
                  </span>
                </div>
              </div>

              <!-- Name and Role -->
              <div class="flex-1 min-w-0">
                <p class="font-fancy text-sm sm:text-base font-semibold text-flax-smoke-100 truncate">
                  {{ testimonial.author }}
                </p>
                <p class="font-mono text-[10px] sm:text-xs text-flax-smoke-400 truncate">
                  {{ testimonial.position }}
                </p>
              </div>
            </div>

            <!-- Tags -->
            <div v-if="testimonial.tags && testimonial.tags.length" class="flex flex-wrap gap-2 mt-4">
              <span 
                v-for="tag in testimonial.tags" 
                :key="tag"
                class="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm border border-flax-smoke-500/30 text-flax-smoke-400"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { profile, profile2, esmail, mohammad } from '@/assets/images';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  profile?: string;
  tags?: string[];
}



// Testimonial data
const testimonials: Testimonial[] = [
  {
    quote: 'Collaborating with SentientWare on multiple projects has been a true pleasure. Their exceptional skills, attention to detail, and commitment to quality consistently made them an invaluable asset to the team.',
    author: 'Mohammad AL-Sulami',
    position: 'Full Stack Developer',
    profile: mohammad,
    tags: ['Web Development', 'Collaboration'],
  },
  {
    quote: 'Working with SentientWare on the Axon website has been an exceptional experience. Their invaluable support and dedication were crucial in bringing this project to life. Highly recommended!',
    author: 'Esmail Atta',
    position: 'Founder of Axon',
    profile: esmail,
    tags: ['Client', 'Web Development'],
  },
  {
    quote: 'The internship program at SentientWare is fantastic. I learned so much about real-world software development and got hands-on experience with cutting-edge technologies.',
    author: 'Rahul Sharma',
    position: 'Former Intern - AI/ML',
    profile: profile,
    tags: ['Internship', 'AI/ML'],
  },
  {
    quote: 'SentientWare transformed our business with a stunning website and robust backend. Their team delivered on time and exceeded our expectations. Truly professional!',
    author: 'Sarah Johnson',
    position: 'CEO, TechStart Inc.',
    profile: profile2,
    tags: ['Client', 'E-commerce'],
  },
  {
    quote: 'As a recent graduate, the internship at SentientWare gave me the practical skills I needed. The mentors were supportive and the projects were challenging yet rewarding.',
    author: 'Priya Patel',
    position: 'Junior Developer',
    profile: profile,
    tags: ['Internship', 'Web Dev'],
  },
  {
    quote: 'Their expertise in AI and machine learning helped us automate critical business processes. The results have been remarkable - efficiency increased by 40%!',
    author: 'Michael Chen',
    position: 'CTO, DataFlow Systems',
    profile: profile2,
    tags: ['Collaboration', 'AI Solutions'],
  },
];

// Duplicate testimonials for infinite scroll (create 3x loop)
const duplicatedTestimonials = computed(() => {
  return [...testimonials, ...testimonials, ...testimonials];
});

// State
const translateX = ref(0);
const isPaused = ref(false);
const isAnimating = ref(false);
let animationFrame: number | null = null;
// Calculate total width of one set of cards
const getCardWidth = (): number => {
  if (typeof window === 'undefined') return 400;
  const screenWidth = window.innerWidth;
  if (screenWidth < 640) return screenWidth * 0.85;
  if (screenWidth < 1024) return 350;
  return 400;
};

const cardWidthPx = ref(getCardWidth());

// Update on resize
const updateCardWidth = () => {
  cardWidthPx.value = getCardWidth();
};

// Animation logic
const totalCards = testimonials.length;
const gap = 24; // gap-6 = 1.5rem = 24px

const animate = () => {
  if (isPaused.value) {
    animationFrame = requestAnimationFrame(animate);
    return;
  }

  const cardWidth = cardWidthPx.value;
  const oneSetWidth = totalCards * (cardWidth + gap);
  
  translateX.value -= 0.5; // Speed of scroll

  // Reset position when we've scrolled one full set
  if (Math.abs(translateX.value) >= oneSetWidth) {
    translateX.value = 0;
  }

  animationFrame = requestAnimationFrame(animate);
};









// Lifecycle
onMounted(() => {
  // Start animation
  translateX.value = 0;
  
  // Start animation
  animationFrame = requestAnimationFrame(animate);
  
  // Handle resize
  window.addEventListener('resize', updateCardWidth);
});

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
  window.removeEventListener('resize', updateCardWidth);
});
</script>

<style scoped>
.testimonial-card {
  scroll-snap-align: start;
}

.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Smooth scrolling for touch devices */
.testimonial-card {
  scroll-behavior: smooth;
}
</style>