<template>
  <section class="relative py-20 px-4 sm:py-32 lg:py-40">
    <div class="max-w-7xl mx-auto">
      <div class="text-center space-y-8">

        <div class="space-y-4">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
            <span class="bg-gradient-to-r from-[#8C8C73] to-[#c9c9a0] bg-clip-text text-transparent">
              Launch Your Tech Career
            </span>
            <br />
            at SentientWare
          </h1>
          <p class="text-lg sm:text-xl text-flax-smoke-400 max-w-2xl mx-auto text-balance">
            Join our growing team of innovators and build cutting-edge solutions.
            Explore exciting opportunities in AI, cloud computing, and software development.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a href="https://career.sentientware.in/apply" target="_blank">
            <button class="bg-flax-smoke-400 hover:bg-flax-smoke-300 text-black font-semibold px-8 py-3 rounded-full w-full sm:w-auto transition-all duration-300">
              Apply Now
            </button>
          </a>
          <a href="https://career.sentientware.in/#domains" target="_blank">
            <button class="border border-flax-smoke-400 text-flax-smoke-400 hover:bg-flax-smoke-400 hover:text-black font-semibold px-8 py-3 rounded-full w-full sm:w-auto transition-all duration-300">
              Explore Domains
            </button>
          </a>
        </div>

        <div class="pt-8">
          <p class="text-sm text-flax-smoke-400 mb-4">Contact To Start Career With US</p>
          <div class="flex justify-center gap-2">
            <div
              v-for="i in 5"
              :key="i"
              class="w-10 h-10 rounded-full bg-gradient-to-br from-[#8C8C73] to-[#c9c9a0]"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>