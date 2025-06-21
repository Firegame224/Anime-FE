<script setup lang="ts">
const { url } = defineProps<{
    url: string
}>()
</script>

<template>
    <aside class="w-full md:w-1/2 flex flex-col gap-5">
        <p class="text-orange-600 font-bold text-xl">Anime Trailer :</p>
        <div class="w-full flex items-center justify-center">
            <iframe v-if="url" class="w-full aspect-video rounded-md" :src="url" />
            <div v-else class="text-white bg-[#252525] w-full h-80 flex flex-col items-center justify-center">
                <img class="w-56 h-56" src="../../assets/images/not-Found.png" alt="not-found">
                Trailer tidak tersedia
            </div>
        </div>
    </aside>
</template>