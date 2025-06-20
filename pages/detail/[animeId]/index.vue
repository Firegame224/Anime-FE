<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
const route = useRoute()
const { animeId } = route.params
const response = await useFetch(`https://api.jikan.moe/v4/anime/${animeId}/full`)
const { data }: any = response.data.value
const anime = data
console.log(data)

</script>

<template>
    <div class="w-full min-h-screen">
        <section class="w-full h-[500px] relative">
            <!-- Gambar Cover -->
            <img :src="anime.images.webp.large_image_url" :alt="anime.title"
                class="w-full h-full object-cover absolute top-0 left-0 z-0">
            <!--  Konten di Kanan -->
            <aside
                class="absolute top-0 right-0 w-1/4 md:w-1/2 h-full z-10 bg-gradient-to-l via-black/70 from-black to-transparent">
            </aside>
            <!-- Konten di kiri -->
            <aside
                class="flex absolute z-20 top-0 left-0 bg-gradient-to-r from-black via-black/70 to-transparent w-1/4 md:w-1/2 h-full items-center">
                <div class="pl-10 max-w-xl hidden md:block">
                    <h1 class="text-white text-4xl font-bold mb-4">{{ anime.title }}</h1>
                    <!-- Genre anime -->
                    <section class="w-full flex gap-3 mb-2">
                        <div v-for="genre in anime.genres" :key="genre.mal_id"
                            class="text-white p-3  bg-[#252525] rounded-md flex items-center justify-center hover:opacity-60 cursor-pointer transition duration-700">
                            <p class="text-white font-semibold text-sm">{{ genre.name }}</p>
                        </div>
                    </section>
                    <p class="text-white text-[15px] drop-shadow-2xl drop-shadow-white text-justify">{{ anime.synopsis
                        }}</p>
                </div>
            </aside>
        </section>
        <section class="w-full">
            <iframe class="w-1/2 h-[400px]" :src="anime.trailer.embed_url"/>
        </section>
    </div>
</template>
