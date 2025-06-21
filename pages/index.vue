<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
const response = await useFetch('https://api.jikan.moe/v4/top/anime')

const { data }: any = response.data.value

</script>

<template>
    <div class="w-full flex flex-col h-full p-5">
        <div class="w-full bg-[#232323] h-[250px] md:h-[400px] flex items-center justify-center">
            <p class="text-white font-semibold text-lg">Carousel top 10 anime</p>
        </div>
        <div class="w-full flex items-center justify-between p-3 md:p-5">
            <p class="text-orange-700 font-bold text-lg md:text-2xl">Top Anime</p>
            <NuxtLink class="text-white font-semibold text-lg md:text-2xl transition duration-700 hover:underline" to="/top">Lihat semua</NuxtLink>
        </div>
        <div class="w-full flex">
            <AnimeCard :api-data="data"/>
        </div>
    </div>
</template>