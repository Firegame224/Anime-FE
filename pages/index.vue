<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
const topAnimeResponse = await useFetch('https://api.jikan.moe/v4/top/anime')

const topAnime = (topAnimeResponse.data.value as any).data

const upComingResponse = await useFetch('https://api.jikan.moe/v4/seasons/upcoming')
const upComingAnime = (upComingResponse.data.value as any).data

const thisSeason = await useFetch('https://api.jikan.moe/v4/seasons/now?sfw')
const thisSeasonAnime = (thisSeason.data.value as any).data
</script>

<template>
    <div class="w-full flex flex-col h-full p-5">
        <div class="w-full flex">
            <AnimeCarousel :animes="topAnime" />
        </div>
        <div class="w-full flex items-center justify-between p-3 md:p-5">
            <p class="text-orange-600 font-bold text-lg md:text-xl">Top Anime</p>
            <NuxtLink
                class="text-white font-semibold text-lg md:text-xl transition duration-700 hover:underline hover:text-orange-600"
                to="/top">Lihat semua</NuxtLink>
        </div>
        <div class="w-full flex">
            <AnimeCard :api-data="topAnime" />
        </div>
        <div class="w-full flex items-center justify-between p-3 md:p-5">
            <p class="text-orange-600 font-bold text-lg md:text-xl">Upcoming Season</p>
        </div>
        <div class="w-full flex">
            <AnimeCard :api-data="upComingAnime" />
        </div>
        <div class="w-full flex items-center justify-between p-3 md:p-5">
            <p class="text-orange-600 font-bold text-lg md:text-xl">This Season</p>
        </div>
        <div class="w-full flex">
            <AnimeCard :api-data="thisSeasonAnime" />
        </div>
    </div>
</template>