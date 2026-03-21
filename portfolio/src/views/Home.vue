<script setup>
import { ref, onMounted } from 'vue';
import TextAnim from '@/components/TextAnim.vue'
import FramedMainSection from '@/layouts/FramedMainSection.vue';
import ParticleImage from '@/components/ParticleImage.vue';
import { useI18n } from '@/i18n';

const { msg, toggleLocale } = useI18n();
const frameRef = ref(null);
const containerRef = ref(null);

onMounted(() => {
    containerRef.value = frameRef.value.sectionRef;
});
</script>

<template>
    <FramedMainSection ref="frameRef" id="joyce" class="h-dvh">
        <div 
            class="relative h-full w-full rounded-4xl overflow-hidden bg-black flex flex-col justify-center items-center text-center">
            <ParticleImage />
            <button
                @click="toggleLocale"
                class="absolute top-5 right-5 z-20 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-sm font-rubik tracking-wider border border-white/20 transition-all cursor-pointer">
                {{ msg.langToggle }}
            </button>
            <div
                class="relative z-10 text-[#fff] font-rubik uppercase text-[7dvw] xl:text-[9dvh] leading-none flex flex-col justify-center items-center pointer-events-none">
                <p class="flex h-[6dvw] xl:h-[7.5dvh] ">{{ msg.hero.line1 }}</p>
                <p class="flex h-[6dvw] xl:h-[7.5dvh] overflow-hidden">
                    <span v-if="msg.hero.line2prefix" class="standard-text">{{ msg.hero.line2prefix }}</span>
                    <TextAnim 
                        v-if="containerRef"
                        :texts="msg.hero.rotatingWords" 
                        :container="containerRef" 
                        :duration="2.5" 
                        :class="'text-red-custom'" 
                    />
                </p>
                <p class="flex h-[6dvw] xl:h-[7.5dvh] ">{{ msg.hero.line3 }}</p>
                <p class="flex h-[6dvw] xl:h-[7.5dvh] ">{{ msg.hero.line4 }}</p>
            </div>
        </div>
    </FramedMainSection>
</template>
