<template>
  <div class="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
    <!-- Sophisticated Background Effects -->
    <div class="absolute inset-0">
      <!-- Red and Blue Smoke Effects -->
      <div class="absolute top-0 left-0 w-full h-full">
        <div class="absolute top-10 left-20 w-80 h-80 bg-gradient-to-br from-red-600/30 to-red-800/20 rounded-full blur-3xl animate-pulse opacity-60"></div>
        <div class="absolute top-40 right-32 w-96 h-96 bg-gradient-to-tl from-blue-600/25 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000 opacity-70"></div>
        <div class="absolute bottom-32 left-1/3 w-72 h-72 bg-gradient-to-tr from-red-500/20 to-pink-600/15 rounded-full blur-3xl animate-pulse delay-500 opacity-50"></div>
        <div class="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-bl from-blue-500/20 to-indigo-600/15 rounded-full blur-3xl animate-pulse delay-2000 opacity-60"></div>
      </div>
      
      <!-- Premium Grid Pattern -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40"></div>
      
      <!-- Elegant Floating Elements -->
      <div class="absolute inset-0">
        <div
          v-for="(dot, i) in dots"
          :key="i"
          class="absolute rounded-full animate-float opacity-20"
          :style="{
            left: dot.left,
            top: dot.top,
            width: dot.width,
            height: dot.height,
            background: dot.background,
            animationDelay: dot.delay,
            animationDuration: dot.duration
          }"
        ></div>
      </div>

      <!-- Subtle Glow Lines -->
      <div class="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
      <div class="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
    </div>

    <!-- Back to Home Button -->
    <div class="absolute top-6 left-6 z-20">
      <button 
        @click="goBack" 
        class="group flex items-center gap-2 text-flax-smoke-300 transition-colors hover:text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:-translate-x-1">
          <path d="M19 12H5"/>
          <path d="M12 19l-7-7 7-7"/>
        </svg>
        <span class="heading-6">Back to Home</span>
      </button>
    </div>

    <div class="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <!-- Modern Header -->
      <div class="text-center mb-12">
        <div class="flex items-center justify-center mb-6">
          <div class="relative group">
            <div class="w-24 h-24 flex items-center justify-center relative">
              <img 
                src="/logo.svg" 
                alt="SentientWare Logo" 
                class="w-full h-full object-contain relative z-10"
              />
              <div class="absolute inset-0 bg-gradient-to-br from-red-500/20 via-blue-500/20 to-red-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            </div>
          </div>
          <div class="ml-6 text-left">
            <h1 class="text-4xl font-bold bg-gradient-to-r from-red-400 via-red-500 to-blue-500 bg-clip-text text-transparent mb-1 font-fancy">
              SentientWare
            </h1>
            <div class="flex items-center gap-2">
              <Sparkles class="w-4 h-4 text-red-400" />
              <p class="text-red-300 text-sm font-medium">Tech Solution Pvt. Ltd.</p>
            </div>
          </div>
        </div>
        <p class="text-gray-300 max-w-lg mx-auto text-lg leading-relaxed font-fancy">
          Enter your Certificate ID number to verify authenticity.
        </p>
      </div>

      <!-- Premium Verification Card -->
      <div class="w-full max-w-lg">
        <div class="relative group">
          <!-- Card Glow Effect -->
          <div class="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-blue-500/20 to-red-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60"></div>
          
          <div class="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl">
            <!-- Search Section -->
            <div class="relative mb-8">
              <label class="block text-sm font-medium text-gray-300 mb-3 font-fancy">
                Enter Certificate ID (e.g., 201, 202, 203...)
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <Search class="w-5 h-5 text-gray-400" />
                </div>
                <div class="absolute inset-y-0 left-14 flex items-center pointer-events-none">
                  <span class="text-gray-400 text-lg font-medium">SWT/SU25/</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter ID (e.g., 201)"
                  :value="certId"
                  @input="handleInputChange"
                  @keypress.enter="handleVerify"
                  class="w-full pl-40 pr-5 py-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all duration-300 text-lg"
                />
              </div>
              <p class="text-xs text-gray-400 mt-2 font-fancy">
                Complete ID: SWT/SU25/{{ certId || "XXX" }}
              </p>
            </div>

            <!-- Verify Button -->
            <button
              @click="handleVerify"
              :disabled="loading || !certId.trim()"
              class="w-full relative overflow-hidden bg-gradient-to-r from-red-600 via-red-500 to-blue-600 text-white py-5 rounded-2xl font-semibold shadow-xl hover:shadow-red-500/25 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3 text-lg group"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <template v-if="loading">
                <div class="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Authenticating...
              </template>
              <template v-else>
                <Shield class="w-6 h-6" />
                Verify Certificate
              </template>
            </button>
          </div>
        </div>

        <!-- Success Result -->
        <div v-if="data" class="mt-8 relative group animate-fade-in">
          <div class="absolute -inset-1 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-3xl blur-xl opacity-60"></div>
          <div class="relative bg-gradient-to-br from-green-900/20 to-emerald-900/10 backdrop-blur-2xl border border-green-500/30 rounded-3xl p-8 shadow-2xl">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center">
                <CheckCircle class="w-7 h-7 text-green-400" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-green-400 font-fancy">Certificate Verified</h3>
                <p class="text-green-300/80 text-sm font-fancy">Authenticity confirmed</p>
              </div>
            </div>
            
            <div class="grid gap-6">
              <div class="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                <div class="w-10 h-10 bg-gradient-to-br from-red-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                  <Award class="w-5 h-5 text-blue-400" />
                </div>
                <div class="flex-1">
                  <p class="text-gray-400 text-sm font-medium mb-1 font-fancy">Certificate Holder</p>
                  <p class="text-white font-semibold text-lg font-fancy">{{ data.name }}</p>
                </div>
              </div>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div class="flex items-center gap-3 mb-2">
                    <Tag class="w-4 h-4 text-red-400" />
                    <p class="text-gray-400 text-sm font-medium font-fancy">Domain</p>
                  </div>
                  <p class="text-white font-medium font-fancy">{{ data.domain }}</p>
                </div>
                
                <div class="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div class="flex items-center gap-3 mb-2">
                    <Clock class="w-4 h-4 text-blue-400" />
                    <p class="text-gray-400 text-sm font-medium font-fancy">Duration</p>
                  </div>
                  <p class="text-white font-medium font-fancy">{{ data.duration }}</p>
                </div>
              </div>
              
              <div class="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                <div class="flex items-center gap-3">
                  <div :class="['w-3 h-3 rounded-full animate-pulse', data.status?.toLowerCase() === 'verified' ? 'bg-green-400' : 'bg-red-400']"></div>
                  <div>
                    <p class="text-gray-400 text-sm font-medium font-fancy">Status</p>
                    <p :class="['font-semibold font-fancy', data.status?.toLowerCase() === 'verified' ? 'text-green-400' : 'text-red-400']">
                      {{ data.status }}
                    </p>
                  </div>
                </div>
              </div>
              
              <div v-if="data.mailId" class="p-4 bg-white/5 rounded-2xl border border-white/10">
                <div class="flex items-center gap-3 mb-2">
                  <Mail class="w-4 h-4 text-red-400" />
                  <p class="text-gray-400 text-sm font-medium font-fancy">Registered Email</p>
                </div>
                <p class="text-white font-medium break-all font-fancy">{{ data.mailId }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Error Result -->
        <div v-if="notFound" class="mt-8 relative group animate-fade-in">
          <div class="absolute -inset-1 bg-gradient-to-r from-red-500/30 to-pink-500/30 rounded-3xl blur-xl opacity-60"></div>
          <div class="relative bg-gradient-to-br from-red-900/20 to-pink-900/10 backdrop-blur-2xl border border-red-500/30 rounded-3xl p-8 shadow-2xl">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-red-500/20 rounded-2xl flex items-center justify-center">
                <XCircle class="w-7 h-7 text-red-400" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-red-400 mb-1 font-fancy">Certificate Not Found</h3>
                <p class="text-red-300/80 font-fancy">Please verify the Certificate ID and try again</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modern Footer -->
      <div class="mt-12 text-center">
        <div class="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
          <div class="w-2 h-2 bg-gradient-to-r from-red-500 to-blue-500 rounded-full animate-pulse"></div>
          <span class="text-gray-400 text-sm font-fancy">Powered by</span>
          <span class="text-transparent bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text font-semibold font-fancy">SentientWare</span>
          <span class="text-gray-400 text-sm font-fancy">• Enterprise Security</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref as vueRef, onMounted } from 'vue';
