<script setup lang="ts">
import type { Character } from '~/lib/types/anime';


const { characters } = defineProps<{
    characters: Character[]
}>()

</script>

<template>
    <div class="w-full flex items-center justify-between mb-5">
        <p class="text-orange-600 font-bold text-lg">
            Character <span class="text-white">({{ characters.length }})</span>
        </p>
    </div>
    <div v-if="characters.length > 0" class="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        <Card v-for="char in characters" :key="char.mal_id" class="bg-[#252525] border-orange-600 relative">
            <p class="font-semibold text-xs md:text-lg text-orange-600 w-full text-start px-5">Character details :</p>
            <div class="w-full flex flex-col items-center px-5">
                <img :src="char.character.images.webp.image_url" :alt="char.character.name" class="w-full h-28 sm:h-40 md:h-56 rounded-full object-cover">
            </div>
            <div class="w-full px-5">
                <p class="text-white font-semibold text-[10px] sm:text-[12px] md:text-[15px]">Name : <span class="text-orange-600 font-bold">{{ char.character.name }}</span></p>
                <p class="text-orange-600 font-semibold text-[10px] sm:text-[12px] md:text-[15px]">Role : <span class="text-white font-bold">{{ char.role }}</span></p>
            </div>
            <div class="w-full flex px-5 items-center gap-2 justify-center mt-2">
                <Heart class="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />  
                <p class="text-white font-semibold text-[10px] sm:text-[12px] md:text-[15px]">{{ char.favorites }} Favorited</p>
            </div>
            <NuxtLink :to="char.character.url" class="absolute top-2 right-2">
                <ExternalLink class="w-4 h-4 md:w-5 md:h-5 text-orange-600"/>
            </NuxtLink>
        </Card>
    </div>
</template>