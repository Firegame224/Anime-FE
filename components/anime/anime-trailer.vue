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
            <div v-else class="text-white bg-gray-500 w-full h-80 flex items-center justify-center">Trailer tidak tersedia</div>
        </div>
    </aside>
</template>