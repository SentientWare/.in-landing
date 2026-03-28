<template>
  <!-- common-padding  -->
  <section
    id="testimonials-section"
    class="common-padding relative mx-auto min-h-svh -translate-y-0 overflow-y-clip py-0 will-change-transform"
  >
    <div
      class="border-flax-smoke-300 grid w-full grid-cols-12 border-b-[1px] pb-[clamp(2.25rem,2.1786rem_+_0.3571vi,2.5rem)]"
    >
      <h3
        class="heading-1 max-sm:heading-2 text-flax-smoke-950 col-span-full leading-none font-bold uppercase will-change-auto"
      >
        Don't take Our <br />
        word for it /
      </h3>
      <div
        class="text-flax-smoke-800 col-span-full mt-[5%] flex justify-end gap-10 sm:gap-20 lg:col-span-10"
      >
        <p class="heading-6 text-center text-nowrap uppercase">
          ( Testimonials )
        </p>
        <p class="heading-6 font-fancy w-full text-balance sm:max-w-[40ch]">
          Here's what Our clients say about our collaboration. Their satisfaction
          and meeting expectations are my top priorities, ensuring the best
          experience possible.
        </p>
      </div>
    </div>

    <!-- Infinite Testimonial Slider -->
    <div class="mt-12 w-full">
      <TestimonialsSlider />
    </div>
  </section>
</template>

<script setup lang="ts">
  import TestimonialsSlider from './TestimonialsSlider.vue';
</script>
