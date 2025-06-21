<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const page = computed(() => Number(route.query.page) || 1)
const url = computed(() => `https://api.jikan.moe/v4/top/anime?page=${page.value}`)
const { data, refresh } = await useFetch(url)

const topAnime = computed ( () => data.value as any )
const lastPage = computed(() => topAnime?.value.pagination?.last_visible_page || 1)

const scrollToTop = () => {
    window.scrollTo({
        behavior: "smooth",
        top: 0
    })
}

const nextPage = () => {
    scrollToTop()
    router.push({ path: '/top', query: { page: page.value + 1 } })
}

const prevPage = () => {
    scrollToTop()
    router.push({ path: '/top', query: { page: page.value - 1 } })
}

watch(() => route.query.page, () => refresh())
</script>

<template>
    <div class="w-full min-h-screen flex flex-col p-5 gap-5">
        <div class="w-full flex justify-between items-center">
            <p class="text-orange-600 font-bold text-lg">Popular Anime</p>
            <Button class="hover:opacity-70 transition duration-700 cursor-pointer" @click="router.push('/')">
                <p class="text-white font-semibold">Kembali</p>
                <ArrowBigLeft />
            </Button>
        </div>
        <div class="w-full">
            <AnimeCard :api-data="topAnime.data" />
        </div>
        <div class="w-full flex items-center justify-center gap-5">
            <Button :disabled="page === 1" @click="prevPage">Prev</Button>
            <p class="text-white font-semibold text-sm">{{ page }}</p>
            <Button :disabled="page === lastPage" @click="nextPage">Next</Button>
        </div>
    </div>
</template>