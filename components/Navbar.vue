<script setup>
const route = useRoute()
</script>

<template>
    <nav v-if=" !route.path.startsWith('/detail') " class="w-full bg-[#252525] h-32 md:h-16 flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between p-5">
        <p class="font-bold text-2xl md:text-xl text-orange-600">My-AnimeList</p>
        <AnimeSearch class="hidden md:flex"/>
        <AnimeSearch class="w-full flex md:hidden"/>
        <p>{{}}</p>
    </nav>
</template>