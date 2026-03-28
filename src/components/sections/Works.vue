<template>
  <section id="works" class="common-padding mb-20">
    <div class="flex flex-col gap-6">

      <!-- Heading -->
      <div class="flex items-end justify-between flex-wrap gap-4">
        <h3
          id="selectedWorks"
          v-html="selectedWorks"
          class="heading-1 text-start leading-none font-bold uppercase"
        ></h3>

        <p
          class="heading-1 text-flax-smoke-400 text-opacity-50 font-extrabold text-right"
        >
          ( {{ selectedWorksProps.length }} )
        </p>
      </div>

      <!-- Description -->
      <div
        id="selected-works-text"
        class="text-flax-smoke-300 mt-4 grid grid-cols-1 md:grid-cols-12 gap-4 opacity-0"
      >
        <p
          class="heading-6 text-flax-smoke-300/85 text-center md:text-left md:col-span-4 lg:col-start-2"
        >
          (
          <span class="inline md:hidden">{{ selectedWorksProps.length }} </span>
          PROJECTS )
        </p>

        <p
          class="heading-4 font-fancy w-full md:col-span-8 lg:col-span-7 sm:font-semibold text-balance"
        >
          Featured client projects that have been meticulously crafted with
          passion and purpose over the years.
        </p>
      </div>
    </div>

    <!-- Main Grid -->
    <div
      class="relative mt-12 grid grid-cols-1 md:grid-cols-12 gap-10 lg:mt-[10%]"
    >

      <!-- Sticky Index -->
      <div
        class="text-flax-smoke-100 sticky top-12 col-span-5 hidden md:flex h-fit w-full overflow-hidden text-[18vw] lg:text-[12vw] leading-[0.8] font-semibold"
      >
        <span class="font-title! relative -tracking-wider">0</span>
        <span
          id="index"
          class="font-title! relative -tracking-wider will-change-transform"
        >
          {{ index + 1 }}.
        </span>
      </div>

      <!-- Work Cards -->
      <aside
        @mouseenter="showCursor"
        @mouseleave="hideCursor"
        class="relative col-span-1 md:col-span-7 flex flex-col space-y-12"
      >
        <div
          v-for="(work, i) in selectedWorksProps"
          :key="i"
          class="work-card @container"
        >
          <a class="group" target="_blank" :href="work.url">

            <!-- Image + Video -->
            <div
              class="flex-center relative aspect-[4/3] sm:aspect-square overflow-clip rounded-lg"
            >
              <img
                alt="work-background"
                loading="lazy"
                class="absolute size-full object-cover select-none"
                :src="work.imageBg"
              />

              <div
                class="flex-center z-10 aspect-4/3 size-full overflow-clip rounded-lg object-cover"
              >
                <video
                  ref="videoRefs"
                  :src="work.videoSrc"
                  muted
                  :autoplay="false"
                  type="video/webm"
                  class="w-[85%] md:w-[80%] rounded-md object-contain blur transition-all duration-500 ease-in-out"
                ></video>
              </div>
            </div>

            <!-- Content -->
            <div>
              <p class="heading-6 font-title! mt-[2%] mb-[1%] leading-none">
                {{ work.category }}
              </p>

              <div
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                <h3 class="heading-3 font-title! font-bold uppercase">
                  {{ work.name }}
                </h3>

                <div class="flex flex-wrap gap-2 select-none">
                  <p
                    class="border-flax-smoke-300 hover:bg-flax-smoke-300 hover:text-flax-smoke-900 rounded-full border px-4 py-2 transition-[background-color,color] duration-500 ease-in-out"
                    v-for="tag in work.tags"
                    :key="tag"
                  >
                    <span>{{ tag }}</span>
                  </p>

                  <p
                    class="border-flax-smoke-300 bg-flax-smoke-300 text-flax-smoke-900 hover:text-flax-smoke-300 rounded-full border px-4 py-2 transition-[background-color,color] duration-500 ease-in-out hover:bg-transparent"
                  >
                    <span>{{ work.year }}</span>
                  </p>
                </div>
              </div>
            </div>

          </a>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { animateSplitText } from '@/animations'
import { textSplitterIntoChar } from '@/functions'
import { onBeforeMount, onMounted, ref, useTemplateRef } from 'vue'
import gsap from 'gsap'

import { work1, work2, work3, work4, work5 } from '@/assets/videos'
import { workBg1, workBg2, workBg3, workBg4, workBg5 } from '@/assets/images'

const videoRefs = useTemplateRef<HTMLVideoElement[]>('videoRefs')

const index = ref(0)
const selectedWorks = ref('Selected Projects /')

const tl = gsap
  .timeline({ defaults: { duration: 0.25 } })
  .to(['#cursor', '#inner'], {
    scale: 1,
    opacity: 1,
  })
  .paused(true)

const showCursor = () => {
  tl.play()
}

const hideCursor = () => {
  tl.reverse()
}

const selectedWorksProps = [
{
  name: 'AI/ML Innovations',
  category: 'Next-Gen Technology',
  tags: ['GenAI', 'NLP', 'Visions', 'Agents'],
  videoSrc: work5,
  imageBg: workBg5,
  url: 'https://www.instagram.com/sentientware_tech/',
  year: '2025',
},
{
  name: 'Autonomous Intelligent Systems',
  category: 'AI • Drones • IoT • Robotics',
  tags: ['Agriculture', 'RealTime', 'Automation', 'Defense'],
  videoSrc: work2,
  imageBg: workBg2,
  url: 'https://www.instagram.com/sentientware_tech/',
  year: '2025',
},
{
  name: 'Cross-Platform App Development',
  category: 'Mobile Applications',
  tags: ['Flutter', 'Android', 'iOS', 'Performance'],
  videoSrc: work3,
  imageBg: workBg3,
  url: 'https://www.instagram.com/sentientware_tech/',
  year: '2025',
},
{
  name: 'Web Technology Stack',
  category: 'Frontend & Backend',
  tags: ['Vue.js', 'Figma', 'Node.js', 'Express'],
  videoSrc: work4,
  imageBg: workBg4,
  url: 'https://www.instagram.com/sentientware_tech/',
  year: '2023',
},
{
  name: 'Student & Career Programs',
  category: 'Learning & Opportunities',
  tags: ['Internships', 'Workshops', 'Hands-on', 'Mentorship'],
  videoSrc: work1,
  imageBg: workBg1,
  url: 'https://www.instagram.com/sentientware_tech/',
  year: '2026',
},
]

const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    const video = entry.target as HTMLVideoElement
    if (entry.isIntersecting) {
      video.play()
      video.classList.remove('blur')
    }
  })
}

const stopAllVideos = () => {
  videoRefs.value?.map((video: HTMLVideoElement) => {
    if (video && !video.paused) {
      video.pause()
      video.currentTime = 0
    }
  })
}

onBeforeMount(() => {
  selectedWorks.value = textSplitterIntoChar('Selected Works / ', true)
})

onMounted(() => {
  stopAllVideos()

  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.75,
  })

  videoRefs.value?.forEach((video) => {
    observer.observe(video)
  })

  animateSplitText(
    '#selectedWorks .letters',
    '#selected-works-text',
    0.7,
    0.01,
    0,
  )
})
</script>