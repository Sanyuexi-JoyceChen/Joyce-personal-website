<script setup>
import ScrollBar from '@/components/Scrollbar.vue';
import LiquidNavbar from '@/components/LiquidNavbar.vue';
import LiquidFilter from '@/filter/LiquidFilter.vue';
import LiquidTexturedFilter from '@/filter/LiquidTexturedFilter.vue';
import Home from '@/views/Home.vue';
import AboutMe from '@/views/AboutMe.vue';
import AboutMeMobile from '@/views/AboutMeMobile.vue';
import Projects from '@/views/Projects.vue';
import Awards from '@/views/Awards.vue';
import Contact from '@/views/Contact.vue';
import CustomA from '@/components/CustomA.vue';
import { provideScrollContext } from '@/composables/useScrollContext';
import { useCursorContext } from '@/composables/useCursorContext';
import { useWindowContext } from '@/composables/useWindowContext';
import { ref, onMounted } from 'vue';
import { AnimatedComponent } from '@/services/AnimatedComponent';
import { useI18n } from '@/i18n';

const { msg } = useI18n();

const { containerRef, contentRef } = provideScrollContext();
const { setPositions } = useCursorContext();
const { resetWidth, md } = useWindowContext();

const component = ref();
const windowComponent = ref();
const bgmRef = ref(null);
const bgmPlaying = ref(false);

const setCursorPos = (e) => {
  if (e instanceof MouseEvent) setPositions(e.clientX, e.clientY);
}

const toggleBgm = () => {
  const audio = bgmRef.value;
  if (!audio) return;
  if (audio.paused) {
    audio.play().then(() => { bgmPlaying.value = true; }).catch(() => {});
  } else {
    audio.pause();
    bgmPlaying.value = false;
  }
};

const tryPlayBgm = () => {
  const audio = bgmRef.value;
  if (!audio || !audio.paused) return;
  audio.play().then(() => {
    bgmPlaying.value = true;
    removeInteractionListeners();
  }).catch(() => {});
};

const interactionEvents = ['click', 'scroll', 'touchstart', 'keydown'];
const removeInteractionListeners = () => {
  interactionEvents.forEach(evt => window.removeEventListener(evt, tryPlayBgm, { capture: true }));
};

onMounted(async () => {
  const trackerUrl = import.meta.env.VITE_TRACKER_URL;
  if (trackerUrl) await fetch(trackerUrl)
  component.value = new AnimatedComponent();
  component.value.tick = setCursorPos;
  component.value.addAnimationTrigger(window, "mousemove");

  windowComponent.value = new AnimatedComponent();
  windowComponent.value.tick = resetWidth;
  windowComponent.value.addAnimationTrigger(window, "resize");

  const audio = bgmRef.value;
  if (audio) {
    audio.volume = 0.3;
    audio.play().then(() => {
      bgmPlaying.value = true;
    }).catch(() => {
      interactionEvents.forEach(evt => window.addEventListener(evt, tryPlayBgm, { capture: true, once: false }));
    });
  }
})
</script>

<template>
  <audio ref="bgmRef" src="/Joycebgm.mp3" loop preload="auto"></audio>
  <button
    @click="toggleBgm"
    class="bgm-btn fixed bottom-5 right-5 z-50 w-8 h-8 rounded-full flex items-center justify-center bg-white/10 text-white/40 hover:bg-white/20 hover:text-white/70 backdrop-blur-sm transition-all duration-300 cursor-pointer"
    :title="bgmPlaying ? 'Mute' : 'Play music'"
  >
    <svg v-if="bgmPlaying" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
      <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z"/>
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
      <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z"/>
      <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z"/>
    </svg>
  </button>
  <section id="loading"
    class="outline-[100dvw] outline-white rounded-[999px] bg-transparent h-0 w-0 fixed top-1/2 left-1/2 z-[100] -translate-1/2 flex items-center justify-center">
    <span class="absolute font-ledger h-40 w-96 flex justify-center items-center">{{ msg.loading }}</span>
  </section>
  <ScrollBar />
  <LiquidFilter />
  <LiquidTexturedFilter />
  <div ref="containerRef" id="container" class="overflow-auto h-dvh flex flex-col items-center font-ledger"
    style="scrollbar-width: none;">
    <LiquidNavbar />
    <div ref="contentRef" id="content" class=" w-full flex flex-col">
      <Home />
      <AboutMe v-if="md" />
      <AboutMeMobile v-else />
      <Projects />
      <Awards />
      <Contact />
      <footer class="relative">
        <span class="absolute bottom-0 text-sm p-[4dvw] opacity-60 text-white">
          <CustomA :text="msg.readCode" href="https://github.com/Sanyuexi-JoyceChen/Joyce-personal-website" target="_blank" />
        </span>
      </footer>
    </div>
  </div>
</template>

<style scoped>
#loading {
  animation: 1.5s resize 3s ease-in-out forwards,
    0s hide 4s forwards;

  span {
    animation: 1s hide 2s forwards;
  }
}

@keyframes resize {
  to {
    width: 150dvw;
    height: 150dvh;
    border-radius: 0px;
  }
}

@keyframes hide {
  to {
    opacity: 0;
    display: none;
    pointer-events: none;
    visibility: hidden;
    z-index: -1;
  }
}
</style>
