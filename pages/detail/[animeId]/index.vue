<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
const route = useRoute()
const { animeId } = route.params

const animeResponse = await useFetch(`https://api.jikan.moe/v4/anime/${animeId}/full`)
const characterResponse = await useFetch(`https://api.jikan.moe/v4/anime/${animeId}/characters`)

const anime = (animeResponse.data.value as any).data
const character = (characterResponse.data.value as any).data

</script>

<template>
    <div class="w-full">
        <AnimeHeader />
        <div class="w-full min-h-screen p-5 pt-16">
            <AnimeInfo :anime="anime" :character="character"/>
        </div>
    </div>
</template>
