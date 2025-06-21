<script setup>
const route = useRoute()
const router = useRouter()

const title = computed(() => route.query.title || "")
const decoded = computed(() => decodeURI(title.value))

const url = computed(() => `https://api.jikan.moe/v4/anime?q=${title.value}`)

const { data } = await useFetch(url, {
    immediate: true,
    watch : url.value
})
const filteredAnime = computed(() => data.value.data)

</script>

<template>
    <div class="w-full min-h-screen flex flex-col gap-5 p-5">
        <div class="w-full flex justify-between items-center">
            <p class="text-orange-600 font-bold text-lg">Hasil pencarian untuk {{ decoded }}</p>
            <Button class="hover:opacity-70 transition duration-700 cursor-pointer" @click="router.push('/')">
                <p class="text-white font-semibold">Kembali</p>
                <ArrowBigLeft />
            </Button>
        </div>
        <div class="w-full">
            <AnimeCard :api-data="filteredAnime" />
        </div>
    </div>
</template>