import { getDatabase, ref as firebaseRef, get, child } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { 
  Search, 
  Shield, 
  CheckCircle, 
  XCircle, 
  Award, 
  Mail, 
  Clock, 
  Tag, 
  Sparkles 
} from '@lucide/vue';

const firebaseConfig = {
  apiKey: "AIzaSyCL4_e8LD1-12WBeGC3WIXFBYCwbIi2dvs",
  authDomain: "varify-cirtificate.firebaseapp.com",
  databaseURL: "https://varify-cirtificate-default-rtdb.firebaseio.com",
  projectId: "varify-cirtificate",
  storageBucket: "varify-cirtificate.firebasestorage.app",
  messagingSenderId: "460940432932",
  appId: "1:460940432932:web:abd06d275d8080296b6ab1",
  measurementId: "G-4TGKM1K6D6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const certId = vueRef("");
const data = vueRef<any>(null);
const notFound = vueRef(false);
const loading = vueRef(false);

interface Dot {
  left: string;
  top: string;
  width: string;
  height: string;
  background: string;
  delay: string;
  duration: string;
}

const dots = vueRef<Dot[]>([]);

const emit = defineEmits(['close']);

const goBack = () => {
  emit('close');
};

const handleVerify = async () => {
  if (!certId.value.trim()) return;
  
  loading.value = true;
  const dbRef = firebaseRef(getDatabase(app));
  try {
    // Use the new database structure: certificates/SU25/{certId}
    const snapshot = await get(child(dbRef, `certificates/SU25/${certId.value}`));
    if (snapshot.exists()) {
      data.value = snapshot.val();
      notFound.value = false;
    } else {
      data.value = null;
      notFound.value = true;
    }
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

const handleInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const value = target.value.replace(/[^0-9]/g, '');
  certId.value = value;
};

onMounted(() => {
  window.scrollTo(0, 0);
  document.title = 'Verify Certificate | SentientWare Tech Solution';
  
  dots.value = Array.from({ length: 15 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: `${4 + Math.random() * 8}px`,
    height: `${4 + Math.random() * 8}px`,
    background: i % 3 === 0 ? '#ef4444' : i % 3 === 1 ? '#3b82f6' : '#ffffff',
    delay: `${Math.random() * 4}s`,
    duration: `${3 + Math.random() * 3}s`
  }));
});
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(90deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
  75% {
    transform: translateY(-10px) rotate(270deg);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>
