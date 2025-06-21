<script setup lang="ts">
import type { Anime } from '~/lib/types/anime';

const props = defineProps<{
    apiData: Anime[]
}>()

const router = useRouter()
</script>

<template>
    <div
        class="w-full flex overflow-x-auto overflow-y-hidden sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 xl:gap-5">
        <Card 
            v-for="anime in props.apiData" :key="anime.mal_id"
            class="group min-w-[200px] relative bg-transparent border-none text-white p-2 items-center cursor-pointer"
            @click="router.push(`/detail/${anime.mal_id}`)">
            <CardContent class="w-full items-center justify-between flex flex-col gap-1 p-0">
                <img 
                    class="w-full h-[260px] md:h-[340px] object-cover" :src="anime.images.webp.large_image_url"
                    :alt="anime.title">
                <p class="text-white font-semibold text-start w-full">{{ anime.title }}</p>
            </CardContent>
            <div
                class="w-full p-5 h-full absolute opacity-0 flex flex-col items-start bg-[#202020] group-hover:opacity-95 transition duration-700">
                <p class="font-semibold text-orange-600 mb-5">{{ anime.title }}</p>
                <section class="w-full grid gap-3 my-5 grid-cols-2">
                    <div 
                        v-for="genre in anime.genres" :key="genre.mal_id"
                        class="text-white p-1 bg-black rounded-md flex items-center justify-center hover:opacity-60 transition duration-700">
                        <p class="text-white font-semibold text-xs">{{ genre.name }}</p>
                    </div>
                </section>
                <div class="flex items-center justify-center gap-1">
                    <p class="text-white font-semibold">{{ anime.score }}</p>
                    <Star class="w-4 h-4 text-orange-600" />
                </div>
                <p class="text-gray-500 mb-1">Episodes :{{ anime.episodes }}</p>
                <p class="font-semibold text-white line-clamp-4">{{ anime.synopsis }}</p>
            </div>
        </Card>
    </div>
</template>