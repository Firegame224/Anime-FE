<script setup>
const route = useRoute()
</script>

<template>
    <nav v-if=" !route.path.startsWith('/detail') " class="w-full bg-[#303030] h-14 flex items-center justify-between p-5">
        <p class="font-bold text-xl text-orange-800">My-AnimeList</p>
    </nav>
</template>