<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
const response = await useFetch('https://api.jikan.moe/v4/top/anime')

const { data }: any = response.data.value

</script>

<template>
    <div class="w-full flex flex-col h-full">
        <div class="w-full bg-[#232323] h-[400px] flex items-center justify-center">
            <p class="text-white font-semibold text-lg">Carousel top 10 anime</p>
        </div>
        <div class="w-full flex items-center justify-between p-5">
            <p class="text-white font-semibold text-2xl">Top Anime</p>
            <NuxtLink class="text-white font-semibold text-2xl transition duration-700 hover:underline" to="/anime">Lihat semua</NuxtLink>
        </div>
        <div class="w-full flex">
            <AnimeCard :api-data="data"/>
        </div>
    </div>
</template>