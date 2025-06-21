<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<!-- eslint-disable vue/require-default-prop -->
<!-- eslint-disable vue/require-prop-types -->
<script setup lang="ts">

const { anime, character } = defineProps<{
    anime: Record<string, any>,
    character: any[]
}>()

const airedStart = `${anime.aired.prop.from.day}-${anime.aired.prop.from.month}-${anime.aired.prop.from.year}`
const airedEnd = anime.aired.prop.to ? `${anime.aired.prop.to.day}-${anime.aired.prop.to.month}-${anime.aired.prop.to.year}` : "Ongoing"
</script>

<template>
    <!-- Header Content -->
    <section class="w-full md:h-[500px] relative">
        <!-- Airing anime -->
        <p class="font-semibold text-white text-sm absolute right-5 bottom-5 z-20 flex items-center gap-1">
            <Calendar class="w-5 h-5 text-orange-600" />
            {{ airedStart }}
            <span class="text-orange-600 font-bold text-sm">To</span>
            {{ airedEnd }}
        </p>
        <!-- Gambar Cover -->
        <img :src="anime.images.webp.large_image_url" :alt="anime.title" class="w-full h-full object-cover">
        <!--  Konten di Kanan -->
        <aside
            class="absolute top-0 right-0 w-1/4 md:w-1/2 h-full z-10 bg-gradient-to-l via-black/70 from-black to-transparent">
            {{ }}
        </aside>
        <!-- Konten di kiri -->
        <aside
            class="flex absolute z-20 top-0 left-0 bg-gradient-to-r from-black via-black/70 to-transparent w-1/4 md:w-1/2 h-full items-center">
            <div class="pl-10 max-w-xl hidden md:block">
                <h1 class="text-orange-600 text-4xl font-bold mb-4">{{ anime.title }}</h1>
                <div class="text-white text-sm w-full flex gap-2">
                    <span class="text-white font-semibold">Status:
                        {{ anime.status }} || Score: {{ anime.score }}
                    </span>
                    <Star class="w-5 h-5 text-white fill-orange-600" />
                    <p class="text-orange-600"> ({{ anime.scored_by }})</p>
                </div>
                <p class="font-semibold text-white text-sm ">Episodes : {{ anime.episodes }}Eps</p>
                <p class="font-semibold text-white text-sm ">Type : {{ anime.type }}</p>
                <p class="font-semibold text-white text-sm ">
                    Source : <span class="text-orange-600 font-bold text-sm">{{ anime.source }}</span>
                </p>
                <!-- Genre anime -->
                <section class="w-full flex gap-3 my-5">
                    <div 
                    v-for="genre in anime.genres" :key="genre.mal_id"
                    class="text-white p-3  bg-[#252525] rounded-md flex items-center justify-center hover:opacity-60 cursor-pointer transition duration-700">
                        <p class="text-white font-semibold text-sm">{{ genre.name }}</p>
                    </div>
                </section>
            </div>
        </aside>
    </section>

    <!-- Konten Full -->
    <section class="w-full flex flex-col p-5 gap-5">
        <div class="w-full flex flex-col items-start justify-center gap-5">
            <p class="text-xl font-bold text-orange-600">Sinopsis :</p>
            <p class="text-white text-[16px] drop-shadow-2xl drop-shadow-white text-justify">{{ anime.synopsis }}</p>
        </div>
        <div class="w-full flex flex-col md:flex-row items-center justify-between gap-3">
            <AnimeTrailer :url="anime.trailer.embed_url" />
            <aside class="w-1/2 ">
                {{ }}
            </aside>
        </div>
        <div class="w-full flex flex-col">
            <AnimeCharacterCard :characters="character" />
        </div>
    </section>
</template>