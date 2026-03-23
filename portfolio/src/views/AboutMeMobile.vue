<script setup>
import { computed } from 'vue';
import FramedMainSection from '@/layouts/FramedMainSection.vue'
import { useI18n } from '@/i18n';

const { msg } = useI18n();
const stories = computed(() => msg.value.aboutMe);
</script>

<template>
    <FramedMainSection id="career" class="min-h-[100dvh] flex relative">
        <div
            class="h-full w-full rounded-4xl bg-[url('/backgrounds/career.jpg')] bg-cover bg-right text-[#3E2723] flex justify-center items-end text-center p-4">
            <div class="grid grid-cols-1 md:grid-cols-3">

                <div v-for="(story, i) in stories" :key="i"
                    class="h-fit flex-1 p-4 flex flex-col items-start cursor-default text-left gap-2">
                    <span class="text-sm opacity-70">{{ story.from }} — {{ story.to }}</span>
                    <h1 class="font-bold text-xl leading-none font-rubik">{{ story.when }}</h1>
                    <p class="flex-1 h-fit">
                        {{ story.description }}
                    </p>
                </div>
            </div>
        </div>
    </FramedMainSection>
</template>
