<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import AutoPlay from 'embla-carousel-autoplay'

const isHover = ref(false)
const { animes } = defineProps<{
    animes: any[]
}>()

</script>

<template>
    <Carousel :plugins="[AutoPlay({delay : 5000, stopOnInteraction : isHover})]"  class="w-full h-full bg-transparent" @mouseenter="isHover = true">
        <CarouselContent class="flex">
            <CarouselItem v-for="anime in animes" :key="anime.mal_id" class="basis-full w-full">
                <NuxtLink :to="`/detail/${anime?.mal_id}`" class="items-center justify-center flex relative">
                    <img 
                    :src="anime.images.webp.large_image_url" alt="Belum kerender"
                    class="w-full h-52 md:h-72 object-cover opacity-80 rounded-md">
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#121212]">
                        <p
                            class="absolute top-4 text-white left-8 text-[20px] max-w-[250px] sm:max-w-[300px] md:max-w-[90%] truncate md:text-[55px] drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                            {{ anime.title }}
                        </p>
                        <p
                            class="absolute top-16 md:top-24 left-8 text-white text-[15px] md:text-[20px] drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] flex gap-2 items-center justify-center">
                            <Bookmark class="w-4 h-4 md:w-6 md:h-6" fill="white" /> {{ anime.favorites }} Favorites
                        </p>
                        <p
                            class="absolute top-20 md:top-32 left-8 text-white text-[15px] md:text-[20px] drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] flex gap-2 items-center justify-center">
                            <Star class="w-4 h-4 md:w-6 md:h-6" fill="yellow" />
                            {{ anime.score }}
                        </p>
                        <p
                            class="absolute top-5 md:top-10 text-white right-10 text-[15px] md:text-[25px] drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                            #{{ anime.rank }}
                        </p>
                        <p
                            class="absolute flex items-center justify-center gap-3 bottom-5 text-white left-10 text-[15px] md:text-[20px] drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                            <Tv2Icon class="w-4 h-4 md:w-6 md:h-6" />
                            {{ anime.type }}
                        </p>
                        <p
                            class="absolute bottom-5 text-white right-10 text-[15px] md:text-[20px] drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                            {{ anime.episodes }} Episodes
                        </p>
                    </div>
                </NuxtLink>
            </CarouselItem>
        </CarouselContent>
    </Carousel>
</template>